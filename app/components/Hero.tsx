import OpenSign from "./OpenSign";
import HeroVideo from "./HeroVideo";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="qs-hero relative isolate overflow-hidden px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16"
    >
      {/* Real night-shop footage: a neon OPEN sign glowing in a storefront window.
          Muted, looping, behind everything. Reduced-motion holds the poster still. */}
      <HeroVideo />
      {/* Magenta electric-night grade so the footage fits the art direction */}
      <div className="qs-hero-grade" aria-hidden />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: statement */}
        <div>
          <Reveal>
            <span className="qs-tag">Main Street · Orange, NJ</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,11vw,7rem)] font-700 uppercase leading-[0.86] tracking-[0.005em]">
              The corner
              <br />
              that never
              <br />
              <span className="neon-text text-[var(--neon)]">misses.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-[var(--chalk-2)]">
              Coffee on the way in, a cold drink on the way home, lotto, the ATM,
              snacks, groceries and gas. Everything you reach for on a normal day,
              all under one lit-up sign on Main Street. Recently remodeled, still
              the same neighborhood stop.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#aisles" className="btn btn-neon">See what we stock</a>
              <a href="#visit" className="btn btn-ghost">Get directions</a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--chalk-2)]">
              <span className="flex items-center gap-2">
                <span className="text-[var(--neon)]">●</span> Open 7 days a week
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--amber)]">●</span> Lotto + ATM in-store
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--cyan)]">●</span> Gas + service station
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: the signature neon sign */}
        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <OpenSign />
        </Reveal>
      </div>
    </section>
  );
}
