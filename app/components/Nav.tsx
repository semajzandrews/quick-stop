"use client";

import { useEffect, useState } from "react";
import { STORE, NAV_LINKS, getStatus } from "./store";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<{ open: boolean; clock: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    const tick = () => setStatus(getStatus(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/85 backdrop-blur-md border-b border-[var(--rule)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3.5 md:px-8">
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Quick Stop home">
          <span className="qs-mark" aria-hidden>
            <span className="qs-mark-q">Q</span>
            <span className="qs-mark-s">S</span>
          </span>
          <span className="font-display text-[1.35rem] font-600 leading-none tracking-wide uppercase">
            Quick<span className="text-[var(--neon)]"> Stop</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.98rem] uppercase tracking-wide text-[var(--chalk-2)] transition-colors hover:text-[var(--neon)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {mounted && status && (
            <span
              className="hidden items-center gap-2 rounded-full border border-[var(--rule)] px-3 py-1.5 text-[0.72rem] font-medium tracking-wide sm:flex"
              suppressHydrationWarning
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  status.open ? "bg-[var(--neon)] qs-pulse" : "bg-[var(--chalk-2)]"
                }`}
              />
              <span className={status.open ? "text-[var(--neon)]" : "text-[var(--chalk-2)]"}>
                {status.open ? "Open now" : "Closed"}
              </span>
              <span className="text-[var(--chalk-2)]">· {status.clock}</span>
            </span>
          )}

          {/* Desktop call */}
          <a href={`tel:${STORE.phoneTel}`} className="btn btn-neon hidden text-[0.92rem] sm:inline-flex">
            {STORE.phone}
          </a>
          {/* Mobile call icon (collapses to ~46px) */}
          <a
            href={`tel:${STORE.phoneTel}`}
            aria-label="Call Quick Stop"
            className="btn btn-neon inline-flex h-[46px] w-[46px] !p-0 sm:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[var(--rule-2)] lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[2px] w-5 bg-[var(--chalk)] transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-[2px] w-5 bg-[var(--chalk)] transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-[2px] w-5 bg-[var(--chalk)] transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-[var(--rule)] bg-night/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-lg uppercase tracking-wide text-[var(--chalk-2)] py-2 hover:text-[var(--neon)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
