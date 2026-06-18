import { STORE } from "./store";

export default function Footer() {
  return (
    <footer className="relative-z border-t border-[var(--rule)] px-5 py-14 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="qs-mark" aria-hidden>
                <span className="qs-mark-q">Q</span>
                <span className="qs-mark-s">S</span>
              </span>
              <span className="font-display text-[1.6rem] font-600 uppercase leading-none tracking-wide">
                Quick<span className="text-[var(--neon)]"> Stop</span>
              </span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[var(--chalk-2)]">
              The corner that never misses. Coffee, cold drinks, lotto, ATM, gas
              and everything in between, on Main Street in Orange.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-[0.95rem]">
            <span className="qs-tag mb-1">Stop In</span>
            <span className="text-[var(--chalk)]">{STORE.street}, {STORE.city}, {STORE.state} {STORE.zip}</span>
            <a href={`tel:${STORE.phoneTel}`} className="text-[var(--neon)] hover:underline">{STORE.phone}</a>
            <span className="text-[var(--chalk-2)]">Open every day · 6:00 AM to 9:00 PM</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--rule)] pt-6 text-[0.82rem] text-[var(--chalk-2)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Quick Stop · Orange, NJ. All rights reserved.</span>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="qs-credit"
          >
            built by <span>bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
