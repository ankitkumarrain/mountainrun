import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/app-shell";
import { eventBenefits, publicEvents } from "../../data/events";

export function generateStaticParams() {
  return publicEvents.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = publicEvents.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <Link
            className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            href="/events"
          >
            ← All events
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
            <div>
              <p className="eyebrow">Event</p>
              <h1 className="display mt-4 max-w-3xl">{event.name}</h1>
              <p className="lede mt-6 max-w-2xl">{event.description}</p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["Date", event.date],
                  ["Distance", event.distance],
                  ["Entry", event.price],
                ].map(([label, value]) => (
                  <div className="card p-5" key={label}>
                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-tight">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="heading">What you get</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {eventBenefits.map((benefit) => (
                    <li
                      className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3.5 text-sm"
                      key={benefit}
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--panel-soft)] text-[0.65rem] font-semibold">
                        ✓
                      </span>
                      <span className="leading-6 text-[var(--muted)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="card h-fit p-6 lg:sticky lg:top-24">
              <p className="eyebrow">Register</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Join this event
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Sign in, choose your distance, add delivery details, and pay with
                UPI. Run within the event window, then upload GPS proof.
              </p>
              <div className="mt-6 space-y-2">
                <Link className="btn btn-primary btn-full" href="/register">
                  Register now
                </Link>
                <Link className="btn btn-secondary btn-full" href="/events">
                  Browse other events
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
