import { Router } from "express";
import {
  createPaymentOrder,
  handleRazorpayWebhook,
  verifyPayment,
} from "../controllers/payment.controller.js";
import { asyncHandler } from "../utils/async-handler.js";

export const paymentRouter = Router();

paymentRouter.post("/create-order", asyncHandler(createPaymentOrder));
paymentRouter.post("/verify", asyncHandler(verifyPayment));
paymentRouter.post("/webhook", asyncHandler(handleRazorpayWebhook));
