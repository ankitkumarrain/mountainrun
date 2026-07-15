import { PageHeader, PageShell } from "../components/app-shell";
import { PaymentRegistrationForm } from "./payment-registration-form";

export default function RegisterPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page max-w-3xl">
          <PageHeader
            description="Sign in, pick your event and distance, add shipping details, then pay securely with Razorpay UPI."
            eyebrow="Registration"
            title="Join an event"
          />
          <PaymentRegistrationForm />
        </div>
      </section>
    </PageShell>
  );
}
