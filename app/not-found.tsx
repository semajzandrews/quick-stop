import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative-z flex min-h-[80svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="qs-tag">Quick Stop · Orange, NJ</span>
      <h1 className="font-display text-[clamp(3rem,12vw,6rem)] font-700 uppercase leading-none neon-text text-[var(--neon)]">
        Off the shelf
      </h1>
      <p className="max-w-[40ch] text-[var(--chalk-2)]">
        That page is not in stock. Head back to the corner and find what you need.
      </p>
      <Link href="/" className="btn btn-neon">Back to Quick Stop</Link>
    </main>
  );
}
