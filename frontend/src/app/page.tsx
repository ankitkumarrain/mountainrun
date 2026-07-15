import Link from "next/link";
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import { publicEvents } from "./data/events";
import { HomeCtas } from "./components/home-ctas";

const steps = [
  {
    step: "01",
    title: "Create account & register",
    text: "Sign in once, pick an event and distance, pay with UPI.",
  },
  {
    step: "02",
    title: "Run & upload proof",
    text: "Finish anywhere, then submit your GPS activity screenshot.",
  },
  {
    step: "03",
    title: "Rank, certificate, medal",
    text: "After verification, you appear on the leaderboard and unlock rewards.",
  },
];

export default function Home() {
  // Only preview first 3 events — full list lives on /events (no duplicate page feel)
  const previewEvents = publicEvents.slice(0, 3);

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <AppHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--line)]">
          <div className="container-page fade-up py-14 sm:py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Virtual running events</p>
              <h1 className="display mt-4 sm:mt-6">
                Run anywhere.
                <br />
                Finish with proof.
              </h1>
              <p className="lede mx-auto mt-4 max-w-xl px-1 sm:mt-6">
                Clean virtual races — UPI registration, GPS verification, leaderboards,
                certificates, and medals.
              </p>
              <HomeCtas />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-page">
            <div className="max-w-xl">
              <p className="eyebrow">How it works</p>
              <h2 className="heading mt-3 sm:mt-4">Three steps</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div className="card p-5 sm:p-6" key={item.step}>
                  <p className="text-xs font-medium tracking-[0.14em] text-[var(--muted-soft)]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-base font-semibold tracking-tight sm:mt-4 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-y border-[var(--line)] bg-white">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="eyebrow">Upcoming</p>
                <h2 className="heading mt-3 sm:mt-4">Open events</h2>
                <p className="lede mt-3">
                  Full catalogue, distances, and details live on the Events page.
                </p>
              </div>
              <Link className="btn btn-secondary w-full sm:w-auto" href="/events">
                View all events
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
              {previewEvents.map((event) => (
                <article className="card card-hover flex flex-col p-5 sm:p-6" key={event.slug}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="badge">{event.date}</span>
                    <span className="text-sm font-medium tracking-tight">{event.price}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight sm:mt-6 sm:text-xl">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{event.distance}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)] sm:mt-4">
                    {event.highlight}
                  </p>
                  <Link className="btn btn-primary mt-5 w-full sm:mt-6" href={`/events/${event.slug}`}>
                    View event
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-14 pt-12 sm:pb-20 sm:pt-16 md:pb-28 md:pt-20">
          <div className="container-page">
            <div className="rounded-2xl bg-[var(--foreground)] px-5 py-10 text-center text-white sm:rounded-3xl sm:px-12 sm:py-14">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                Track everything after you log in
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/65 sm:mt-4">
                Dashboard shows your registrations, payment status, and next steps — so login
                actually pays off.
              </p>
              <div className="btn-row mt-6 justify-center sm:mt-8">
                <Link
                  className="btn bg-white text-[var(--foreground)] hover:bg-white/90"
                  href="/dashboard"
                >
                  Open dashboard
                </Link>
                <Link
                  className="btn border border-white/20 bg-transparent text-white hover:bg-white/10"
                  href="/events"
                >
                  Browse events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}
