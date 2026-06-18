import { Reveal } from "./Reveal";

type Aisle = { name: string; note: string; glyph: React.ReactNode; tint: string };

const G = (d: React.ReactNode) => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d}
  </svg>
);

const AISLES: Aisle[] = [
  {
    name: "Coffee + Hot Drinks",
    note: "Fresh pot on from open. Grab a cup on the way in.",
    tint: "var(--neon)",
    glyph: G(<>
      <path d="M8 18h26v8a10 10 0 0 1-10 10h-6a10 10 0 0 1-10-10z" />
      <path d="M34 20h4a5 5 0 0 1 0 10h-4" />
      <path d="M16 8c-1 2 1 3 0 5M24 7c-1 2 1 3 0 5" />
    </>),
  },
  {
    name: "Cold Drinks + Water",
    note: "Soda, energy drinks, juice and water, all kept cold.",
    tint: "var(--cyan)",
    glyph: G(<>
      <rect x="15" y="8" width="18" height="32" rx="3" />
      <path d="M15 16h18M19 8v-2h10v2" />
      <path d="M24 22v8" />
    </>),
  },
  {
    name: "Snacks + Candy",
    note: "Chips, candy, ice cream and the late-night cravings.",
    tint: "var(--amber)",
    glyph: G(<>
      <path d="M10 20l28-6 2 8-28 6z" />
      <path d="M10 20l-2 8 28 6 2-8" />
      <path d="M18 17v12M26 15v12" />
    </>),
  },
  {
    name: "Groceries + Daily",
    note: "Bread, milk, eggs and the small stuff you ran out of.",
    tint: "var(--neon)",
    glyph: G(<>
      <path d="M8 14h4l4 20h18l4-14H14" />
      <circle cx="20" cy="40" r="2.4" />
      <circle cx="32" cy="40" r="2.4" />
    </>),
  },
  {
    name: "Lotto + Scratch-Offs",
    note: "Play your numbers. Tickets and scratch-offs at the counter.",
    tint: "var(--amber)",
    glyph: G(<>
      <rect x="9" y="14" width="30" height="20" rx="3" />
      <path d="M16 24h6M27 21l4 6M31 21l-4 6" />
      <circle cx="14" cy="20" r="1.2" /><circle cx="34" cy="28" r="1.2" />
    </>),
  },
  {
    name: "ATM + Phone Cards",
    note: "Cash when you need it, plus prepaid phone top-ups.",
    tint: "var(--cyan)",
    glyph: G(<>
      <rect x="12" y="9" width="24" height="30" rx="3" />
      <rect x="17" y="14" width="14" height="8" rx="1.5" />
      <path d="M17 28h14M17 33h8" />
    </>),
  },
  {
    name: "Gas + Service",
    note: "Fuel up at the pump. It is a gas and service station too.",
    tint: "var(--neon)",
    glyph: G(<>
      <path d="M12 40V12a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v28" />
      <path d="M12 22h17" />
      <path d="M29 16l5 4v14a3 3 0 0 0 3 3 3 3 0 0 0 3-3V24l-4-4" />
    </>),
  },
  {
    name: "Everyday Essentials",
    note: "Smokes, batteries, toiletries and the in-a-pinch picks.",
    tint: "var(--amber)",
    glyph: G(<>
      <rect x="10" y="10" width="12" height="12" rx="2" />
      <rect x="26" y="10" width="12" height="12" rx="2" />
      <rect x="10" y="26" width="12" height="12" rx="2" />
      <rect x="26" y="26" width="12" height="12" rx="2" />
    </>),
  },
];

export default function Aisles() {
  return (
    <section id="aisles" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[42rem]">
          <Reveal><span className="qs-tag">The Aisles</span></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
              If you need it on a normal day, it is on a shelf in here.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-[48ch] text-[var(--chalk-2)]">
              Small store, deep shelves. Quick Stop carries the things you actually
              reach for between home and wherever you are headed.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AISLES.map((a, i) => (
            <Reveal key={a.name} delay={0.04 * i}>
              <div className="qs-card flex h-full flex-col gap-3 p-6">
                <span style={{ color: a.tint }}>{a.glyph}</span>
                <h3 className="font-display text-[1.35rem] font-600 uppercase leading-tight tracking-wide">
                  {a.name}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-[var(--chalk-2)]">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
