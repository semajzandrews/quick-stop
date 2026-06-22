import { STORE } from "./store";
import { Reveal } from "./Reveal";

const HOURS = [
  { d: "Monday", h: "6:00 AM to 9:00 PM" },
  { d: "Tuesday", h: "6:00 AM to 9:00 PM" },
  { d: "Wednesday", h: "6:00 AM to 9:00 PM" },
  { d: "Thursday", h: "6:00 AM to 9:00 PM" },
  { d: "Friday", h: "6:00 AM to 9:00 PM" },
  { d: "Saturday", h: "6:00 AM to 9:00 PM" },
  { d: "Sunday", h: "6:00 AM to 9:00 PM" },
];

export default function Visit() {
  return (
    <section id="visit" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <Reveal><span className="qs-tag">Visit</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
            Find us on Main Street.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map (Google keyless embed; branded fallback sits behind it so the
              frame is never a blank void if the embed is ever blocked) */}
          <Reveal>
            <div className="qs-map">
              <a
                className="qs-map-fallback"
                href={`https://www.google.com/maps/search/?api=1&query=${STORE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden
                tabIndex={-1}
              >
                <span className="qs-map-pin" aria-hidden>
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="qs-map-fb-addr">
                  {STORE.street}, {STORE.city}, {STORE.state}
                </span>
                <span className="qs-map-fb-link">Open in Google Maps</span>
              </a>
              <iframe
                title="Quick Stop on Main Street, Orange NJ"
                src={`https://www.google.com/maps?q=${STORE.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.08}>
            <div className="qs-card flex h-full flex-col gap-6 p-7">
              <div>
                <div className="qs-tag">Address</div>
                <p className="mt-2 font-display text-[1.5rem] font-600 uppercase leading-tight">
                  {STORE.street}
                  <br />
                  {STORE.city}, {STORE.state} {STORE.zip}
                </p>
              </div>

              <div>
                <div className="qs-tag">Hours</div>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {HOURS.map((row) => (
                    <li key={row.d} className="flex items-center justify-between text-[0.95rem]">
                      <span className="text-[var(--chalk-2)]">{row.d}</span>
                      <span className="text-[var(--chalk)]">{row.h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a href={`tel:${STORE.phoneTel}`} className="btn btn-neon">Call {STORE.phone}</a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${STORE.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
