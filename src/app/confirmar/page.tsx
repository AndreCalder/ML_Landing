"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ConfirmarPage(props: {
  searchParams: SearchParams;
}) {
  const params = await props.searchParams;
  const sessionId =
    typeof params.session_id === "string" ? params.session_id : undefined;

  if (!sessionId) {
    redirect("/asesoria");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const paymentStatus = session.payment_status; // "paid" | "unpaid" | "no_payment_required"
  const name = session.metadata?.name ?? "";
  const phone = session.metadata?.phone ?? "";

  const isPaid = paymentStatus === "paid";

  return (
    <div className="pt-12 min-h-svh h-fit w-full">
      <div className="w-full px-5 sm:px-24 py-6">
        <div className="mx-auto py-12 max-w-xl">
          <p className="text-xl sm:text-3xl text-black font-extrabold mb-4">
            {isPaid ? "Pago confirmado" : "No se pudo confirmar el pago"}
          </p>
          <p className="font-light text-sm sm:text-base mb-6">
            {isPaid
              ? `Gracias ${name}. Te contactaremos pronto al ${phone}.`
              : "Si crees que es un error, por favor intenta nuevamente o contáctanos."}
          </p>
          <div className="col-span-12">
            <a
              href={isPaid ? "/" : "/asesoria"}
              className="inline-block bg-ml_blue text-white font-bold text-base text-center rounded-full my-2 py-2 px-5"
            >
              {isPaid ? "Ir al inicio" : "Volver a intentar"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
