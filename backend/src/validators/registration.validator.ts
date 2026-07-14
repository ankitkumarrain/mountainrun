import { z } from "zod";

export const createRegistrationSchema = z.object({
  userId: z.string().min(1).optional(),
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(8).optional(),
  eventId: z.string().min(1).optional(),
  eventSlug: z.string().min(1).optional(),
  distance: z.string().min(1),
  shippingName: z.string().min(2),
  shippingPhone: z.string().min(8),
  shippingLine1: z.string().min(5),
  shippingLine2: z.string().optional(),
  shippingCity: z.string().min(2),
  shippingState: z.string().min(2),
  shippingPincode: z.string().min(5),
}).superRefine((value, context) => {
  if (!value.userId && (!value.name || !value.email)) {
    context.addIssue({
      code: "custom",
      message: "Either userId or runner name and email are required",
      path: ["email"],
    });
  }

  if (!value.eventId && !value.eventSlug) {
    context.addIssue({
      code: "custom",
      message: "Either eventId or eventSlug is required",
      path: ["eventSlug"],
    });
  }
});

export const submitProofSchema = z.object({
  activityImageUrl: z.string().url(),
  sourceApp: z.string().min(2),
  finishTimeSeconds: z.number().int().positive().optional(),
});

export const reviewProofSchema = z.object({
  approved: z.boolean(),
  reviewerNote: z.string().optional(),
  finishTimeSeconds: z.number().int().positive().optional(),
});
