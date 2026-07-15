import { createClerkClient, verifyToken } from "@clerk/backend";
import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";
import { ApiError } from "../utils/api-error.js";

export type AuthenticatedRequest = Request & {
  auth?: {
    userId: string;
    sessionId?: string;
  };
};

const clerkClient = env.clerkEnabled
  ? createClerkClient({ secretKey: env.clerkSecretKey })
  : null;

function allowDevBypass() {
  return env.nodeEnv !== "production" && !env.clerkEnabled;
}

export async function requireClerkAuth(
  request: AuthenticatedRequest,
  _response: Response,
  next: NextFunction,
) {
  try {
    if (!env.clerkEnabled) {
      if (env.nodeEnv === "production") {
        throw new ApiError(500, "Clerk is not configured on the server");
      }

      // Local development without real Clerk keys.
      next();
      return;
    }

    const header = request.header("authorization");
    if (!header?.startsWith("Bearer ")) {
      throw new ApiError(401, "Authentication required. Sign in and try again.");
    }

    const token = header.slice("Bearer ".length).trim();
    if (!token) {
      throw new ApiError(401, "Authentication required. Sign in and try again.");
    }

    const payload = await verifyToken(token, {
      secretKey: env.clerkSecretKey,
      authorizedParties: [env.frontendUrl, "http://localhost:3000", "http://127.0.0.1:3000"],
    });

    if (!payload.sub) {
      throw new ApiError(401, "Invalid authentication token");
    }

    request.auth = {
      userId: payload.sub,
      sessionId: typeof payload.sid === "string" ? payload.sid : undefined,
    };

    next();
  } catch (error) {
    if (error instanceof ApiError) {
      next(error);
      return;
    }

    next(new ApiError(401, "Invalid or expired authentication token"));
  }
}

export async function requireAdmin(
  request: AuthenticatedRequest,
  _response: Response,
  next: NextFunction,
) {
  try {
    if (allowDevBypass()) {
      next();
      return;
    }

    if (!env.clerkEnabled || !clerkClient) {
      throw new ApiError(500, "Clerk is not configured on the server");
    }

    if (!request.auth?.userId) {
      throw new ApiError(401, "Authentication required");
    }

    const user = await clerkClient.users.getUser(request.auth.userId);
    const role = (user.publicMetadata?.role ?? user.privateMetadata?.role) as
      | string
      | undefined;

    if (role !== "admin" && role !== "super_admin") {
      throw new ApiError(403, "Admin access required");
    }

    next();
  } catch (error) {
    if (error instanceof ApiError) {
      next(error);
      return;
    }

    next(new ApiError(403, "Admin access required"));
  }
}
