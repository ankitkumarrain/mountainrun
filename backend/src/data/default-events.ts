export const defaultEvents = [
  {
    title: "Monsoon Mountain Miles",
    slug: "monsoon-mountain-miles",
    description:
      "A premium virtual running challenge with GPS proof verification, e-certificate, leaderboard placement, and medal delivery.",
    startsAt: new Date("2026-07-11T00:00:00.000Z"),
    endsAt: new Date("2026-07-17T23:59:59.000Z"),
    proofClosesAt: new Date("2026-07-18T23:59:59.000Z"),
    distances: ["3K", "5K", "10K", "21K"],
    priceInPaise: 49900,
    status: "OPEN" as const,
    city: "Virtual",
  },
  {
    title: "Independence Endurance Run",
    slug: "independence-endurance-run",
    description:
      "A pan-India endurance event built for verified finish times, fair ranking, and medal delivery tracking.",
    startsAt: new Date("2026-08-10T00:00:00.000Z"),
    endsAt: new Date("2026-08-16T23:59:59.000Z"),
    proofClosesAt: new Date("2026-08-17T23:59:59.000Z"),
    distances: ["5K", "10K", "25K"],
    priceInPaise: 64900,
    status: "OPEN" as const,
    city: "Virtual",
  },
  {
    title: "Himalayan Winter Sprint",
    slug: "himalayan-winter-sprint",
    description:
      "A fast winter sprint challenge with elegant certificates, QR verification, and community leaderboard.",
    startsAt: new Date("2026-12-05T00:00:00.000Z"),
    endsAt: new Date("2026-12-09T23:59:59.000Z"),
    proofClosesAt: new Date("2026-12-10T23:59:59.000Z"),
    distances: ["2K", "5K", "10K"],
    priceInPaise: 39900,
    status: "OPEN" as const,
    city: "Virtual",
  },
];
