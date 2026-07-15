"use client";

import { Show } from "@clerk/nextjs";
import Link from "next/link";

/** Homepage hero CTAs — full-width stack on small phones */
export function HomeCtas() {
  return (
    <div className="btn-row mt-8 justify-center sm:mt-10">
      <Show when="signed-out">
        <Link className="btn btn-primary min-w-[10rem] sm:min-w-[10rem]" href="/register">
          Register now
        </Link>
        <Link className="btn btn-secondary min-w-[10rem]" href="/events">
          Browse events
        </Link>
      </Show>
      <Show when="signed-in">
        <Link className="btn btn-primary min-w-[10rem]" href="/dashboard">
          My dashboard
        </Link>
        <Link className="btn btn-secondary min-w-[10rem]" href="/register">
          Join event
        </Link>
      </Show>
    </div>
  );
}
