import Image from "next/image";
import { Reveal } from "./Reveal";

const STOPS = [
  {
    time: "6:00 AM",
    title: "On the way in",
    body: "Doors open at six. Coffee is fresh, the paper is in, and you are out the door before the bus.",
  },
  {
    time: "12:30 PM",
    title: "The midday run",
    body: "A cold drink, a snack, top up the phone, hit the ATM. In and out in two minutes.",
  },
  {
    time: "9:00 PM",
    title: "The last stop home",
    body: "Bread and milk you forgot, a scratch-off, a late craving. We stay lit until nine.",
  },
];

export default function Daily() {
  return (
    <section id="daily" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: the two real photos stacked */}
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="col-span-2">
              <figure className="qs-photo">
                <Image src="/img/coffee-cup.jpg" alt="A fresh cup of coffee at Quick Stop in the morning" width={900} height={600} className="h-full w-full object-cover" />
                <figcaption className="qs-photo-cap">Morning coffee, on from open</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="col-span-2">
              <figure className="qs-photo">
                <Image src="/img/hot-food.jpg" alt="A hot bite to grab on the go at Quick Stop" width={900} height={600} className="h-full w-full object-cover" />
                <figcaption className="qs-photo-cap">Grab a hot bite on the go</figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: the day timeline */}
          <div>
            <Reveal><span className="qs-tag">Your Day</span></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
                Everything you need on your daily routine.
              </h2>
            </Reveal>

            <div className="mt-9 flex flex-col">
              {STOPS.map((s, i) => (
                <Reveal key={s.time} delay={0.06 * i}>
                  <div className="qs-stop">
                    <span className="qs-stop-time">{s.time}</span>
                    <div>
                      <h3 className="font-display text-[1.5rem] font-600 uppercase tracking-wide">{s.title}</h3>
                      <p className="mt-1 max-w-[42ch] text-[var(--chalk-2)]">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
