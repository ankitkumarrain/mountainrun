import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { PageShell } from "../../components/app-shell";

export default function SignInPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-md">
              <p className="eyebrow">Welcome back</p>
              <h1 className="display mt-4">Sign in</h1>
              <p className="lede mt-5">
                Access your registrations, upload GPS proof, download certificates,
                and track medal delivery.
              </p>
              <p className="mt-8 text-sm text-[var(--muted)]">
                New here?{" "}
                <Link
                  className="font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
                  href="/sign-up"
                >
                  Create an account
                </Link>
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="auth-card w-full">
                <SignIn
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "w-full",
                    },
                  }}
                  fallbackRedirectUrl="/register"
                  signUpUrl="/sign-up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
