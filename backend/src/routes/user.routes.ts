import { Router } from "express";
import { getCurrentUser, syncCurrentUser } from "../controllers/user.controller.js";
import { requireClerkAuth } from "../middleware/clerk-auth.js";
import { asyncHandler } from "../utils/async-handler.js";

export const userRouter = Router();

userRouter.post("/sync", requireClerkAuth, asyncHandler(syncCurrentUser));
userRouter.get("/me", requireClerkAuth, asyncHandler(getCurrentUser));
