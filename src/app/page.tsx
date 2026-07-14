import Link from "next/link";

type IconName =
  | "run"
  | "shield"
  | "upload"
  | "award"
  | "truck"
  | "qr"
  | "chart"
  | "user"
  | "calendar"
  | "map"
  | "check"
  | "arrow";

const events = [
  {
    name: "Monsoon Mountain Miles",
    date: "11-17 Jul 2026",
    distance: "3K / 5K / 10K / 21K",
    price: "Rs. 499",
    status: "Open",
    slots: 72,
  },
  {
    name: "Independence Endurance Run",
    date: "10-16 Aug 2026",
    distance: "5K / 10K / 25K",
    price: "Rs. 649",
    status: "Draft",
    slots: 46,
  },
  {
    name: "Himalayan Winter Sprint",
    date: "5-9 Dec 2026",
    distance: "2K / 5K / 10K",
    price: "Rs. 399",
    status: "Planning",
    slots: 28,
  },
];

const leaderboard = [
  ["01", "Aarav Sharma", "21K", "01:42:18", "Verified"],
  ["02", "Nisha Rawat", "10K", "00:49:02", "Verified"],
  ["03", "Kabir Sethi", "10K", "00:51:44", "Review"],
  ["04", "Meera Joshi", "5K", "00:24:19", "Verified"],
];

const designTokens = [
  ["Accent", "#B76E2A", "achievement, medal, momentum"],
  ["Surface", "#FFFDFA", "premium panels"],
  ["Ink", "#151512", "high contrast type"],
  ["Line", "#DEDAD0", "quiet structure"],
];

