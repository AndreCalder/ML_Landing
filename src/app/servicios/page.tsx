"use client";

import React from 'react'
import Image from 'next/image'
import Contacto from '../components/Contacto';

function Servicios() {

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
                        Servicios
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[15rem] px-5 sm:px-24 py-4">
                <div className="text-xl sm:text-3xl text-ml_orange font-extrabold rounded-full w-full px-4 py-4 text-center">
                    Servicios Legales de Calidad Profesional
                </div>
                <div className="text-sm sm:text-base font-light my-4">
                    Con un enfoque centrado en tu bienestar, nos dedicamos a brindarte las herramientas necesarias para que enfrentes cualquier desafío con confianza y claridad, asegurando que cada aspecto de tu situación sea tratado con profesionalismo y cercanía.
                </div>
                <div className="w-full grid grid-cols-12 gap-4">
                    <div onClick={() => scrollToDivCenter("divorcio")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center flex justify-center items-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Divorcio
                    </div>
                    <div onClick={() => scrollToDivCenter("guardiaycustodia")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center flex justify-center items-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Guardia y Custodia
                    </div>
                    <div onClick={() => scrollToDivCenter("mediacion")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center flex justify-center items-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Mediación
                    </div>
                    <div onClick={() => scrollToDivCenter("pensionesyjub")} className="col-span-6 sm:col-span-3 text-ml_blue bg-services_blue text-center flex justify-center items-center font-bold py-2 px-8 rounded-[15px] cursor-pointer">
                        Pensiones y Jubilaciones
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[20rem] sm:hidden py-6">
                <Image src="/ServicioDivorcio.png" alt='Atencion Personalizada' width={610} height={495} />
            </div>
            <div id="divorcio" className="min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-black font-extrabold">
                        Divorcio
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Sabemos que atravesar un divorcio puede ser un momento complicado. Por eso, te ofrecemos apoyo legal cercano y profesional para que este proceso sea lo más claro y llevadero posible. Nuestro equipo está aquí para guiarte paso a paso en el tipo de divorcio que mejor se adapte a tu situación.
                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Divorcio Bilateral (Voluntario o de Mutuo Acuerdo):</strong>
                                <br />
                                Ideal para parejas que desean separarse de forma amistosa. Incluye un convenio que define temas como la custodia de los hijos, pensión alimenticia, régimen de visitas y división de bienes.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Divorcio Administrativo o Notarial:</strong>
                                <br />
                                Diseñado para parejas sin hijos menores ni dependientes económicos. Este proceso es rápido y económico, realizado ante el Oficial del Registro Civil o Notario Público, siempre que ambos cónyuges estén de acuerdo.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Divorcio Contencioso:</strong>
                                <br />
                                Cuando no hay acuerdo entre las partes, el juez interviene para resolver tanto la disolución del matrimonio como aspectos relacionados con custodia, pensión alimenticia y división de bienes.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Divorcio en Línea:</strong>
                                <br />
                                Para quienes residen fuera de México, siempre que el matrimonio haya sido registrado bajo la legislación mexicana.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 sm:col-span-6  hidden sm:flex flex-col justify-center items-center">
                    <Image src="/ServicioDivorcio.png" alt='Atencion Personalizada' width={610} height={495} />
                </div>
            </div>
            <div className="w-full min-h-[20rem] sm:hidden py-6">
                <Image src="/ServicioGyC.png" alt='Atencion Personalizada' width={610} height={495} />
            </div>
            <div id="guardiaycustodia" className="min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6  hidden sm:flex flex-col justify-center items-center">
                    <Image src="/ServicioGyC.png" alt='Atencion Personalizada' width={610} height={495} />
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-black font-extrabold">
                        Guardia y Custodia
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Entendemos que las decisiones sobre la guardia y custodia de los menores deben centrarse en garantizar su estabilidad emocional, desarrollo integral y seguridad. Nuestro equipo te acompaña para lograr convenios que prioricen sus necesidades, ayudándote a navegar este proceso de manera humanizada y profesional.                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Custodia Compartida:</strong>
                                <br />
                                Soluciones legales para garantizar la igualdad en derechos y responsabilidades entre ambos padres, fomentando una relación equilibrada y saludable con los hijos.
                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Custodia Exclusiva:</strong>
                                <br />
                                Representación legal en casos donde uno de los padres solicita la tutela exclusiva, siempre priorizando el interés superior del menor.
                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Modificación de Custodia:</strong>
                                <br />
                                Servicios legales para ajustar acuerdos existentes según las necesidades cambiantes de los menores o los padres, con un enfoque en su bienestar.
                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Acuerdos Amistosos:</strong>
                                <br />
                                Mediación para resolver la guarda y custodia de manera pacífica, evitando desacuerdos legales extensos y favoreciendo el entendimiento mutuo.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full min-h-[20rem] sm:hidden py-6">
                <Image src="/ServicioMediacion.png" alt='Atencion Personalizada' width={610} height={495} />
            </div>
            <div id="mediacion" className="min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-black font-extrabold">
                        Mediación
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Creemos que la mediación es una herramienta poderosa para alcanzar acuerdos justos y equilibrados. Nuestro objetivo es ayudarte a dialogar, encontrar soluciones y evitar procesos judiciales innecesarios, siempre priorizando el respeto y la empatía entre las partes.                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Resolución de Conflictos:</strong>
                                <br />
                                Apoyo especializado para resolver desacuerdos sobre herencias, bienes y otros asuntos familiares, buscando siempre acuerdos que beneficien a ambas partes.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Mediación en Divorcios:</strong>
                                <br />
                                Un proceso eficaz para alcanzar acuerdos amigables con tu expareja, evitando largos y costosos trámites legales.
                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Talleres de Comunicación:</strong>
                                <br />
                                Capacitaciones diseñadas para fortalecer las relaciones familiares, mejorar el diálogo y prevenir conflictos futuros.                            </p>
                        </li>
                        <li>
                            <p className="my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Asesoría Personalizada:</strong>
                                <br />
                                Soluciones específicas adaptadas a las necesidades únicas de cada caso, con un enfoque humano y profesional.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 sm:col-span-6  hidden sm:flex flex-col justify-center items-center">
                    <Image src="/ServicioMediacion.png" alt='Atencion Personalizada' width={610} height={495} />
                </div>
            </div>
            <div className="w-full min-h-[20rem] sm:hidden py-6">
                <Image src="/PensionesyJub.png" alt='Atencion Personalizada' width={610} height={495} />
            </div>
            <div id="pensionesyjub" className="min-h-[36rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4">
                <div className="col-span-12 sm:col-span-6 hidden sm:flex flex-col justify-center items-center">
                    <Image src="/PensionesyJub.png" alt='Atencion Personalizada' width={610} height={495} />
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-center ">
                    <p className="text-xl sm:text-3xl text-black font-extrabold">
                        Pensiones y Jubilaciones
                    </p>
                    <p className="font-light my-6 text-sm sm:text-base">
                        Sabemos que gestionar una pensión o planificar una jubilación puede ser un proceso complicado. Por eso, te brindamos asesoría especializada para garantizar que recibas los beneficios que mereces y asegurar un retiro tranquilo y estable.
                    </p>
                    <ul>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Revisión de Pensiones:</strong>
                                <br />
                                Análisis detallado para garantizar que los montos de pensión sean justos y correctos según tus derechos.                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Trámites de Pensión:</strong>
                                <br />
                                Asistencia completa y personalizada desde la solicitud, actualización o apelación de pensiones, agilizando cada paso del proceso.
                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Planificación para la Jubilación:</strong>
                                <br />
                                Estrategias personalizadas para garantizar un retiro financiero seguro y estable, acorde a tus necesidades.
                            </p>
                        </li>
                        <li>
                            <p className=" my-6 text-sm sm:text-base">
                                <strong className='font-bolder'>Resolución de Conflictos:</strong>
                                <br />
                                Representación legal en disputas relacionadas con derechos de pensión o jubilación, protegiendo tus intereses.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <Contacto />
        </div>
    )
}

export default Servicios