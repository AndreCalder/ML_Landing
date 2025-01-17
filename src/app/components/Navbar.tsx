"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import Menu from './Menu';

function Navbar() {
    const pathname = usePathname();

    const [menuActive, setMenuActive] = React.useState(false)

    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        const navlinks = document.getElementsByClassName('nav-link');

        if (window.scrollY > 0) {
            if (navbar != undefined && navlinks.length > 0) {
                navbar.classList.add('bg-white');
                navbar?.classList.add('shadow-md');
                Array.from(navlinks).forEach((link) => {
                    link.classList.add('text-black');
                    link.classList.remove('text-white');
                });
            }
        } else {
            if (navbar != undefined && navlinks.length > 0) {
                navbar.classList.remove('bg-white');
                navbar?.classList.remove('shadow-md');
                Array.from(navlinks).forEach((link) => {
                    link.classList.add('text-white');
                    link.classList.remove('text-black');
                });
            }
        }
    };

    useEffect(() => {
        if (pathname === '/') {
            const navbar = document.getElementById('navbar');
            if (window.screen.width < 768) {

                const navlinks = document.getElementsByClassName('nav-link');

                navbar?.classList.add('bg-white');
                navbar?.classList.add('shadow-md');

                Array.from(navlinks).forEach((link) => {
                    link.classList.add('text-black');
                    link.classList.remove('text-white');
                });
            } else {
                navbar?.classList.remove('shadow-md');
                handleScroll();
                window.addEventListener('scroll', handleScroll);
            }

        } else {
            const navbar = document.getElementById('navbar');
            const navlinks = document.getElementsByClassName('nav-link');

            navbar?.classList.add('bg-white');
            navbar?.classList.add('shadow-md');

            Array.from(navlinks).forEach((link) => {
                link.classList.add('text-black');
                link.classList.remove('text-white');
            });
        }


        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
            <div id='navbar' className='w-svw min-h-16 fixed py-2 px-5 sm:px-12 md:px-24 items-center z-50'>
                <div className="grid grid-cols-12">
                    <div className="col-span-4  sm:col-span-2 flex items-center">
                        <Link href="/">
                            <Image className='cursor-pointer' src="Navbar_Logo.svg" alt="Logo" width={160} height={100} />
                        </Link>
                    </div>
                    <div className="hidden md:col-span-10 md:flex justify-end items-center gap-x-6">
                        <NavLink classes={pathname.includes("nosotros") ? "font-bold" : ""} href="/nosotros" text="Sobre Nosotros" />
                        <NavLink classes={pathname.includes("servicios") ? "font-bold" : ""} href="/servicios" text="Servicios" />
                        <NavLink classes={pathname.includes("beneficios") ? "font-bold" : ""} href="/beneficios" text="Beneficios" />
                        <NavLink classes={pathname.includes("faq") ? "font-bold" : ""} href="/faq" text="Preguntas Frecuentes" />
                        <NavLink classes={pathname.includes("contacto") ? "font-bold" : ""} href="/contacto" text="Contacto" />
                    </div>
                    <div className="md:hidden col-span-8 flex justify-end items-center gap-x-10">
                        <MenuIcon onClick={() => setMenuActive(true)} className='cursor-pointer hover:scale-105' size={24} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar