import Link from "next/link";
import { AppHeader } from "./app-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}

export function AppFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-tight">Mountain Run</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Virtual races. Verified finishes. Clean results.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <Link className="transition hover:text-[var(--foreground)]" href="/events">
            Events
          </Link>
          <Link className="transition hover:text-[var(--foreground)]" href="/leaderboard">
            Leaderboard
          </Link>
          <Link className="transition hover:text-[var(--foreground)]" href="/register">
            Register
          </Link>
          <Link className="transition hover:text-[var(--foreground)]" href="/sign-in">
            Sign in
          </Link>
        </nav>
      </div>
    </footer>
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
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className={`display ${eyebrow ? "mt-4" : ""}`}>{title}</h1>
        {description ? <p className="lede mt-4 max-w-xl">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export const inputClass = "input";
export const primaryLinkClass = "btn btn-primary";
export const secondaryLinkClass = "btn btn-secondary";
