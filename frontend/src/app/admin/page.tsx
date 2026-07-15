import { PageHeader, PageShell } from "../components/app-shell";
import { AdminEventForm } from "./admin-event-form";

const stats = [
  ["Revenue", "₹8.4L"],
  ["Participants", "1,284"],
  ["Proof queue", "342"],
  ["Dispatch", "704"],
];

export default function AdminPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page">
          <PageHeader
            action={
              <a className="btn btn-primary" href="#new-event">
                New event
              </a>
            }
            description="Overview of revenue, participants, proof review, and medal dispatch."
            eyebrow="Admin"
            title="Dashboard"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([label, value]) => (
              <div className="card p-5" key={label}>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                  {label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
            <AdminEventForm />
            <div className="card p-6 sm:p-8">
              <p className="eyebrow">Queue</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">Proof review</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                Connect the admin API to load live proof submissions. For now this is a
                placeholder layout for the review workflow.
              </p>
              <div className="mt-8 space-y-3">
                {["GPS screenshot pending", "Finish time flagged", "Medal address update"].map(
                  (item) => (
                    <div
                      className="flex items-center justify-between rounded-xl border border-[var(--line)] px-4 py-3"
                      key={item}
                    >
                      <span className="text-sm">{item}</span>
                      <span className="badge">Open</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
