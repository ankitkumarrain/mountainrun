import Link from "next/link";
import { PageShell, primaryLinkClass } from "../components/app-shell";

const events = [
  ["Monsoon Mountain Miles", "11-17 Jul 2026", "3K / 5K / 10K / 21K", "Rs. 499"],
  ["Independence Endurance Run", "10-16 Aug 2026", "5K / 10K / 25K", "Rs. 649"],
  ["Himalayan Winter Sprint", "5-9 Dec 2026", "2K / 5K / 10K", "Rs. 399"],
];

export default function EventsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-16">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Events</h1>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">Choose a run, register, upload proof, and compete on the verified leaderboard.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {events.map(([name, date, distance, price]) => (
            <article className="rounded-lg border hairline bg-white p-5" key={name}>
              <p className="text-sm text-[var(--muted)]">{date}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{name}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{distance}</p>
              <p className="mt-5 text-sm font-semibold">{price}</p>
              <Link className={`${primaryLinkClass} mt-5 w-full`} href="/register">Register</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
