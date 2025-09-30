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

  if (isPaid && name && phone && scheduleDate && scheduleTime) {
    const [year, month, day] = scheduleDate.split("-").map((v) => Number(v));
    const [hourStr, minuteStr] = scheduleTime.split(":");
    const hour = Number(hourStr);
    const minute = Number(minuteStr);

    const mxParts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date(year, month - 1, day, hour, minute));
    const part = (type: string) => mxParts.find((p) => p.type === type)!.value;
    const mxDate = new Date(
      Number(part("year")),
      Number(part("month")) - 1,
      Number(part("day")),
      Number(part("hour")),
      Number(part("minute"))
    );

    const scheduledAtISO = mxDate.toISOString();

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
    const cstParts = tzFormatter.formatToParts(mxDate);
    const c = (t: string) => cstParts.find((p) => p.type === t)!.value;
    const offset = cstParts
      .find((p) => p.type === "timeZoneName")!
      .value.replace("GMT", "");
    const scheduledAtCST = `${c("year")}-${c("month")}-${c("day")}T${c(
      "hour"
    )}:${c("minute")}:00${offset}`;

    const payload: SchedulePayload = {
      session_id: sessionId,
      scheduled_at: scheduledAtISO,
      scheduled_at_cst: scheduledAtCST,
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
      <div className="w-full h-full px-5 sm:px-24 relative flex flex-col items-center justify-start sm:justify-center gap-y-4">
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
          className="absolute bottom-0 right-1/2 translate-x-1/2"
          src="/ialegal/MarIaFoto.png"
          alt="Maria Glz"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
