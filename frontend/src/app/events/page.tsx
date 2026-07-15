import Link from "next/link";
import { PageHeader, PageShell } from "../components/app-shell";
import { publicEvents } from "../data/events";

export default function EventsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <PageHeader
            description="Choose a run, register once, upload GPS proof, and appear on the verified leaderboard."
            title="Events"
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {publicEvents.map((event) => (
              <article className="card card-hover flex flex-col p-6" key={event.slug}>
                <div className="flex items-start justify-between gap-3">
                  <span className="badge">{event.date}</span>
                  <span className="text-sm font-semibold tracking-tight">{event.price}</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight">{event.name}</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">{event.distance}</p>
                <p className="mt-4 flex-1 text-sm leading-6 text-[var(--muted)]">
                  {event.highlight}
                </p>
                <div className="mt-8 grid gap-2">
                  <Link className="btn btn-primary" href={`/events/${event.slug}`}>
                    View details
                  </Link>
                  <Link className="btn btn-secondary" href="/register">
                    Register
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
