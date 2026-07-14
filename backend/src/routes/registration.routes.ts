import { Router } from "express";
import {
  createRegistration,
  getLeaderboard,
  reviewProof,
  submitProof,
} from "../controllers/registration.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const registrationRouter = Router();

registrationRouter.post("/", asyncHandler(createRegistration));
registrationRouter.post("/:id/proof", asyncHandler(submitProof));
registrationRouter.post("/:id/review", asyncHandler(reviewProof));
registrationRouter.get("/leaderboard/:eventId", asyncHandler(getLeaderboard));
