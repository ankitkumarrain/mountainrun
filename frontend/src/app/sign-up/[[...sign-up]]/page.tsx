import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { PageShell } from "../../components/app-shell";

export default function SignUpPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-md">
              <p className="eyebrow">Get started</p>
              <h1 className="display mt-4">Create account</h1>
              <p className="lede mt-5">
                One runner account for every event — registration, payments, proof
                uploads, and results in one place.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-[var(--muted)]">
                {[
                  "Email + password, secured by Clerk",
                  "Register and pay with UPI",
                  "Track proof, certificates, and medals",
                ].map((item) => (
                  <li className="flex items-start gap-2.5" key={item}>
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-[var(--muted)]">
                Already have an account?{" "}
                <Link
                  className="font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
                  href="/sign-in"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="auth-card w-full">
                <SignUp
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "w-full",
                    },
                  }}
                  fallbackRedirectUrl="/register"
                  signInUrl="/sign-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
