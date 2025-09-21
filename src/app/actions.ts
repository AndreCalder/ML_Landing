"use server";

import Stripe from "stripe";

export const generateStripeCheckoutURL = async (
  name: string,
  phone: string
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
      source: "asesoria",
    },
  });

  return checkoutSession.url!;
};
