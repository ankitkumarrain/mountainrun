import Link from "next/link";
import { AppFooter } from "./components/app-shell";
import { AppHeader } from "./components/app-header";
import { publicEvents } from "./data/events";

const steps = [
  {
    step: "01",
    title: "Register",
    text: "Pick an event and distance. Pay securely with UPI via Razorpay.",
  },
  {
    step: "02",
    title: "Run & prove",
    text: "Complete your run anywhere, then upload a GPS activity screenshot.",
  },
  {
    step: "03",
    title: "Get ranked",
    text: "After verification, claim your certificate, rank, and medal.",
  },
];

const perks = [
  {
    title: "Verified finishes",
    text: "GPS proof is reviewed before results go public.",
  },
  {
    title: "Fair leaderboard",
    text: "Only approved efforts appear in the rankings.",
  },
  {
    title: "Digital certificate",
    text: "QR-linked e-certificate after approval.",
  },
  {
    title: "Medal delivery",
    text: "Eligible finishers get dispatch tracking.",
  },
];

export default function Home() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <AppHeader />

      <main className="flex-1">
        {/* Hero — text only, no image */}
        <section className="border-b border-[var(--line)]">
          <div className="container-page fade-up py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Virtual running events</p>
              <h1 className="display mt-6">
                Run anywhere.
                <br />
                Finish with proof.
              </h1>
              <p className="lede mx-auto mt-6 max-w-xl">
                Clean virtual races with UPI registration, GPS verification,
                leaderboards, certificates, and medals — without the noise.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link className="btn btn-primary min-w-[10rem]" href="/register">
                  Register now
                </Link>
                <Link className="btn btn-secondary min-w-[10rem]" href="/events">
                  Browse events
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
              {[
                ["2,480", "Finishers"],
                ["14", "Events"],
                ["24h", "Review"],
                ["UPI", "Payments"],
              ].map(([value, label]) => (
                <div className="bg-[var(--panel)] px-4 py-5 text-center" key={label}>
                  <p className="text-xl font-semibold tracking-tight sm:text-2xl">{value}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-xl">
              <p className="eyebrow">How it works</p>
              <h2 className="heading mt-4">Three steps. No clutter.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div className="card p-6" key={item.step}>
                  <p className="text-xs font-medium tracking-[0.14em] text-[var(--muted-soft)]">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="section border-y border-[var(--line)] bg-white">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="eyebrow">Upcoming</p>
                <h2 className="heading mt-4">Open events</h2>
                <p className="lede mt-3">
                  Choose a distance, register once, and run on your own schedule.
                </p>
              </div>
              <Link className="btn btn-secondary" href="/events">
                View all
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {publicEvents.map((event) => (
                <article className="card card-hover flex flex-col p-6" key={event.slug}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="badge">{event.date}</span>
                    <span className="text-sm font-medium tracking-tight">{event.price}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{event.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{event.distance}</p>
                  <p className="mt-4 flex-1 text-sm leading-6 text-[var(--muted)]">
                    {event.highlight}
                  </p>
                  <div className="mt-6 flex gap-2">
                    <Link className="btn btn-primary flex-1" href={`/events/${event.slug}`}>
                      Details
                    </Link>
                    <Link className="btn btn-secondary flex-1" href="/register">
                      Register
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-xl">
              <p className="eyebrow">Included</p>
              <h2 className="heading mt-4">Everything after the finish line.</h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {perks.map((perk) => (
                <div className="bg-[var(--panel)] p-7" key={perk.title}>
                  <h3 className="text-base font-semibold tracking-tight">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{perk.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container-page">
            <div className="rounded-3xl bg-[var(--foreground)] px-8 py-14 text-center text-white sm:px-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready for your next run?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/65">
                Create an account, register for an open event, and pay with UPI in
                under a minute.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  className="btn min-w-[10rem] bg-white text-[var(--foreground)] hover:bg-white/90"
                  href="/register"
                >
                  Start registration
                </Link>
                <Link
                  className="btn min-w-[10rem] border border-white/20 bg-transparent text-white hover:bg-white/10"
                  href="/sign-up"
                >
                  Create account
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
