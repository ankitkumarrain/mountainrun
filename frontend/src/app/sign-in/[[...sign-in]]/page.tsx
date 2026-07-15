import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { PageShell } from "../../components/app-shell";

export default function SignInPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <p className="eyebrow">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sign in
            </h1>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Use Google or your email and password.
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[400px] justify-center">
            <SignIn
              fallbackRedirectUrl="/register"
              forceRedirectUrl="/register"
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  rootBox: "mx-auto w-full",
                  cardBox: "w-full shadow-none",
                  card: "w-full shadow-none border border-[var(--line)] rounded-2xl",
                  footer: "bg-transparent",
                },
              }}
            />
          </div>

          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            New here?{" "}
            <Link
              className="font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
              href="/sign-up"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
