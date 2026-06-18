import { Reveal } from "./Reveal";

const STATS = [
  { num: "7", label: "Days a week, every week" },
  { num: "15 hrs", label: "Open daily, 6 AM to 9 PM" },
  { num: "1", label: "Corner that has it all" },
  { num: "New", label: "Recently remodeled inside" },
];

export default function Corner() {
  return (
    <section id="corner" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="qs-corner-panel">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal><span className="qs-tag">The Corner</span></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
                  A small store that
                  <br className="hidden sm:block" /> punches way above its size.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-relaxed text-[var(--chalk-2)]">
                  Quick Stop sits right on Main Street in Orange. It is the kind of
                  corner store the neighborhood runs on, friendly at the counter,
                  stocked with the everyday things, and recently remodeled so it
                  feels brand new the moment you walk in. Regulars put it simply:
                  you can find everything you need on your daily routine.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote className="qs-quote">
                  &ldquo;A great place to be, always good customer service.&rdquo;
                  <cite>Google review</cite>
                </blockquote>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--rule)]">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-[var(--night-2)] p-6">
                    <div className="qs-stat-num">{s.num}</div>
                    <div className="mt-2 text-[0.86rem] leading-snug text-[var(--chalk-2)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
