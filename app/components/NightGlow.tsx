"use client";

import { useEffect, useRef } from "react";

/**
 * NightGlow — a lightweight raw-WebGL ambient layer for the electric-night
 * corner. Slow-drifting fbm "city glow" blooms in the magenta palette, with a
 * faint moving sheen like wet asphalt under neon. No Three.js (tiny bundle).
 *
 * Sits fixed behind everything (z below content). Pauses when the tab is hidden
 * and when prefers-reduced-motion is set (it draws one static frame then stops).
 * If WebGL is unavailable it removes itself and the CSS night-grain remains.
 */
export default function NightGlow() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: false }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) {
      canvas.style.display = "none";
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vert = `
      attribute vec2 p;
      void main() { gl_Position = vec4(p, 0.0, 1.0); }
    `;

    // fbm noise -> magenta city-glow blooms + slow horizontal "asphalt sheen".
    const frag = `
      precision mediump float;
      uniform vec2  u_res;
      uniform float u_time;

      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      float fbm(vec2 p){
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.02; a *= 0.5; }
        return v;
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 asp = vec2(u_res.x / u_res.y, 1.0);
        vec2 p = uv * asp;
        float t = u_time * 0.025;

        // drifting glow field
        float n = fbm(p * 2.3 + vec2(t, t * 0.4));
        float n2 = fbm(p * 4.5 - vec2(t * 0.6, t));

        // magenta corner-store palette
        vec3 night   = vec3(0.043, 0.027, 0.063);   // #0B0710
        vec3 magenta = vec3(0.557, 0.231, 0.557);   // #8E3B8E
        vec3 neon    = vec3(0.910, 0.475, 0.910);   // #E879E8

        // two soft blooms that breathe
        float bloomA = smoothstep(0.55, 1.0, n) * (0.6 + 0.4 * sin(u_time * 0.5));
        float bloomB = smoothstep(0.62, 1.0, n2) * (0.5 + 0.5 * sin(u_time * 0.33 + 1.7));

        vec3 col = night;
        col += magenta * bloomA * 0.55;
        col += neon * bloomB * 0.22;

        // faint vertical city-glow from the bottom (street light spill)
        float spill = pow(1.0 - uv.y, 3.0) * 0.18;
        col += magenta * spill;

        // top corner pool of light (sign glow)
        float corner = smoothstep(0.8, 0.0, distance(uv, vec2(0.86, 0.92))) * 0.16;
        col += neon * corner;

        // keep it subtle; it sits UNDER the night-grain + content
        float alpha = clamp(0.10 + bloomA * 0.42 + bloomB * 0.20 + spill + corner, 0.0, 0.82);
        gl_FragColor = vec4(col, alpha);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compile(gl.VERTEX_SHADER, vert);
    const fs = compile(gl.FRAGMENT_SHADER, frag);
    if (!vs || !fs) {
      canvas.style.display = "none";
      return;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      canvas.style.display = "none";
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    // cap DPR so the full-screen fragment shader stays cheap
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
        gl!.viewport(0, 0, w, h);
      }
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf = 0;
    const start = performance.now();
    let running = true;

    function frame(now: number) {
      if (!running) return;
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, (now - start) / 1000);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    }

    function drawOnce() {
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    }

    if (reduce) {
      drawOnce(); // static frame, no animation loop
    } else {
      raf = requestAnimationFrame(frame);
    }

    function onVis() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    }
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={ref} className="qs-nightglow" aria-hidden />;
}
