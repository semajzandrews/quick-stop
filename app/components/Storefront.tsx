import Image from "next/image";
import { Reveal } from "./Reveal";

type Shot = {
  src: string;
  alt: string;
  cap: string;
  className: string;
  sizes: string;
  priority?: boolean;
};

/** A real look inside the store. Authentic bodega / corner-store photography
 *  (community-true) so the page reads unmistakably as a stocked neighborhood shop. */
const SHOTS: Shot[] = [
  {
    src: "/img/clerk-counter.jpg",
    alt: "A shopkeeper behind the counter at the corner store, shelves stocked with canned goods and plantains overhead",
    cap: "Behind the counter, every day",
    className: "qs-g-tall",
    sizes: "(max-width: 768px) 100vw, 40vw",
    priority: true,
  },
  {
    src: "/img/atm-lotto.jpg",
    alt: "A customer using the in-store ATM with lotto signage and shelves of snacks and water around them",
    cap: "ATM + lotto, right inside",
    className: "qs-g-tall",
    sizes: "(max-width: 768px) 100vw, 30vw",
  },
  {
    src: "/img/snacks-shelf.jpg",
    alt: "A colorful shelf of chips and snacks stocked at the store",
    cap: "Snacks stacked deep",
    className: "qs-g-wide",
    sizes: "(max-width: 768px) 100vw, 30vw",
  },
  {
    src: "/img/cold-drinks.jpg",
    alt: "A cooler full of cold sodas, juices and waters at the corner store",
    cap: "Coolers kept cold",
    className: "",
    sizes: "(max-width: 768px) 50vw, 22vw",
  },
  {
    src: "/img/shopkeeper.jpg",
    alt: "A shopkeeper reaching across the counter, snacks and drinks stocked on the shelves behind",
    cap: "Friendly at the counter",
    className: "",
    sizes: "(max-width: 768px) 50vw, 22vw",
  },
];

export default function Storefront() {
  return (
    <section id="store" className="relative-z px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[42rem]">
          <Reveal><span className="qs-tag">Step Inside</span></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-600 uppercase leading-[0.95]">
              A real corner store, stocked and lit.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-[48ch] text-[var(--chalk-2)]">
              Shelves full, coolers cold, the counter staffed and friendly. The
              kind of neighborhood shop you actually walk into on Main Street.
            </p>
          </Reveal>
        </div>

        <div className="qs-gallery mt-12">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={0.05 * i} className={`qs-g-item ${s.className}`}>
              <figure className="qs-photo h-full">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes={s.sizes}
                  className="object-cover"
                  priority={s.priority}
                />
                <figcaption className="qs-photo-cap">{s.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
