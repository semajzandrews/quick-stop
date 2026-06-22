"use client";

const WORDS = [
  "COFFEE", "COLD DRINKS", "LOTTO", "ATM", "SNACKS", "GROCERIES",
  "GAS", "CANDY", "ICE CREAM", "WATER", "CHIPS", "ENERGY DRINKS",
  "BREAD + MILK", "PHONE CARDS", "HOT FOOD", "EVERYDAY ESSENTIALS",
];

function Band({
  words,
  reverse,
  dur,
  accent,
  variant = "solid",
}: {
  words: string[];
  reverse?: boolean;
  dur: number;
  accent: string;
  variant?: "solid" | "outline";
}) {
  const doubled = [...words, ...words];
  return (
    <div className="overflow-hidden py-2">
      <div className={`ribbon-track ${reverse ? "rev" : ""}`} style={{ ["--rib-dur" as string]: `${dur}s` }}>
        {doubled.map((w, i) => (
          <span key={i} className="mx-5 inline-flex items-center gap-5">
            <span
              className={`font-display text-[clamp(1.6rem,4vw,2.6rem)] font-600 uppercase tracking-wide ${
                variant === "outline" ? "qs-ribbon-outline" : "text-[var(--chalk)]"
              }`}
            >
              {w}
            </span>
            <span aria-hidden style={{ color: accent }} className="text-[1.4rem]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Diagonal kinetic inventory ribbons.
 *  Each band glides autonomously at its own constant speed via a CSS keyframe
 *  loop (see .ribbon-track in globals.css) — fully independent of scroll
 *  position so the motion stays steady. prefers-reduced-motion holds them still. */
export default function Ribbons() {
  return (
    <div className="qs-ribbons relative-z select-none" aria-hidden>
      <div className="qs-ribbon-skew">
        {/* back ribbon: large outline type, faint, drifts slow (depth) */}
        <div className="qs-ribbon-back">
          <Band words={WORDS.slice(4, 12)} dur={44} accent="var(--magenta-2)" variant="outline" />
        </div>
        {/* lead ribbon: solid neon-edged magenta band */}
        <div className="qs-ribbon-lead">
          <Band words={WORDS.slice(0, 8)} dur={30} accent="var(--neon)" />
        </div>
        {/* counter ribbon: reverse, amber-sparked */}
        <div className="qs-ribbon-counter">
          <Band words={WORDS.slice(8)} dur={26} reverse accent="var(--amber)" />
        </div>
      </div>
    </div>
  );
}
