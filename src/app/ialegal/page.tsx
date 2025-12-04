"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { generateStripeCheckoutURL } from "../actions";

function IALegal() {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [scheduleDate, setScheduleDate] = React.useState<string>("");
  const [scheduleTime, setScheduleTime] = React.useState<string>("");
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [timezone, setTimezone] = React.useState<string>("");

  // Detect user's timezone on component mount
  React.useEffect(() => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(detectedTimezone);
  }, []);

  // Check for #agendar hash in URL to auto-open dialog
  React.useEffect(() => {
    if (window.location.hash === "#agendar") {
      setIsDialogOpen(true);
    }
  }, []);

  const getClientNow = () => {
    // Get current time in the client's local timezone
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1, // getMonth() returns 0-11
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
    };
  };

  const buildTimeOptions = React.useCallback((selectedDate: string) => {
    const options: string[] = [];
    const now = getClientNow();
    const todayStr = `${String(now.year)}-${String(now.month).padStart(
      2,
      "0"
    )}-${String(now.day).padStart(2, "0")}`;
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

  const timeOptions = React.useMemo(
    () => buildTimeOptions(scheduleDate),
    [buildTimeOptions, scheduleDate]
  );

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
    if (!email) {
      toast.error("Por favor, ingresa tu correo electrónico");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Ingresa un correo electrónico válido");
      return;
    }
    /*
    if (!scheduleDate || !scheduleTime) {
      toast.error("Selecciona la fecha y hora para tu llamada");
      return;
    }
    */
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
        email,
        scheduleDate || "",
        scheduleTime || "",
        "ialegal",
        timezone
      );
      window.location.href = checkoutUrl;
    } catch (err) {
      toast.error("Ocurrió un error al redirigir al pago");
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-12 min-h-svh h-fit w-full">
      <div className="w-full min-h-[23rem] aiLegal grid grid-cols-12 px-5 sm:px-24">
        <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-2 justify-center items-start">
          <p className="text-white text-2xl">¡NUEVO!</p>
          <p className="text-ml_orange text-title text-5xl font-extrabold">
            Tu IA Legal en Materia Familiar
          </p>
        </div>
      </div>
      <div className="min-h-[28rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
        <div className="col-span-12 flex flex-col justify-center items-center ">
          <p className="text-2xl lg:text-4xl text-center text-ml_orange font-bold">
            Conoce a la Lic. Mar<span className="text-ml_blue">+ia</span>{" "}
            González: tu IA Legal en Materia Familiar
          </p>
          <p className="font-extralight text-center my-12 text-md sm:text-lg">
            Resuelve todas tus{" "}
            <span className="font-extrabold">dudas legales HOY.</span> Llamada
            directa con IA especializada, respaldada por nuestro despacho
            jurídico.
          </p>
          <div className="w-full gap-4 flex flex-wrap justify-around items-center">
            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-center gap-y-4">
              <Image
                src="/ialegal/SinCitas.svg"
                alt="Sin Citas"
                width={100}
                height={100}
              />
              <p className="text-center text-md font-light">Sin Citas</p>
            </div>
            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-center gap-y-4">
              <Image
                src="/ialegal/247.svg"
                alt="Disponible 24/7"
                width={100}
                height={100}
              />
              <p className="text-center text-md font-light">Disponible 24/7</p>
            </div>
            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-center gap-y-4">
              <Image
                src="/ialegal/PrecioFijo.svg"
                alt="Precio Fijo"
                width={100}
                height={100}
              />
              <p className="text-center text-md font-light">Precio Fijo</p>
            </div>

            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-center gap-y-4">
              <Image
                src="/ialegal/Confidencial.svg"
                alt="100% Confidencial"
                width={100}
                height={100}
              />
              <p className="text-center text-md font-light">
                100% Confidencial
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20rem] solicitaBg grid grid-cols-12 px-5 sm:px-24">
        <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-4 justify-center items-start">
          <p className="text-white  text-4xl font-extrabold">
            Solicita tu asesoría jurídica con Mar
            <span className="text-ml_orange">+ia</span> por $269
            <span className="text-sm align-top">.99</span>
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-ml_orange text-white font-extrabold rounded-full w-fit px-4 py-2 cursor-pointer transition-transform hover:scale-105"
          >
            Quiero mi asesoría
          </button>
        </div>
      </div>
      <div className="min-h-[28rem] grid grid-cols-12 pt-6 px-5 sm:px-24 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start pb-6">
          <p className="text-2xl lg:text-4xl textl-center lg:text-left text-ml_orange font-bold">
            Conoce a Mar<span className="text-ml_blue">+ia</span> González, tu
            IA Legal con Corazón Humano
          </p>
          <p className="font-extralight text-center lg:text-left my-6 text-md sm:text-lg">
            Mar<span className="text-ml_orange">+ia</span> es tu asistente legal
            inteligente,{" "}
            <span className="font-extrabold">
              entrenada específicamente en derecho mexicano y respaldada por el
              equipo de abogados de MiLegalista.
            </span>{" "}
            Disponible 24/7, te brinda orientación jurídica clara en tu idioma,
            sin tecnicismos, para que entiendas tus derechos y tomes las mejores
            decisiones.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start ">
          <Image
            src="/ialegal/MarIaFoto.png"
            alt="Mar+ia"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="min-h-fit w-full px-5 sm:px-24 py-4 lg:py-12 bg-services_blue flex flex-col items-center justify-between">
        <p className="text-lg text-ml_blue font-bold text-center italic">
          “Derecho claro, decisiones informadas”
        </p>
        <p className="text-2xl text-ml_orange font-bold py-7 text-center">
          Lo que hace diferente a Mar+ia
        </p>
        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          <div
            className="w-full lg:w-1/4 h-48 lg:h-96 rounded-b-[15px] relative"
            style={{
              backgroundImage: "url('/ialegal/Dif1.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="w-full bg-white h-4/6 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <div className="bg-ml_orange rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 p-2 flex justify-center items-center">
                <Image
                  className=""
                  src="/ialegal/DespachoReal.svg"
                  alt="Despacho Real"
                  width={40}
                  height={80}
                />
              </div>
              <p className="font-bold text-sm sm:text-base text-center">
                IA + Despacho Real
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                Mar+ia te orienta con respaldo de abogados especializados. Si
                necesitas acción legal, conectamos directo con el despacho.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/4 h-48 lg:h-96 rounded-b-[15px] relative"
            style={{
              backgroundImage: "url('/ialegal/Dif2.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="w-full bg-white h-4/6 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <div className="bg-ml_orange rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 p-2 flex justify-center items-center">
                <Image
                  className=""
                  src="/ialegal/SinEsperas.svg"
                  alt="Sin Esperas"
                  width={40}
                  height={40}
                />
              </div>
              <p className="font-bold text-sm sm:text-base text-center">
                24/7 Sin Esperas
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                Llamada inmediata o agenda cuando prefieras. Sin citas de cuando
                haya disponibilidad en la agenda. Tu urgencia legal es nuestra
                prioridad.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/4 h-48 lg:h-96 rounded-b-[15px] relative"
            style={{
              backgroundImage: "url('/ialegal/Dif3.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="w-full bg-white h-4/6 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <div className="bg-ml_orange rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 p-2 flex justify-center items-center">
                <Image
                  className=""
                  src="/ialegal/PrecioFijoTransparente.svg"
                  alt="Precio Fijo Transparente"
                  width={40}
                  height={40}
                />
              </div>
              <p className="font-bold text-sm sm:text-base text-center">
                Precio Fijo Transparente
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-2">
                $269.99 todo incluido. Sin sorpresas, sin tarifas por minuto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[28rem] grid grid-cols-12 pt-6 px-5 sm:px-24 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start gap-y-6 pb-6">
          <h2 className="text-3xl text-ml_blue font-bold">¿Cómo funciona?</h2>
          <Image
            className=""
            src="/ialegal/ComoFunciona.png"
            alt="Como Funciona"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start ">
          <div className="w-full flex flex-col gap-10 py-12">
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-ml_blue rounded-full flex justify-center items-center p-1">
                  <div className="w-full h-full border-2 border-white rounded-full flex justify-center items-center">
                    <div className="text-white text-2xl font-bold">1</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-ml_blue font-extrabold text-xl lg:text-2xl leading-tight">
                  Completa tu información
                </p>
                <p className="font-light text-base lg:text-md text-gray-700 mt-2">
                  Añade un nombre o alias (como prefieras), un teléfono para
                  recibir la llamada de orientación y tu correo electrónico.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-ml_blue rounded-full flex justify-center items-center p-1">
                  <div className="w-full h-full border-2 border-white rounded-full flex justify-center items-center">
                    <div className="text-white text-2xl font-bold">2</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-ml_blue font-extrabold text-xl lg:text-2xl leading-tight">
                  Paga y agenda tu llamada
                </p>
                <p className="font-light text-base lg:text-md text-gray-700 mt-2">
                  Por sólo $269.99 agenda tu consulta y elige fecha y hora para
                  atenderla. A tu tiempo y ritmo.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-ml_blue rounded-full flex justify-center items-center p-1">
                  <div className="w-full h-full border-2 border-white rounded-full flex justify-center items-center">
                    <div className="text-white text-2xl font-bold">3</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-ml_blue font-extrabold text-xl lg:text-2xl leading-tight">
                  Prepárate para tu consulta legal
                </p>
                <p className="font-light text-base lg:text-md text-gray-700 mt-2">
                  Ten a la mano documentos importantes, información de los
                  involucrados y tus dudas a resolver para cuando recibas la
                  llamada.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-ml_blue rounded-full flex justify-center items-center p-1">
                  <div className="w-full h-full border-2 border-white rounded-full flex justify-center items-center">
                    <div className="text-white text-2xl font-bold">4</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-ml_blue font-extrabold text-xl lg:text-2xl leading-tight">
                  Orientación jurídica respaldada
                </p>
                <p className="font-light text-base lg:text-md text-gray-700 mt-2">
                  Obtén respuestas claras. Mar
                  <span className="text-ml_blue font-bold">+i</span>a te
                  orientará; no sustituye la asesoría de un abogado litigante.
                  Si necesitas representación legal, puedes solicitar ser
                  contactado por los abogados de MiLegalista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-[36rem] grid grid-cols-12 pt-6 px-5 sm:px-24 gap-4 bg-ml_blue"
        style={{
          backgroundImage: "url('/ialegal/Garantia.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-start gap-y-4 py-12">
          <h3 className="text-white text-3xl lg:text-4xl font-extrabold">
            Garantía de Satisfacción
          </h3>
          <p className="text-white/90 font-extralight max-w-2xl">
            Si Mar+ia determina que no puede orientarte adecuadamente en tu caso
            específico, te devolvemos el 100% de tu pago. Sin preguntas, sin
            letra pequeña. Mar+ia no divaga, si no tiene la respuesta te lo
            dirá.
          </p>
          <p className="text-white/90 font-extralight max-w-2xl">
            Siéntete segur@ de tu información, la cual permanece encriptada en
            todo momento, además de recibir la mejor atención 100% personalizada
            a tu caso:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            <div className="flex items-center gap-4">
              <div className="h-28 w-28 rounded-full flex items-center justify-center">
                <Image
                  src="/ialegal/Llamada.svg"
                  alt="Llamada inmediata"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-white font-light text-lg">
                Llamada de orientación inmediata
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-28 w-28 rounded-full flex items-center justify-center">
                <Image
                  src="/ialegal/DerechoFamiliar.svg"
                  alt="Derecho familiar"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-white font-light text-lg">
                Derecho familiar: divorcios, pensiones y más…
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-28 w-28 rounded-full flex items-center justify-center">
                <Image
                  src="/ialegal/LenguajeClaro.svg"
                  alt="Lenguaje claro"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-white font-light text-lg">
                Lenguaje claro y entendible sin tecnicismos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-28 w-28 rounded-full flex items-center justify-center">
                <Image
                  src="/ialegal/Horarios.svg"
                  alt="Horarios"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-white font-light text-lg">
                Disponible de acuerdo a tus horarios
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-ml_orange text-white font-extrabold rounded-full w-fit px-6 py-3 cursor-pointer transition-transform hover:scale-105 mt-6"
          >
            Agenda ahora tu llamada
          </button>
        </div>
      </div>
      <div className="w-full min-h-[23rem] h-fit solicitaBG2 sm:px-24 flex flex-col justify-center items-center gap-y-4">
        <div className="w-full h-full lg:h-fit  py-12 lg:w-fit px-5 sm:px-0 flex flex-col justify-center items-start gap-y-4 bg-black/40 sm:bg-transparent">
          <p className="text-white sm:text-ml_blue text-5xl lg:max-w-2xl font-extrabold text-wrap">
            La incertidumbre desgasta. La información te da paz.
          </p>
          <p className="text-white text-2xl">
            ¡Hablemos ahora! y empieza a recuperar la tranquilidad que mereces.
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-ml_blue text-white font-extrabold rounded-full w-fit px-4 py-2 cursor-pointer transition-transform hover:scale-105"
          >
            Inicia tu asesoría por $269.99
          </button>
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl sm:text-2xl text-black font-extrabold">
                  Agenda tu llamada
                </p>
                <p className="font-light text-sm sm:text-base mt-1">
                  Completa los datos para continuar con el pago y agendar.
                </p>
              </div>
              <button
                aria-label="Cerrar"
                onClick={() => setIsDialogOpen(false)}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 mt-6">
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
                  <Label htmlFor="email">Correo electrónico*</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      {scheduleDate
                        ? "Selecciona una hora"
                        : "Selecciona una fecha primero"}
                    </option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-12 flex justify-center">
                <p className="text-xs text-gray-500 font-light">
                  *Llamada de prueba*
                </p>
              </div>
              <div className="col-span-12 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="w-fit bg-gray-200 text-gray-800 font-bold text-base text-center rounded-full my-2 py-2 px-5 cursor-pointer transition-all hover:scale-105"
                >
                  Cancelar
                </button>
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
      )}
    </div>
  );
}

export default IALegal;
