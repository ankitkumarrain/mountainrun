import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/api-error.js";
import { routeParam } from "../utils/params.js";
import { validateBody } from "../utils/validate.js";
import { createEventSchema, updateEventSchema } from "../validators/event.validator.js";

export async function listEvents(_request: Request, response: Response) {
  const events = await prisma.event.findMany({
    orderBy: { startsAt: "asc" },
    include: {
      _count: {
        select: { registrations: true },
      },
    },
  });

  response.json({ data: events });
}

export async function getEvent(request: Request, response: Response) {
  const event = await prisma.event.findUnique({
    where: { slug: routeParam(request, "slug") },
    include: {
      _count: {
        select: { registrations: true },
      },
    },
  });

  if (!event) {
    throw new ApiError(404, "Event not found");
  }

  response.json({ data: event });
}

export async function createEvent(request: Request, response: Response) {
  const payload = validateBody(createEventSchema, request);
  const event = await prisma.event.create({
    data: {
      ...payload,
      medalIncluded: payload.medalIncluded ?? true,
    },
  });

  response.status(201).json({ data: event });
}

export async function updateEvent(request: Request, response: Response) {
  const payload = validateBody(updateEventSchema, request);
  const event = await prisma.event.update({
    where: { id: routeParam(request, "id") },
    data: payload,
  });

  response.json({ data: event });
}

export async function deleteEvent(request: Request, response: Response) {
  await prisma.event.delete({
    where: { id: routeParam(request, "id") },
  });

  response.status(204).send();
}
