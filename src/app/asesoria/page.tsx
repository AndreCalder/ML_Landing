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
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Por favor, llena tu nombre y número de teléfono");
      return;
    }

    try {
      setSubmitting(true);
      const checkoutUrl = await generateStripeCheckoutURL(name, phone);
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