function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    run: <><path d="M13 5.5a2 2 0 1 0-2.9-2.8A2 2 0 0 0 13 5.5Z" /><path d="m10 8 3.5 2.5 2.5-2" /><path d="m13.5 10.5-2 4.5 4.5 4" /><path d="M9.5 15 6 19.5" /></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-5" /></>,
    upload: <><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" /></>,
    award: <><circle cx="12" cy="8" r="4" /><path d="m9.5 12-1 8 3.5-2 3.5 2-1-8" /></>,
    truck: <><path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    qr: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" /><path d="M15 15h1v1h-1zM19 15h1v5h-5v-1M15 19h1" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15v-4M12 15V8M16 15v-7" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    calendar: <><path d="M7 3v4M17 3v4M4 8h16M5 5h14v16H5z" /></>,
    map: <><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15M15 6v15" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border hairline bg-white/70 px-3 py-1 text-xs font-medium text-[var(--muted)]">
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  href,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}) {
  const styles = {
    primary: "bg-[var(--foreground)] text-white hover:bg-[var(--accent-dark)]",
    secondary: "border hairline bg-white text-[var(--foreground)] hover:border-[var(--accent)]",
    ghost: "text-[var(--muted)] hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]",
  };
  const className = `focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition ${styles[variant]}`;

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-lg border hairline bg-[var(--panel)] p-5">
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-xs text-[var(--muted)]">{note}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="premium-shell min-h-screen">
      <nav className="sticky top-0 z-40 border-b hairline bg-[rgba(247,246,242,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-5">
          <Link className="flex min-w-0 items-center gap-3" href="/">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--foreground)] text-white">
              <Icon name="run" className="h-5 w-5" />
            </span>
            <span className="truncate text-sm font-semibold tracking-tight">Mountain Run</span>
          </Link>
          <div className="order-3 flex w-full gap-1 overflow-x-auto pb-1 sm:order-none sm:w-auto sm:pb-0">
            {[
              ["Events", "/events"],
              ["Leaderboard", "/leaderboard"],
              ["Register", "/register"],
              ["Admin", "/admin"],
            ].map(([item, href]) => (
              <Link key={item} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-white hover:text-[var(--foreground)]" href={href}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button href="/sign-in" variant="ghost">Sign in</Button>
            <Button href="/register">Register</Button>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1fr_440px] lg:pt-24">
        <div className="rise-in">
          <Badge>GPS proof accepted from Strava, NRC, Google Fit</Badge>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-7xl">
            Run anywhere. Prove it once. Earn your place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A premium virtual running event platform for Indian communities, with registration, Razorpay-ready payments, proof verification, public leaderboards, QR check-ins, certificates, and medal delivery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/events">Explore events <Icon name="arrow" /></Button>
            <Button href="/leaderboard" variant="secondary">View leaderboard</Button>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            <Stat label="Finishers" value="2,480" note="verified runners" />
            <Stat label="Events" value="14" note="hosted pan-India" />
            <Stat label="Verify" value="24h" note="average review" />
            <Stat label="Delivery" value="Free" note="medals shipped" />
          </div>
        </div>

        <aside className="rise-in rounded-lg border hairline bg-[var(--panel)] p-4 soft-shadow">
          <div className="rounded-lg bg-[var(--foreground)] p-5 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/60">Live event</p>
                <h2 className="mt-2 text-2xl font-semibold">Monsoon Mountain Miles</h2>
              </div>
              <Badge>Open</Badge>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              {["3K", "10K", "21K"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/7 p-3">
                  <p className="font-semibold">{item}</p>
                  <p className="mt-1 text-white/55">distance</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Register", "Secure fee, choose distance, add address", "check"],
              ["Run & upload", "Submit GPS screenshot in event window", "upload"],
              ["Certificate", "QR-linked proof and finisher PDF", "award"],
              ["Medal delivery", "Dispatch, tracking, delivery updates", "truck"],
            ].map(([title, text, icon]) => (
              <div key={title} className="flex gap-3 rounded-lg border hairline bg-white p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-dark)]">
                  <Icon name={icon as IconName} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="events" className="border-y hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge>Event marketplace</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Premium event cards that sell trust.</h2>
            </div>
            <Button href="/admin" variant="secondary"><Icon name="calendar" /> Create event</Button>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.name} className="rounded-lg border hairline bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(49,42,31,0.08)]">
                <div className="flex items-center justify-between">
                  <Badge>{event.status}</Badge>
                  <span className="text-sm font-semibold">{event.price}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{event.name}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{event.date}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{event.distance}</p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--panel-strong)]">
                  <div className="meter h-full rounded-full" style={{ width: `${event.slots}%` }} />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>{event.slots}% slots filled</span>
                  <span>Proof window enabled</span>
                </div>
                <Link className="focus-ring mt-5 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[var(--foreground)] px-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]" href="/register">
                  Register for this event
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge>Registration flow</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Clean forms, payment state, and proof review.</h2>
          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
            The runner journey keeps friction low: account, distance, address, payment, GPS proof upload, verification, certificate preview, and medal tracking.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Accessible inputs", "Zod-ready validation", "Razorpay webhook states", "Cloudinary proof uploads"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border hairline bg-white p-4 text-sm font-medium">
                <Icon name="check" className="h-4 w-4 text-[var(--success)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <form action="/leaderboard" className="rounded-lg border hairline bg-[var(--panel)] p-5 soft-shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">Full name<input className="focus-ring mt-2 h-11 w-full rounded-lg border hairline bg-white px-3 text-sm" defaultValue="Riya Mehta" /></label>
            <label className="text-sm font-medium">Distance<select className="focus-ring mt-2 h-11 w-full rounded-lg border hairline bg-white px-3 text-sm" defaultValue="10K"><option>5K</option><option>10K</option><option>21K</option></select></label>
            <label className="text-sm font-medium md:col-span-2">Shipping address<input className="focus-ring mt-2 h-11 w-full rounded-lg border hairline bg-white px-3 text-sm" defaultValue="Bandra West, Mumbai, Maharashtra" /></label>
          </div>
          <label className="mt-4 block cursor-pointer rounded-lg border border-dashed border-[var(--accent)] bg-[var(--accent-soft)]/45 p-6 text-center transition hover:bg-[var(--accent-soft)]">
            <Icon name="upload" className="mx-auto h-7 w-7 text-[var(--accent-dark)]" />
            <p className="mt-3 text-sm font-semibold">Upload GPS activity proof</p>
            <p className="mt-1 text-xs text-[var(--muted)]">PNG, JPG, or PDF from your running app</p>
            <input className="sr-only" name="proof" type="file" accept="image/png,image/jpeg,application/pdf" />
          </label>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              ["Payment", "Paid", "success"],
              ["Proof", "In review", "accent"],
              ["Certificate", "Queued", "muted"],
            ].map(([label, value, tone]) => (
              <div key={label} className="rounded-lg border hairline bg-white p-4">
                <p className="text-xs text-[var(--muted)]">{label}</p>
                <p className={`mt-2 text-sm font-semibold ${tone === "success" ? "text-[var(--success)]" : tone === "accent" ? "text-[var(--accent-dark)]" : "text-[var(--muted)]"}`}>{value}</p>
              </div>
            ))}
          </div>
          <button className="focus-ring mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[var(--foreground)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]" type="submit">
            Submit proof demo
          </button>
        </form>
      </section>

      <section id="leaderboard" className="border-y hairline bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[1fr_380px]">
          <div className="overflow-hidden rounded-lg border hairline bg-white">
            <div className="flex items-center justify-between border-b hairline p-5">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Live leaderboard</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">Ranked after admin proof verification.</p>
              </div>
              <Button href="/leaderboard" variant="secondary"><Icon name="shield" /> Fair play</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--panel-strong)] text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                  <tr>{["Rank", "Runner", "Distance", "Time", "Status"].map((h) => <th key={h} className="px-5 py-3 font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {leaderboard.map((row) => (
                    <tr key={row[0]} className="border-t hairline">
                      {row.map((cell, index) => (
                        <td key={cell} className={`px-5 py-4 ${index === 1 ? "font-medium" : "text-[var(--muted)]"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg border hairline bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">QR check-in</h3>
              <Icon name="qr" className="h-5 w-5 text-[var(--muted)]" />
            </div>
            <div className="mt-6 grid aspect-square place-items-center rounded-lg border hairline bg-[var(--panel-strong)]">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className={`h-7 w-7 rounded-sm ${[0, 1, 4, 6, 8, 10, 12, 16, 18, 20, 21, 24].includes(i) ? "bg-[var(--foreground)]" : "bg-white"}`} />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Scan participant bib or certificate QR to confirm identity, proof status, payment, and dispatch eligibility.</p>
          </div>
        </div>
      </section>

      <section id="admin" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Badge>Admin command center</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Modern SaaS dashboard, not a generic admin panel.</h2>
          </div>
          <Button href="/admin"><Icon name="chart" /> Review analytics</Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-lg border hairline bg-[var(--foreground)] p-3 text-white">
            {["Overview", "Events", "Registrations", "Proof queue", "Certificates", "Medal dispatch"].map((item, index) => (
              <div key={item} className={`rounded-lg px-3 py-3 text-sm ${index === 0 ? "bg-white text-[var(--foreground)]" : "text-white/65"}`}>{item}</div>
            ))}
          </aside>
          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-4">
              <Stat label="Revenue" value="Rs. 8.4L" note="+18% vs last event" />
              <Stat label="Participants" value="1,284" note="342 pending proof" />
              <Stat label="Certificates" value="916" note="auto-generated" />
              <Stat label="Dispatch" value="704" note="Shiprocket synced" />
            </div>
            <div className="rounded-lg border hairline bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Event health</h3>
                <Badge>Last 7 days</Badge>
              </div>
              <div className="mt-8 flex h-52 items-end gap-3">
                {[45, 58, 52, 74, 68, 84, 96, 78, 88, 92, 81, 98].map((height, i) => (
                  <div key={i} className="flex flex-1 items-end rounded-t-lg bg-[var(--panel-strong)]">
                    <div className="meter w-full rounded-t-lg" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-lg border hairline bg-[var(--panel)] p-6 md:p-8">
          <Badge>Design system foundation</Badge>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {designTokens.map(([name, color, use]) => (
              <div key={name} className="rounded-lg border hairline bg-white p-4">
                <span className="block h-12 rounded-lg border hairline" style={{ background: color }} />
                <p className="mt-4 text-sm font-semibold">{name}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{color} · {use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
