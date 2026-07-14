import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-[rgba(247,246,242,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-5">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--foreground)] text-white">
            MR
          </span>
          <span className="truncate text-sm font-semibold tracking-tight">Mountain Run</span>
        </Link>
        <nav className="order-3 flex w-full gap-1 overflow-x-auto pb-1 sm:order-none sm:w-auto sm:pb-0">
          {[
            ["Events", "/events"],
            ["Leaderboard", "/leaderboard"],
            ["Register", "/register"],
            ["Admin", "/admin"],
          ].map(([label, href]) => (
            <Link
              className="whitespace-nowrap rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-white hover:text-[var(--foreground)]"
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link className="rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-white hover:text-[var(--foreground)]" href="/sign-in">
            Sign in
          </Link>
          <Link className="rounded-lg bg-[var(--foreground)] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]" href="/register">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="premium-shell min-h-screen">
      <AppHeader />
      {children}
    </main>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export const inputClass =
  "focus-ring h-11 w-full rounded-lg border hairline bg-white px-3 text-sm text-[var(--foreground)]";

export const primaryLinkClass =
  "focus-ring inline-flex h-11 items-center justify-center rounded-lg bg-[var(--foreground)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]";
