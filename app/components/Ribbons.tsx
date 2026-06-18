"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "COFFEE", "COLD DRINKS", "LOTTO", "ATM", "SNACKS", "GROCERIES",
  "GAS", "CANDY", "ICE CREAM", "WATER", "CHIPS", "ENERGY DRINKS",
  "BREAD + MILK", "PHONE CARDS", "HOT FOOD", "EVERYDAY ESSENTIALS",
];

function Band({ words, reverse, dur, accent }: { words: string[]; reverse?: boolean; dur: number; accent: string }) {
  const doubled = [...words, ...words];
  return (
    <div className="overflow-hidden py-2">
      <div className={`ribbon-track ${reverse ? "rev" : ""}`} style={{ ["--rib-dur" as string]: `${dur}s` }}>
        {doubled.map((w, i) => (
          <span key={i} className="mx-5 inline-flex items-center gap-5">
            <span className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-600 uppercase tracking-wide text-[var(--chalk)]">
              {w}
            </span>
            <span aria-hidden style={{ color: accent }} className="text-[1.4rem]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Diagonal kinetic inventory ribbons. Scroll velocity nudges the speed. */
export default function Ribbons() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let last = window.scrollY;
    let raf = 0;
    let speed = 1;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - last);
      last = window.scrollY;
      speed = Math.min(3.4, 1 + dy * 0.05);
      const tracks = wrapRef.current?.querySelectorAll<HTMLElement>(".ribbon-track");
      tracks?.forEach((t) => (t.style.animationDuration = `${Math.max(8, 30 / speed)}s`));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(decay);
    };
    const decay = () => {
      speed = Math.max(1, speed - 0.06);
      const tracks = wrapRef.current?.querySelectorAll<HTMLElement>(".ribbon-track");
      tracks?.forEach((t) => (t.style.animationDuration = `${Math.max(8, 30 / speed)}s`));
      if (speed > 1.02) raf = requestAnimationFrame(decay);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="qs-ribbons relative-z select-none" aria-hidden>
      <div className="qs-ribbon-skew">
        <div className="border-y border-[var(--rule)] bg-[var(--night-2)]/60">
          <Band words={WORDS.slice(0, 8)} dur={30} accent="var(--neon)" />
        </div>
        <div className="border-b border-[var(--rule)] bg-[var(--magenta)]/12">
          <Band words={WORDS.slice(8)} dur={26} reverse accent="var(--amber)" />
        </div>
      </div>
    </div>
  );
}
