"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="relative-z flex min-h-[80svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="qs-tag">Quick Stop</span>
      <h1 className="font-display text-[clamp(2.6rem,10vw,5rem)] font-700 uppercase leading-none">
        The lights flickered
      </h1>
      <p className="max-w-[40ch] text-[var(--chalk-2)]">
        Something went sideways for a second. Give it another try.
      </p>
      <button onClick={reset} className="btn btn-neon">Try again</button>
    </main>
  );
}
