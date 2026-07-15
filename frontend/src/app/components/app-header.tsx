"use client";

import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  ["Events", "/events"],
  ["Leaderboard", "/leaderboard"],
  ["Register", "/register"],
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-0.5 block h-px w-5 bg-current transition ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[9px] block h-px w-5 bg-current transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[15px] block h-px w-5 bg-current transition ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function AppHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(250,250,249,0.85)] backdrop-blur-xl">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            className="group flex items-center gap-2.5"
            href="/"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--foreground)] text-[0.65rem] font-semibold tracking-wide text-white">
              MR
            </span>
            <span className="text-sm font-semibold tracking-tight">Mountain Run</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, href]) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  className={`rounded-full px-3.5 py-2 text-sm transition ${
                    active
                      ? "bg-[var(--panel)] text-[var(--foreground)] shadow-[var(--shadow)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Show when="signed-out">
              <Link className="btn btn-ghost h-9 px-3" href="/sign-in">
                Sign in
              </Link>
              <Link className="btn btn-primary h-9 px-4" href="/sign-up">
                Sign up
              </Link>
            </Show>
            <Show when="signed-in">
              <Link className="btn btn-primary h-9 px-4" href="/register">
                Register
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            </Show>
          </div>

          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--foreground)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <MenuIcon open={open} />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity,padding] duration-200 md:hidden ${
            open ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="grid gap-1 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow)]">
            {navItems.map(([label, href]) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--foreground)] text-white"
                      : "text-[var(--muted)] hover:bg-[var(--panel-soft)] hover:text-[var(--foreground)]"
                  }`}
                  href={href}
                  key={href}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-1 grid grid-cols-2 gap-2 border-t border-[var(--line)] pt-2">
              <Show when="signed-out">
                <Link
                  className="btn btn-secondary h-11 w-full"
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  className="btn btn-primary h-11 w-full"
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
              </Show>
              <Show when="signed-in">
                <Link
                  className="btn btn-primary col-span-2 h-11"
                  href="/register"
                  onClick={() => setOpen(false)}
                >
                  Register for event
                </Link>
                <div className="col-span-2 flex items-center justify-center py-2">
                  <UserButton />
                </div>
              </Show>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
