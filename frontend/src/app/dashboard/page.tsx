import { PageShell } from "../components/app-shell";
import { DashboardClient } from "./dashboard-client";

export default function DashboardPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page max-w-5xl">
          <DashboardClient />
        </div>
      </section>
    </PageShell>
  );
}
