import { Router } from "express";
import { verifyCertificate } from "../controllers/certificate.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const certificateRouter = Router();

certificateRouter.get("/verify/:certificateNumber", asyncHandler(verifyCertificate));
