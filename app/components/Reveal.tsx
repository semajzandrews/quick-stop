"use client";

import { useEffect } from "react";

/** Arms the pure-CSS reveal after mount, only when the tab is visible.
 *  Belt-and-suspenders: force-reveal after 2.4s so content is never stranded. */
export function RevealArmer() {
  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && document.visibilityState === "visible") {
      html.classList.add("reveal-armed");
    }
    const t = setTimeout(() => html.classList.add("reveal-done"), 2400);
    return () => clearTimeout(t);
  }, []);
  return null;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const style = { ["--d" as string]: `${delay}s` } as React.CSSProperties;
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
