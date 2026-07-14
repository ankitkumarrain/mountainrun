import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/api-error.js";
import { routeParam } from "../utils/params.js";

export async function verifyCertificate(request: Request, response: Response) {
  const certificate = await prisma.certificate.findUnique({
    where: { certificateNumber: routeParam(request, "certificateNumber") },
    include: {
      registration: {
        include: {
          user: true,
          event: true,
        },
      },
    },
  });

  if (!certificate) {
    throw new ApiError(404, "Certificate not found");
  }

  response.json({
    data: {
      certificateNumber: certificate.certificateNumber,
      status: certificate.status,
      runnerName: certificate.registration.user.name,
      event: certificate.registration.event.title,
      distance: certificate.registration.distance,
      bibNumber: certificate.registration.bibNumber,
      issuedAt: certificate.issuedAt,
    },
  });
}
