"use server";

import Stripe from "stripe";
import axios from "axios";
import { revalidatePath } from "next/cache";

const axiosInstance = axios.create({
  baseURL: "https://mlai-434520.uc.r.appspot.com",
  //baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

export type SchedulePayload = {
  session_id: string;
  scheduled_at: string;
  scheduled_at_cst: string;
  metadata: Record<string, any>;
  status: string;
  attempts: number;
  client_mail: string;
  client_name: string;
  client_phone: string;
};

export const scheduleCall = async (payload: SchedulePayload) => {
  const res = await axiosInstance.post("scheduler/schedule", payload);
  return res.data;
};

export const generateStripeCheckoutURL = async (
  name: string,
  phone: string,
  email: string,
  scheduleDate: string,
  scheduleTime: string,
  source: "asesoria" | "ialegal"
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: "price_1S5xflLZwE3PZI76Zq9Lihxz", quantity: 1 }],
    success_url: `${baseUrl}/confirmar?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/asesoria`,
    metadata: {
      name,
      phone,
      email,
      scheduleDate,
      scheduleTime,
      source,
    },
  });

  return checkoutSession.url!;
};
