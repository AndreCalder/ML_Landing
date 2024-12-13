import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

function Footer() {
    return (
        <div className="w-full min-h-48 bg-ml_blue grid grid-cols-12 py-6 px-5 sm:px-24">
            <div className="col-span-12 sm:col-span-3 flex items-center justify-center">
                <Image src="/MiLegalistaWhiteLogo.png" alt="Logo" width={280} height={100} />
            </div>
            <div className="col-span-12 sm:col-start-7 sm:col-span-6 flex flex-col justify-center items-center">
                <div className="w-full flex justify-end gap-4 my-4">
                    <p className="text-white font-extralight">
                        Nosotros
                    </p>
                    <p className="text-white font-extralight">
                        Portafolio
                    </p>
                    <p className="text-white font-extralight">
                        Beneficios
                    </p>
                    <p className="text-white font-extralight">
                        Contacto
                    </p>
                </div>
                <div className="w-full flex justify-center sm:justify-end gap-4 my-4">
                    <Image src="/Facebook.svg" alt="Facebook" width={25} height={25} />
                    <Image src="/Tiktok.svg" alt="Tiktok" width={25} height={25} />
                    <Image src="/X.svg" alt="X" width={25} height={25} />
                    <Image src="/Instagram.svg" alt="Instagram" width={25} height={25} />
                    <Image src="/LinkedIn.svg" alt="Linkedin" width={25} height={25} />
                </div>
            </div>
            <Separator className="col-span-12 bg-ml_orange" />
            <div className="col-span-12 flex py-5 justify-center gap-4">
                <div className="text-white">
                    Aviso de Privacidad
                </div>
                <div className="text-white">
                    Términos y Condiciones
                </div>
            </div>
        </div>
    )
}

export default Footer