"use client";

import { ArrowBigDown, MoveDown, MoveUp, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Image
 from 'next/image';
interface MenuProps {
    menuActive: boolean;
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ menuActive, setMenuActive }: MenuProps) {

    const router = useRouter();
    const [subMenuActive, setSubMenuActive] = React.useState(false);
    const textClasses = "flex items-center text-[28px] md:text-4xl";
    const subTitleClasses = "flex items-center text-[18px] md:text-4xl";
    const numberColClasses = `col-span-2 sm:col-span-1 justify-center ${textClasses}`;
    const textColClasses = `col-span-10 sm:col-span-11 cursor-pointer ${textClasses}`;
    const [iconSize, setIconSize] = React.useState(30);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIconSize(20)
        }
    }, []);

    const redirect = (href: string) => {
        router.replace(href);
        setMenuActive(false);
    };

    return (
        <div id='menuContainer' className={`w-svw fixed menu z-[100] bg-white top-0 bottom-0 transition ease-in-out delay-150 ${menuActive ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='w-100 h-12 flex items-center justify-between px-5 border-solid'>
                <Link href="/">
                    <Image className='cursor-pointer' src="Navbar_Logo.svg" alt="Logo" width={100} height={100} />
                </Link>
                <X className='cursor-pointer' size={20} onClick={() => setMenuActive(false)} />
            </div>
            <div className="flex-1 h-4/6">
                <div className="h-full">
                    <div className="hover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/ialegal")} >IA Legal</div>
                    </div>
                    <div className="hover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/nosotros")} >Nosotros</div>
                    </div>
                    <div className="hover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/servicios")} >Servicios</div>
                    </div>
                    <div className="rhover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/beneficios")} >Beneficios</div>
                    </div>
                    <div className="hover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/faq")} >Preguntas Frecuentes</div>
                    </div>
                    <div className="hover:font-bold px-4 py-2">
                        <div className="cursor-pointer" onClick={() => redirect("/contacto")} >Contacto</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu