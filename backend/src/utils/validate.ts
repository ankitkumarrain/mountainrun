import type { Request } from "express";
import type { ZodSchema } from "zod";
import { ApiError } from "./api-error.js";

export function validateBody<T>(schema: ZodSchema<T>, request: Request): T {
  const result = schema.safeParse(request.body);

  if (!result.success) {
    throw new ApiError(422, result.error.issues.map((issue) => issue.message).join(", "));
  }

  return result.data;
}
