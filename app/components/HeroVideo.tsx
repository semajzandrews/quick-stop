"use client";

import { useEffect, useRef, useState } from "react";

/** Real night-shop footage (a neon OPEN sign in a storefront window),
 *  muted + looping behind the hero. Respects prefers-reduced-motion by
 *  holding the poster still and never playing. */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const v = ref.current;
    if (v && !mq.matches) {
      // Some mobile browsers need an explicit nudge to start a muted autoplay.
      v.play().catch(() => {});
    }
  }, []);

  if (reduce) {
    return (
      <div
        className="qs-hero-video"
        aria-hidden
        style={{
          backgroundImage: "url(/img/storefront-poster.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  }

  return (
    <video
      ref={ref}
      className="qs-hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/img/storefront-poster.jpg"
      aria-hidden="true"
    >
      <source src="/img/storefront-night.webm" type="video/webm" />
      <source src="/img/storefront-night.mp4" type="video/mp4" />
    </video>
  );
}
