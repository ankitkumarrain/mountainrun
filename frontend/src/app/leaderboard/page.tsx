import { PageHeader, PageShell } from "../components/app-shell";

const rows = [
  ["01", "Aarav Sharma", "21K", "01:42:18", "Verified"],
  ["02", "Nisha Rawat", "10K", "00:49:02", "Verified"],
  ["03", "Kabir Sethi", "10K", "00:51:44", "Review"],
  ["04", "Meera Joshi", "5K", "00:24:19", "Verified"],
  ["05", "Rohan Kapoor", "21K", "01:48:55", "Verified"],
  ["06", "Ananya Iyer", "5K", "00:26:11", "Verified"],
];

export default function LeaderboardPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-page max-w-5xl">
          <PageHeader
            description="Only approved GPS proof appears here. Rankings update after admin verification."
            title="Leaderboard"
          />

          <div className="table-wrap mt-12">
            <table className="table-clean min-w-[640px]">
              <thead>
                <tr>
                  {["Rank", "Runner", "Distance", "Time", "Status"].map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}>
                    <td className="font-mono text-xs tracking-wide">{row[0]}</td>
                    <td className="strong">{row[1]}</td>
                    <td>{row[2]}</td>
                    <td className="font-mono text-xs tracking-wide">{row[3]}</td>
                    <td>
                      <span
                        className={
                          row[4] === "Verified" ? "badge badge-sage" : "badge"
                        }
                      >
                        {row[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
