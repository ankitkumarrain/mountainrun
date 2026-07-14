import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export async function getDashboard(_request: Request, response: Response) {
  const [events, registrations, paidPayments, pendingProofs, certificates, medalDeliveries] =
    await Promise.all([
      prisma.event.count(),
      prisma.registration.count(),
      prisma.payment.findMany({ where: { status: "PAID" }, select: { amountInPaise: true } }),
      prisma.registration.count({ where: { proofStatus: "SUBMITTED" } }),
      prisma.certificate.count(),
      prisma.medalDelivery.count({ where: { status: { in: ["PENDING", "DISPATCHED"] } } }),
    ]);

  const revenueInPaise = paidPayments.reduce((sum, payment) => sum + payment.amountInPaise, 0);

  response.json({
    data: {
      events,
      registrations,
      revenueInPaise,
      pendingProofs,
      certificates,
      medalDeliveries,
    },
  });
}
