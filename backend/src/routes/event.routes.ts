import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  listEvents,
  updateEvent,
} from "../controllers/event.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const eventRouter = Router();

eventRouter.get("/", asyncHandler(listEvents));
eventRouter.get("/:slug", asyncHandler(getEvent));
eventRouter.post("/", asyncHandler(createEvent));
eventRouter.put("/:id", asyncHandler(updateEvent));
eventRouter.delete("/:id", asyncHandler(deleteEvent));
