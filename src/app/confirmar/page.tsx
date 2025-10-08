"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";
import { scheduleCall, type SchedulePayload } from "../actions";
import Image from "next/image";

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

  const paymentStatus = session.payment_status;
  const name = session.metadata?.name ?? "";
  const phone = session.metadata?.phone ?? "";
  const scheduleDate = session.metadata?.scheduleDate ?? ""; // YYYY-MM-DD
  const scheduleTime = session.metadata?.scheduleTime ?? ""; // HH:MM
  const email = session.customer_details?.email ?? "";

  const isPaid = paymentStatus === "paid";
  console.log("Payload:", name, phone, scheduleDate, scheduleTime);
  if (isPaid && name && phone) {
    /*
    const [year, month, day] = scheduleDate.split("-").map((v) => Number(v));

    Determine the correct Mexico City offset for the selected date (DST-safe)
    const tzFormatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZoneName: "shortOffset",
    });
    const middayUTC = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
    const offsetPart = tzFormatter
      .formatToParts(middayUTC)
      .find((p) => p.type === "timeZoneName")!.value; // e.g. GMT-06:00
    const offset = offsetPart.replace("GMT", "");
    */
    // Build local Mexico City time with explicit offset and convert to UTC ISO
    //const scheduledAtCST = `${scheduleDate}T${scheduleTime}:00${offset}`;
    /*const scheduledAtISO = new Date(scheduledAtCST)
      .toISOString()
      .replace(/\.\d{3}Z$/, "Z");
    */

    const payload: SchedulePayload = {
      session_id: sessionId,
      scheduled_at: "",
      scheduled_at_cst: "",
      metadata: {},
      status: "scheduled",
      attempts: 0,
      client_mail: email,
      client_name: name,
      client_phone: phone.replace("+", ""),
    };
    console.log(payload);
    try {
      const res = await scheduleCall(payload);
      console.log(res);
    } catch (err) {
      console.log(err);
      // Non-blocking: show success page even if scheduling failed
    }
  }

  return (
    <div className="pt-36 sm:pt-12 h-svh w-full">
      <div className="w-full h-full px-5 sm:px-24 relative flex flex-col items-center justify-start sm:justify-end gap-y-4">
        <p className="text-xl sm:text-3xl text-black font-extrabold mb-4">
          {isPaid ? "Pago confirmado" : "No se pudo confirmar el pago"}
        </p>
        <p className="font-light text-center sm:text-left text-sm sm:text-base mb-6">
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
        <Image
          className="mx-auto"
          src="/ialegal/MarIaFoto.png"
          alt="Maria Glz"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
