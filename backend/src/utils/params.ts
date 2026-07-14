import type { Request } from "express";
import { ApiError } from "./api-error.js";

export function routeParam(request: Request, name: string) {
  const value = request.params[name];

  if (!value || Array.isArray(value)) {
    throw new ApiError(400, `Missing route parameter: ${name}`);
  }

  return value;
}
