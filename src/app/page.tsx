"use client";
import Image from "next/image";
import Contacto from "./components/Contacto";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (window as any).iMashEmbedConfig = {
      assistantId: "71c34e91-0a76-48f8-a062-2c77bb8c60ba",
    };
    (function () {
      var script = document.createElement("script");
      script.src = "https://dashboard.soph-ia.ai/embed/widget.js";
      script.async = true;
      document.head.appendChild(script);
    })();
  }, []);
  return (
    <main className="w-svw min-h-svh">
      {/* Sección 1 */}
      <div
        id="cover"
        className="home-hero grid grid-cols-12 px-5 sm:px-24 gap-4"
      >
        <div className="h-[80vh] sm:h-svh col-span-12 md:col-span-5 flex flex-col justify-end md:justify-center">
          <p className="text-3xl text-center sm:text-left gap-4">
            <span className="text-title_mobile sm:text-title text-center text-ml_blue font-extrabold">
              Tu bienestar es
            </span>
            <br />
            <span className="text-title_mobile sm:text-title text-ml_orange font-extrabold">
              nuestra prioridad legal
            </span>
          </p>
          <p className="font-extralight my-6 text-[16px] sm:text-[22px] pr-6">
            Nos especializamos en servicios legales accesible para familias,
            ofreciendo apoyo personalizado en cada paso del proceso legal.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div className="col-span-2 lg:col-span-1 text-ml_orange font-bold">
              Divorcios
            </div>
            <div className="col-span-2 lg:col-span-1 text-ml_orange font-bold">
              Derecho Familiar
            </div>
            <div className="col-span-2 lg:col-span-1 text-ml_orange font-bold">
              Mediación
            </div>
            <div className="col-span-2 lg:col-span-1 text-ml_orange font-bold">
              Pensiones
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-8 px-5">
        <Separator className="block sm:hidden h-0.5 bg-ml_blue px-5" />
      </div>
      {/* Sección 2 */}
      <div className="aliado-legal min-h-[32rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
        <div className="hidden md:col-span-5 md:flex items-center">
          <Image
            src="/AliadoImg.png"
            alt="Aliado Legal"
            width={610}
            height={450}
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center ">
          <p className="text-subtitle_mobile sm:text-subtitle text-ml_orange font-extrabold">
            Somos tu aliado legal
          </p>
          <p className="font-extralight my-6 text-[16px] sm:text-[22px]">
            Creemos en servicios legales diseñados para todos, ofreciendo
            asesoría legal accesible, clara y con un trato cercano. Nuestro
            objetivo es brindar acompañamiento personalizado, asegurándonos de
            que cada persona reciba el apoyo que merece en cada etapa de su
            proceso.
          </p>
        </div>
        <div className="md:hidden col-span-12 flex justify-center items-center">
          <Image
            src="/AlliesMobile.png"
            alt="Aliado Legal"
            width={328}
            height={300}
          />
        </div>
      </div>
      {/* Sección 3 */}
      <div className="bg-ml_blue min-h-[80svh] grid grid-cols-12 px-5 sm:px-24 py-24 gap-4">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <p className="text-subtitle_mobile sm:text-subtitle text-white font-extrabold">
            No es solo una demanda, es una etapa de tu vida.
          </p>
          <p className="font-extralight text-base my-6 text-[16px] text-white">
            Nuestro enfoque es acompañarte en cada aspecto, no solo resolviendo
            el conflicto, sino también brindándote el apoyo necesario para que
            avances con tranquilidad y confianza, asegurándote de que tienes un
            respaldo sólido en cada paso del camino.
          </p>
          <div className="grid grid-cols-2 gap-4 pr-4 my-2">
            <div className="col-span-1 grid grid-cols-3 gap-4">
              <Image
                className="col-span-1"
                src="/OrientacionPsic.svg"
                alt="Orientación Psicológica"
                width={100}
                height={100}
              />
              <p className="col-span-2 text-white font-extralight text-[12px] sm:text-[16px] flex items-center justify-left">
                Orientación en Psicología
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-3 gap-4">
              <Image
                className="col-span-1"
                src="/AsesoriaFinanciera.svg"
                alt="Asesoría Financiera"
                width={100}
                height={100}
              />
              <p className="col-span-2 text-white font-extralight text-[12px] sm:text-[16px]  flex items-center justify-left">
                Asesoría Financiera
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-3 gap-4">
              <Image
                className="col-span-1"
                src="/ReinsercionLaboral.svg"
                alt="Reinserción Laboral"
                width={100}
                height={100}
              />
              <p className="col-span-2 text-white font-extralight text-[12px] sm:text-[16px]  flex items-center justify-left">
                Orientación en Reinserción Laboral
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-3 gap-4">
              <Image
                className="col-span-1"
                src="/UbicacionVivienda.svg"
                alt="Reubicación de Vivienda"
                width={100}
                height={100}
              />
              <p className="col-span-2 text-white font-extralight text-[12px] sm:text-[16px] flex items-center justify-left">
                Asesoría en reubicación de vivienda
              </p>
            </div>
          </div>
          <div className="w-full sm:w-full flex justify-center">
            <Link href="/beneficios">
              <p className="bg-ml_orange w-fit rounded-full px-4 py-2 my-4 text-white font-bold cursor-pointer transition-all hover:scale-105">
                Ver más
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex items-center">
          <Image
            className="hidden sm:block"
            src="/ServiceHome.png"
            alt="Servicios"
            width={610}
            height={600}
          />
          <Image
            className="sm:hidden"
            src="/ServiciosImgMobile.png"
            alt="Servicios"
            width={328}
            height={300}
          />
        </div>
      </div>
      <div className="CTA min-h-52 w-full sm:px-24 py-4">
        <p className="text-white sm:text-ml_blue text-title_mobile sm:text-title font-bold">
          ¡Resolvamos juntos!
        </p>
        <div className="text-white text-center sm:text-left text-l sm:text-2xl font-extralight my-2">
          Regístrate y empieza el proceso con un click
        </div>
        <div className="w-full sm:w-fit flex justify-center">
          <Link href="/contacto">
            <div className="bg-ml_blue text-white font-extrabold rounded-full w-fit px-4 py-2 cursor-pointer transition-transform hover:scale-105">
              Solicita tu asesoría gratuita
            </div>
          </Link>
        </div>
      </div>
      <div className="min-h-fit w-full px-5 sm:px-24 py-4 bg-services_blue flex flex-col items-center justify-center">
        <p className="text-3xl text-ml_blue font-bold text-center py-7">
          Nuestros Servicios
        </p>
        <div className="w-full grid grid-cols-12 gap-6">
          <div className="divorcio col-span-6 lg:col-span-3 h-80 rounded-[15px] relative">
            <div className="w-full bg-white h-4/5 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <Image
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/DivorcioIcon.svg"
                alt="Divorcio"
                width={60}
                height={60}
              />
              <p className="font-bold text-sm sm:text-base text-center">
                Divorcios y Disoluciones
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                Sabemos que un divorcio puede ser complicado. Te ofrecemos apoyo
                legal claro y cercano para hacerlo más llevadero, guiándote en
                cada paso según tu situación.
              </p>
            </div>
          </div>
          <div className="divorcio col-span-6 lg:col-span-3 h-80 rounded-[15px] relative">
            <div className="w-full bg-white h-4/5 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <Image
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/FamiliarIcon.svg"
                alt="Divorcio"
                width={60}
                height={60}
              />
              <p className="font-bold text-sm sm:text-base text-center">
                Derecho Familiar y Patria protestad
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                La guardia y custodia debe priorizar la estabilidad y seguridad
                de los menores. Logramos acuerdos que cuiden sus necesidades con
                un enfoque profesional y humano.
              </p>
            </div>
          </div>
          <div className="divorcio col-span-6 lg:col-span-3 h-80 rounded-[15px] relative">
            <div className="w-full bg-white h-4/5 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <Image
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/MediacionIcon.svg"
                alt="Divorcio"
                width={60}
                height={60}
              />
              <p className="font-bold text-sm sm:text-base text-center">
                Mediación o Justicia Alternativa
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                La mediación es clave para acuerdos justos y respetuosos. Te
                ayudamos a dialogar y evitar procesos legales innecesarios,
                priorizando empatía y soluciones equilibradas.
              </p>
            </div>
          </div>
          <div className="divorcio col-span-6 lg:col-span-3 h-80 rounded-[15px] relative">
            <div className="w-full bg-white h-4/5 px-2 rounded-[15px] absolute bottom-0 pt-12 pb-4 flex flex-col justify-around items-center">
              <Image
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/PYJIcon.svg"
                alt="Divorcio"
                width={60}
                height={60}
              />
              <p className="font-bold text-sm sm:text-base text-center">
                Pensiones y Jubilaciones
              </p>
              <p className="font-extralight text-xs sm:text-sm text-center my-5">
                Planear una pensión o jubilación puede ser complejo. Te
                asesoramos para asegurar tus beneficios y un retiro estable, con
                apoyo especializado.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-fit flex justify-center">
          <Link href={"/servicios"}>
            <div className="sm:w-full px-5 bg-ml_blue text-white font-bold text-l sm:text-2xl text-center rounded-full my-4 py-2 cursor-pointer transition-all hover:scale-105">
              Ver más información
            </div>
          </Link>
        </div>
      </div>
      <div className="min-h-[32rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center ">
          <p className="text-subtitle_mobile sm:text-subtitle text-ml_orange font-extrabold">
            Abogacía centrada en tu bienestar
          </p>
          <p className="font-extralight my-6 text-[16px] sm:text-[22px]">
            Entendemos que una demanda no solo es un trámite, sino una
            experiencia personal. Ponemos en el centro de todo a las personas,
            ofreciendo un servicio cercano, empático y pensado para que te
            sientas respaldado y comprendido en cada etapa del proceso.{" "}
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center items-center">
          <Image
            src="/Bienestar.svg"
            alt="Aliado Legal"
            width={610}
            height={450}
          />
        </div>
      </div>
      <div className="FAQ_CTA min-h-52 w-full sm:px-24 py-4 grid grid-cols-12">
        <div className="sm:col-start-7 col-span-12 sm:col-span-6 flex flex-col justify-center items-center sm:items-end gap-4">
          <p className="text-white text-l sm:text-3xl font-bold">
            ¿Todavía tienes preguntas?
          </p>
          <div className="bg-ml_orange text-[16px] text-white font-extrabold rounded-full w-fit px-4 py-2 cursor-pointer transition-transform hover:scale-105">
            Déjanos aclararlas por ti.
          </div>
        </div>
      </div>
      <Contacto />
    </main>
  );
}
