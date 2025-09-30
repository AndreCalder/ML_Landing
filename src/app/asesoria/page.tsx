"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { generateStripeCheckoutURL } from "../actions";

export default function AsesoriaPage() {
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [scheduleDate, setScheduleDate] = React.useState<string>("");
  const [scheduleTime, setScheduleTime] = React.useState<string>("");
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const router = useRouter();

  const getNowInMexicoCity = () => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date());
    const part = (type: string) => parts.find((p) => p.type === type)!.value;
    return {
      year: Number(part("year")),
      month: Number(part("month")),
      day: Number(part("day")),
      hour: Number(part("hour")),
      minute: Number(part("minute")),
    };
  };

  const buildTimeOptions = React.useCallback((selectedDate: string) => {
    const options: string[] = [];
    const now = getNowInMexicoCity();
    const todayStr = `${String(now.year)}-${String(now.month).padStart(2, "0")}-${String(now.day).padStart(2, "0")}`;
    const isToday = selectedDate === todayStr;
    const nowMinutes = now.hour * 60 + now.minute;

    for (let hour = 7; hour <= 22; hour++) {
      for (const minute of [0, 30]) {
        if (hour === 22 && minute === 30) continue;
        const minutesValue = hour * 60 + minute;
        if (isToday && minutesValue <= nowMinutes) continue;
        const hh = String(hour).padStart(2, "0");
        const mm = minute === 0 ? "00" : "30";
        options.push(`${hh}:${mm}`);
      }
    }
    return options;
  }, []);

  const timeOptions = React.useMemo(() => buildTimeOptions(scheduleDate), [buildTimeOptions, scheduleDate]);

  React.useEffect(() => {
    if (scheduleTime && !timeOptions.includes(scheduleTime)) {
      setScheduleTime("");
    }
  }, [timeOptions, scheduleTime]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Por favor, llena tu nombre y número de teléfono");
      return;
    }
    if (!scheduleDate || !scheduleTime) {
      toast.error("Selecciona la fecha y hora para tu llamada");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    let normalizedPhone = "";
    if (digits.length === 10) {
      normalizedPhone = `+52${digits}`;
    } else if (digits.length === 12 && digits.startsWith("52")) {
      normalizedPhone = `+${digits}`;
    } else {
      toast.error(
        "Ingresa un número de teléfono mexicano válido (10 dígitos o con 52/+52)"
      );
      return;
    }

    try {
      setSubmitting(true);
      const checkoutUrl = await generateStripeCheckoutURL(
        name,
        normalizedPhone,
        "",
        scheduleDate,
        scheduleTime,
        "asesoria"
      );
      router.push(checkoutUrl);
    } catch (err) {
      toast.error("Ocurrió un error al redirigir al pago");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-12 min-h-svh h-fit w-full">
      <div className="w-full h-52 benefitsCover grid grid-cols-12 sm:px-24">
        <div className="col-span-12 sm:col-span-6 flex items-center">
          <p className="text-ml_orange text-title font-extrabold">
            Asesoría Rápida
          </p>
        </div>
      </div>
      <div className="w-full px-5 sm:px-24 py-6">
        <div className="mx-auto py-12 max-w-xl">
          <p className="text-xl sm:text-3xl text-black font-extrabold mb-4">
            Completa los siguientes datos para continuar con el pago de tu
            asesoría.
          </p>
          <p className="font-light text-sm sm:text-base mb-6">
            Solamente necesitamos tu nombre y número de teléfono para continuar
            con el pago de tu asesoría, no te preocupes, no te pediremos ningún
            otro dato.
          </p>
          <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre completo*</Label>
                <Input
                  id="name"
                  className="bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Número de teléfono*</Label>
                <Input
                  id="phone"
                  className="bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Fecha de la llamada*</Label>
                <Input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time">Hora de la llamada*</Label>
                <select
                  id="time"
                  className="bg-transparent rounded-full border border-ml_blue px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  disabled={!scheduleDate}
                >
                  <option value="" disabled>
                    {scheduleDate ? "Selecciona una hora" : "Selecciona una fecha primero"}
                  </option>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                disabled={submitting}
                className="w-fit bg-ml_blue disabled:opacity-60 text-white font-bold text-base text-center rounded-full my-2 py-2 px-5 cursor-pointer transition-all hover:scale-105"
              >
                {submitting ? "Redirigiendo..." : "Continuar al pago"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
