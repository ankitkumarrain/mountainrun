import { PageHeader, PageShell } from "../components/app-shell";
import { PaymentRegistrationForm } from "./payment-registration-form";

export default function RegisterPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page max-w-3xl">
          <PageHeader
            description="Pick event and distance, add shipping, pay with UPI. After login your races also show on Dashboard."
            eyebrow="Registration"
            title="Join an event"
          />
          <PaymentRegistrationForm />
        </div>
      </section>
    </PageShell>
  );
}
