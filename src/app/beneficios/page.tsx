"use client";

import React from 'react'
import Image from 'next/image'
import Contacto from '../components/Contacto';

function Beneficios() {

    const scrollToDivCenter = (id: string) => {
        const element = document.getElementById(id);
        if (element) {

            const offsetTop = element.offsetTop - (element.offsetHeight / 4)
            const offsetLeft = element.offsetLeft - (element.offsetWidth / 4)

            window.scrollTo({
                top: offsetTop,
                left: offsetLeft,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="pt-12 min-h-svh h-fit w-full" >
            <div className="w-full h-52 benefitsCover grid grid-cols-12 sm:px-24">
                <div className="col-span-12 sm:col-span-4  flex items-center">
                    <p className="text-ml_orange text-title font-extrabold">
                        Beneficios
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[20rem] px-5 sm:px-24 py-4">
                <div className="text-xl sm:text-3xl text-ml_orange font-extrabold rounded-full w-full px-4 py-4 text-center">
                    Vamos más allá de lo jurídico
                </div>
                <div className="text-sm sm:text-base font-light my-4">
                    Nuestros beneficios están diseñados para ofrecer más que soluciones legales. Desde la gestión de trámites hasta el apoyo emocional y práctico, trabajamos contigo para enfrentar los retos de forma integral. Nos enfocamos en brindar herramientas reales que te ayuden a avanzar, con un trato cercano y accesible que pone tus necesidades al centro de cada decisión.
                </div>
                <div className="w-full grid grid-cols-12 gap-4">
                    <div onClick={() => scrollToDivCenter("orientacionpsic")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Apoyo
                        <br />
                        Psicológico
                    </div>
                    <div onClick={() => scrollToDivCenter("asesoriafin")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Asesoria
                        <br />
                        Financiera
                    </div>
                    <div onClick={() => scrollToDivCenter("reinsercionlaboral")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Reinserción
                        <br />
                        Laboral
                    </div>
                    <div onClick={() => scrollToDivCenter("reubicacionvivienda")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Reubicación
                        <br />
                        de Vivienda
                    </div>
                </div>
            </div>
            <div className="orientacionpsicmobile w-full h-[23rem] sm:hidden">
            </div>
            <div id="orientacionpsic" className="orientacionpsic min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-ml_orange font-extrabold">
                        Orientación en Psicología
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Sabemos que los procesos familiares pueden ser emocionalmente difíciles, tu bienestar y el de tu familia es nuestra prioridad. Ofrecemos apoyo psicológico antes, durante y después del proceso, para ayudarte a ti y a tus hijos a enfrentar los retos emocionales de manera sana.
                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Asesoría emocional profesional:</strong> Contarás con psicólogos especializados que te acompañarán en cada etapa del proceso, ayudándote a afrontar el cambio con una visión más clara y estabilidad emocional.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Bienestar para toda la familia:</strong>  Este apoyo está disponible para todos los miembros de tu familia, asegurando un entorno emocionalmente saludable.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="asesoriafinmobile w-full h-[23rem] sm:hidden">
            </div>
            <div id="asesoriafin" className="asesoriafin min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-start-7 sm:col-span-5 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-ml_orange font-extrabold">
                        Asesoria Financiera
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Sabemos que muchas personas, pueden haberse desentendido de las finanzas familiares durante el matrimonio. Nuestro servicio de asesoría financiera es visionario y te ayudará a tomar el control de tus finanzas para administrar tu economía de forma independiente y con claridad.
                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Nuestros asesores financieros te enseñan a gestionar tu economía con una visión clara del futuro.</strong>
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Herramientas prácticas para una nueva etapa:</strong> Te brindamos las herramientas necesarias para que adquieras independencia y control sobre tus finanzas, incluso si esta es tu primera experiencia administrando un presupuesto.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="reinsercionlaboralmobile w-full h-[23rem] sm:hidden">
            </div>
            <div id="reinsercionlaboral" className="reinsercionlaboral min-h-[38rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-ml_orange font-extrabold">
                        Orientación en Reinserción Laboral
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">

                        Sabemos que muchas profesionistas dejan sus carreras para dedicarse a la familia y que después del matrimonio puede ser necesario regresar al mercado laboral. Te apoyamos en todo el proceso de reinserción laboral, ofreciendo asesoría personalizada e incluso grupos de apoyo para que retomes tu vida profesional con confianza.                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Asesoría completa para el regreso al trabajo:</strong> Te ayudamos a identificar tus fortalezas y te preparamos para enfrentar el mercado laboral actual.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Grupos de apoyo para reintegración profesional:</strong> Te conectamos con otros profesionistas en situación similar para que encuentres un apoyo mutuo y motivación en el proceso.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Preparación para entrevistas y actualización de CV:</strong> Te proporcionamos herramientas prácticas, desde técnicas de entrevista hasta la actualización de tu currículum para destacar en nuevas oportunidades.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="reubicacionviviendamobile w-full h-[23rem] sm:hidden">
            </div>
            <div id="reubicacionvivienda" className="reubicacionvivienda min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-start-7 sm:col-span-5 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-ml_orange font-extrabold">
                        Asesoría en reubicación de vivienda
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        En situaciones de cambio de domicilio, te ayudamos a encontrar opciones de vivienda a través de asesores inmobiliarios confiables y capacitados.                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Apoyo completo en el cambio de domicilio:</strong> Te conectamos con asesores inmobiliarios que te orientarán en la búsqueda de vivienda según tus necesidades.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Opciones seguras y adaptadas a tu situación:</strong> Los asesores te presentan opciones confiables y accesibles para facilitar la reubicación.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full min-h-[20rem] px-5 sm:px-24 py-4">
                <div className="text-xl sm:text-3xl text-black font-extrabold rounded-full w-full px-4 py-4 text-center">
                    Otros beneficios destacados
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/AtencionPersonalizada.svg" alt='Atencion Personalizada' width={120} height={120} />
                        <p className="my-4">
                            Atención personalizada
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/Transparencia.svg" alt='Transparencia' width={120} height={120} />
                        <p className="my-4">
                            Transparencia
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/SeguimientoReal.svg" alt='Seguimiento tiempo real' width={120} height={120} />
                        <p className="my-4">
                            Seguimiento en tiempo real
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/ExpDigital.svg" alt='Expediente Digital' width={120} height={120} />
                        <p className="my-4">
                            Expediente digital
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/FirmaDigital.svg" alt='Firma Digital' width={120} height={120} />
                        <p className="my-4">
                            Uso de firma digital

                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/CeroPapel.svg" alt='Cero Papel' width={120} height={120} />
                        <p className="my-4">
                        Modalidad cero papel
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/TramitesDistancia.svg" alt='Tramites a distancia' width={120} height={120} />
                        <p className="my-4">
                        Tramites a distancia
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center py-4">
                        <Image src="/EquipoEspecializado.svg" alt='Equipo especializado' width={120} height={120} />
                        <p className="my-4">
                        Equipo especializado
                        </p>
                    </div>
                </div>
            </div>
            <Contacto />
        </div>
    )
}

export default Beneficios