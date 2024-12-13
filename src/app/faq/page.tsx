"use client";

import { ArrowDown, ArrowUp, Minus, Plus } from 'lucide-react';
import React from 'react'

function FAQ() {
  const [selectedCategory, setSelectedCategory] = React.useState('divorcio');
  const [currentFAQ, setCurrentFAQ] = React.useState(0);

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: { [key: string]: FAQ[] } = {
    'divorcio': [
      {
        "question": "¿Qué necesito para solicitar un divorcio administrativo en la Ciudad de México?",
        "answer": "Ambos cónyuges deben estar de acuerdo.\n  No tener hijos menores ni dependientes económicos. \nHaber liquidado la sociedad conyugal. \nPresentar acta de matrimonio, identificaciones oficiales y convenio de separación."
      },
      {
        "question": "¿Cuánto tiempo tarda un divorcio contencioso en la Ciudad de México?",
        "answer": "Con el nuevo Código Nacional de Procedimientos Civiles y Familiares, el proceso puede tomar entre 6 y 12 meses, dependiendo de la complejidad del caso y la carga de trabajo del tribunal."
      },
      {
        "question": "¿Qué documentos necesito para un divorcio internacional?",
        "answer": "Documentos requeridos: Acta de matrimonio. Actas de nacimiento de hijos (si aplica). Identificaciones oficiales. Traducciones certificadas y poder notarial para representación legal."
      },
      {
        "question": "¿Qué medidas ofrece la nueva legislación para proteger a los hijos menores en un divorcio?",
        "answer": "El nuevo código prioriza el interés superior del menor, incluyendo audiencias especializadas para decidir sobre custodia, régimen de visitas y pensión alimenticia."
      },
      {
        "question": "¿Qué sucede con los bienes durante un divorcio?",
        "answer": "En matrimonios bajo sociedad conyugal, los bienes se dividen conforme al convenio de separación o resolución judicial. En separación de bienes, cada parte conserva lo adquirido individualmente."
      },
      {
        "question": "¿Es obligatorio asistir a mediación antes de iniciar un divorcio?",
        "answer": "En la Ciudad de México, la mediación es un paso recomendado para resolver conflictos de manera pacífica antes de judicializar el proceso."
      },
      {
        "question": "¿Qué puedo hacer si hay violencia familiar durante un divorcio?",
        "answer": "La legislación actual permite solicitar órdenes de protección inmediatas, como la exclusión del hogar del agresor, restricción de contacto y medidas provisionales para garantizar la seguridad de los afectados."
      }
    ],
    'gyc': [
      {
        "question": "¿Cómo se decide la custodia de los hijos en un divorcio?",
        "answer": "El juez evalúa factores como la estabilidad, el entorno familiar y la relación con cada progenitor, basándose siempre en el interés superior del menor. Este principio es prioritario en la legislación mexicana."
      },
      {
        "question": "¿Qué diferencia hay entre custodia compartida y exclusiva?",
        "answer": "Custodia compartida: Ambos padres dividen tiempo y responsabilidades de manera equitativa, permitiendo que el menor mantenga una relación cercana con ambos. Custodia exclusiva: La tutela es otorgada a uno de los padres, mientras que el otro conserva derechos de visita y obligaciones de pensión alimenticia."
      },
      {
        "question": "¿Puedo modificar un convenio de custodia ya establecido?",
        "answer": "Sí, si las circunstancias cambian o si las necesidades del menor lo requieren, el convenio puede modificarse. Esto incluye cambios en el entorno familiar, educativos o de salud."
      },
      {
        "question": "¿Qué pasa si no cumplo con el convenio de custodia?",
        "answer": "El incumplimiento puede derivar en sanciones legales, incluyendo restricciones en los derechos de visita o ajustes en los términos del convenio. Nuestro equipo puede ayudarte a renegociar o aclarar los acuerdos."
      },
      {
        "question": "¿Cómo afecta la pensión alimenticia a los convenios de custodia?",
        "answer": "La pensión alimenticia está diseñada para cubrir las necesidades del menor (alimentación, educación, salud, etc.) y está directamente vinculada al tipo de custodia otorgada."
      }
    ],
    'mediacion': [
      {
        "question": "¿Qué es la mediación en un divorcio?",
        "answer": "La mediación es un proceso voluntario en el que un mediador neutral ayuda a las partes a llegar a acuerdos justos y equitativos, sin necesidad de un juicio. Es una alternativa eficaz para reducir costos y tiempos en la resolución de conflictos."
      },
      {
        "question": "¿La mediación es obligatoria antes de un juicio?",
        "answer": "En algunos estados la mediación puede ser un paso obligatorio antes de iniciar un proceso judicial, dependiendo de la naturaleza del conflicto. Te orientamos en cada caso para asegurarte de cumplir con los requisitos legales aplicables."
      },
      {
        "question": "¿Qué temas se pueden resolver en una mediación familiar?",
        "answer": "La mediación puede abordar diversos temas, entre ellos:\n- Custodia y régimen de visitas.\n- Pensión alimenticia.\n- División de bienes.\n- Convivencia familiar y acuerdos patrimoniales."
      },
      {
        "question": "¿Qué ventajas tiene la mediación frente al litigio?",
        "answer": "Rápida: Reduce significativamente el tiempo para resolver conflictos.\nEconómica: Evita gastos innecesarios en procesos judiciales prolongados.\nColaborativa: Promueve un ambiente de diálogo y respeto, ayudando a mantener relaciones familiares saludables."
      },
      {
        "question": "¿Qué pasa si no se llega a un acuerdo en la mediación?",
        "answer": "Si no es posible alcanzar un acuerdo, el siguiente paso es proceder con representación legal en tribunales. Nuestro equipo te acompañará para proteger tus derechos de manera efectiva."
      }
    ],
    'pyj': [
      {
        "question": "¿Qué necesito para tramitar mi jubilación en México?",
        "answer": "Los requisitos varían según la institución (IMSS, ISSSTE). Generalmente, necesitarás:\n- Identificación oficial.\n- CURP y acta de nacimiento.\n- Comprobante de semanas cotizadas o historial laboral.\n- Documentos adicionales según tu régimen."
      },
      {
        "question": "¿Cómo puedo revisar si estoy recibiendo la pensión correcta?",
        "answer": "Con un análisis detallado de tus aportaciones y semanas cotizadas. Te ayudamos a identificar errores y reclamar ajustes si es necesario."
      },
      {
        "question": "¿Cómo afecta mi divorcio a mi pensión de jubilación?",
        "answer": "Dependiendo del régimen matrimonial, el divorcio puede implicar la división de derechos adquiridos durante el matrimonio. Analizamos tu caso para garantizar que tus beneficios estén protegidos."
      }
    ],
    'otras': [
    ]
  };

  return (
    <div className="pt-12 min-h-svh h-fit w-full px-5 sm:px-24">
      <div className="text-title_mobile sm:text-title text-ml_blue font-extrabold rounded-full w-full px-4 py-4 text-center">
        FAQ
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <div onClick={() => setSelectedCategory("divorcio")} className={`w-fit flex justify-center items-center text-xs sm:text-sm text-ml_blue text-center font-bold py-2 px-8 rounded-full cursor-pointer ${selectedCategory == "divorcio" ? "bg-ml_blue text-white" : "bg-white border-ml_blue border-2 text-ml_blue"}`}>
          Divorcio
        </div>
        <div onClick={() => setSelectedCategory("gyc")} className={`w-fit flex justify-center items-center text-xs sm:text-sm text-ml_blue text-center font-bold py-2 px-8 rounded-full cursor-pointer ${selectedCategory == "gyc" ? "bg-ml_blue text-white" : "bg-white border-ml_blue border-2 text-ml_blue"}`}>
          Guardia y Custodia
        </div>
        <div onClick={() => setSelectedCategory("mediacion")} className={`w-fit flex justify-center items-center text-xs sm:text-sm text-ml_blue text-center font-bold py-2 px-8 rounded-full cursor-pointer ${selectedCategory == "mediacion" ? "bg-ml_blue text-white" : "bg-white border-ml_blue border-2 text-ml_blue"}`}>
          Mediación
        </div>
        <div onClick={() => setSelectedCategory("pyj")} className={`w-fit flex justify-center items-center text-xs sm:text-sm text-ml_blue text-center font-bold py-2 px-8 rounded-full cursor-pointer ${selectedCategory == "pyj" ? "bg-ml_blue text-white" : "bg-white border-ml_blue border-2 text-ml_blue"}`}>
          Pensiones y Jubilaciones
        </div>
        <div onClick={() => setSelectedCategory("otras")} className={`w-fi flex justify-center items-center text-xs sm:text-smt text-ml_blue text-center font-bold py-2 px-8 rounded-full cursor-pointer ${selectedCategory == "otras" ? "bg-ml_blue text-white" : "bg-white border-ml_blue border-2 text-ml_blue"}`}>
          Otras
        </div>
      </div>
      <div className="w-full py-5">
        {
          faqs[selectedCategory as keyof Object]?.map((faq, index) => {
            return (
              <div key={index} className={`w-full py-4 border-b-[1px] ${currentFAQ == index ? " border-ml_orange" : "border-ml_blue"}`}>
                <div className="text-ml_blue text-sm grid grid-cols-12 py-2 ">
                  <div className={`col-span-11 ${currentFAQ == index ? "font-bold" : ""}`}>
                    {faq.question}
                  </div>
                  <div className="col-span-1 flex justify-end items-center">
                    {
                      currentFAQ != index ?
                        <Plus onClick={() => setCurrentFAQ(index)} className="cursor-pointer text-ml_orange" size={24} />
                        :
                        <Minus onClick={() => setCurrentFAQ(-1)} className="cursor-pointer text-ml_orange" size={24} />
                    }
                  </div>
                </div>
                <div className={`text-ml_blue text-sm ${currentFAQ == index ? "block" : "hidden"}`}>
                  {faq.answer}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FAQ