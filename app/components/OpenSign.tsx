"use client";

import { useEffect, useState } from "react";
import { getStatus } from "./store";

/** Hand-built neon OPEN sign wired to the LIVE clock.
 *  6 AM to 9 PM: lit, buzzing, reads OPEN. Otherwise: dim glass, reads CLOSED. */
export default function OpenSign() {
  const [mounted, setMounted] = useState(false);
  const [st, setSt] = useState<{ open: boolean; clock: string }>({ open: true, clock: "" });

  useEffect(() => {
    setMounted(true);
    const tick = () => setSt(getStatus(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  const lit = mounted ? st.open : true;

  return (
    <div className="qs-sign-wrap" suppressHydrationWarning>
      <div className={`qs-sign ${lit ? "is-on" : "is-off"}`}>
        {/* tube frame */}
        <div className="qs-sign-frame">
          <span className={`qs-sign-word ${lit ? "neon-on" : ""}`}>{lit ? "OPEN" : "CLOSED"}</span>
          <span className="qs-sign-sub">
            {lit ? "Come on in" : "See you at 6 AM"}
          </span>
        </div>
      </div>
      <p className="qs-sign-hours">Open every day · 6:00 AM to 9:00 PM</p>
    </div>
  );
}
