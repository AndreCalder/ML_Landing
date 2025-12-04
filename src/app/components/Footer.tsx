import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

function Footer() {
    return (
        <div className="w-full min-h-48 bg-ml_blue grid grid-cols-12 py-6 px-5 sm:px-24">
            <div className="col-span-12 sm:col-span-3 flex items-center justify-center">
                <Image src="/MiLegalistaWhiteLogo.png" alt="Logo" width={250} height={50} />
            </div>
            <div className="col-span-12 sm:col-start-7 sm:col-span-6 flex flex-col justify-center items-center">
                <div className="w-full flex flex-wrap justify-center sm:justify-end gap-4 my-4">
                    <Link href="/nosotros">
                        <p className="text-white font-extralight">
                            Nosotros
                        </p>
                    </Link>
                    <Link href="/servicios">
                        <p className="text-white font-extralight">
                            Servicios
                        </p>
                    </Link>
                    <Link href="/beneficios">
                        <p className="text-white font-extralight">
                            Beneficios
                        </p>
                    </Link>
                    <Link href="/faq">
                        <p className="text-white font-extralight">
                            Preguntas Frecuentes
                        </p>
                    </Link>
                    <Link href="/contacto">
                        <p className="text-white font-extralight">
                            Contacto
                        </p>
                    </Link>
                </div>
                <div className="w-full flex justify-center sm:justify-end gap-4 my-4">
                    <Image className='cursor-pointer' src="/Facebook.svg" alt="Facebook" width={25} height={25} />
                    <Image className='cursor-pointer' src="/Tiktok.svg" alt="Tiktok" width={25} height={25} />
                    <Image className='cursor-pointer' src="/Instagram.svg" alt="Instagram" width={25} height={25} />
                </div>
            </div>
            <Separator className="col-span-12 bg-ml_orange" />
            <div className="col-span-12 flex py-5 justify-center gap-4">
                <Link href="/avisoprivacidad" className="text-white cursor-pointer hover:underline" style={{opacity: 1}}>
                    <p>Aviso de Privacidad</p>
                </Link>
                <Link href="/tyc" className="text-white cursor-pointer hover:underline" style={{opacity: 1}}>
                    <p>Términos y Condiciones</p>
                </Link>
            </div>
            <div className="col-span-12 flex justify-center items-center opacity-100" style={{opacity: 1}}>
                <p className="text-white text-sm">© 2025 MiLegalista ®. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer