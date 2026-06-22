import { Reveal } from "./Reveal";

type Aisle = {
  name: string;
  note: string;
  glyph: React.ReactNode;
  tint: string;
  span?: string;
};

/* Custom neon-tube glyphs, drawn as continuous strokes so they read like bent
   glass tubes (not a stock icon set). Each one is specific to the category. */
const G = (d: React.ReactNode) => (
  <svg
    viewBox="0 0 56 56"
    className="qs-glyph"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {d}
  </svg>
);

const AISLES: Aisle[] = [
  {
    name: "Coffee + Hot Drinks",
    note: "Fresh pot on from open. Grab a cup on the way in.",
    tint: "var(--neon)",
    span: "qs-aisle-lead",
    glyph: G(
      <>
        <path d="M12 22h28v9a13 13 0 0 1-13 13h-2a13 13 0 0 1-13-13z" />
        <path d="M40 24h4a6 6 0 0 1 0 12h-4" />
        <path d="M20 8c-1.4 2.4 1.4 3.6 0 6M28 7c-1.4 2.4 1.4 3.6 0 6" />
      </>
    ),
  },
  {
    name: "Cold Drinks + Water",
    note: "Soda, energy drinks, juice and water, all kept cold.",
    tint: "var(--cyan)",
    glyph: G(
      <>
        <rect x="18" y="10" width="20" height="38" rx="4" />
        <path d="M18 20h20M22 10v-3h12v3" />
        <path d="M28 27v10" />
      </>
    ),
  },
  {
    name: "Snacks + Candy",
    note: "Chips, candy, ice cream and the late-night cravings.",
    tint: "var(--amber)",
    glyph: G(
      <>
        <path d="M12 24l32-7 2 9-32 7z" />
        <path d="M12 24l-2 9 32 7 2-9" />
        <path d="M22 20v14M30 18v14" />
      </>
    ),
  },
  {
    name: "Groceries + Daily",
    note: "Bread, milk, eggs and the small stuff you ran out of.",
    tint: "var(--neon)",
    glyph: G(
      <>
        <path d="M10 16h5l4 23h21l5-16H16" />
        <circle cx="23" cy="46" r="2.6" />
        <circle cx="37" cy="46" r="2.6" />
      </>
    ),
  },
  {
    name: "Lotto + Scratch-Offs",
    note: "Play your numbers. Tickets and scratch-offs at the counter.",
    tint: "var(--amber)",
    span: "qs-aisle-wide",
    glyph: G(
      <>
        <rect x="10" y="16" width="36" height="24" rx="4" />
        <path d="M19 28h7M33 24l5 8M38 24l-5 8" />
        <circle cx="16" cy="23" r="1.4" />
        <circle cx="40" cy="33" r="1.4" />
      </>
    ),
  },
  {
    name: "ATM + Phone Cards",
    note: "Cash when you need it, plus prepaid phone top-ups.",
    tint: "var(--cyan)",
    glyph: G(
      <>
        <rect x="14" y="9" width="28" height="38" rx="4" />
        <rect x="20" y="15" width="16" height="10" rx="2" />
        <path d="M20 33h16M20 39h10" />
      </>
    ),
  },
  {
    name: "Gas + Service",
    note: "Fuel up at the pump. It is a gas and service station too.",
    tint: "var(--neon)",
    glyph: G(
      <>
        <path d="M14 47V14a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v33" />
        <path d="M14 26h20" />
        <path d="M34 18l6 5v16a4 4 0 0 0 8 0V28l-5-5" />
      </>
    ),
  },
  {
    name: "Everyday Essentials",
    note: "Batteries, toiletries, household and the in-a-pinch picks.",
    tint: "var(--amber)",
    span: "qs-aisle-wide",
    glyph: G(
      <>
        <rect x="12" y="12" width="14" height="14" rx="3" />
        <rect x="30" y="12" width="14" height="14" rx="3" />
        <rect x="12" y="30" width="14" height="14" rx="3" />
        <rect x="30" y="30" width="14" height="14" rx="3" />
      </>
    ),
  },
];

export default function Aisles() {
  return (
    <section id="aisles" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[42rem]">
            <Reveal>
              <span className="qs-tag">The Aisles</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
                If you need it on a normal day, it is on a shelf in here.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-[34ch] text-[var(--chalk-2)]">
              Small store, deep shelves. Quick Stop carries the things you
              actually reach for between home and wherever you are headed.
            </p>
          </Reveal>
        </div>

        {/* Bespoke shelf wall: an asymmetric bento of tactile aisle tiles,
            each with a hand-drawn neon-tube glyph and its own glow on hover. */}
        <div className="qs-aisle-grid mt-12">
          {AISLES.map((a, i) => (
            <Reveal
              key={a.name}
              delay={0.04 * i}
              className={`qs-aisle ${a.span ?? ""}`}
            >
              <article
                className="qs-aisle-tile"
                style={{ ["--tint" as string]: a.tint }}
              >
                <span className="qs-aisle-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="qs-glyph-wrap">{a.glyph}</span>
                <div className="qs-aisle-body">
                  <h3 className="qs-aisle-name">{a.name}</h3>
                  <p className="qs-aisle-note">{a.note}</p>
                </div>
                <span className="qs-aisle-edge" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
