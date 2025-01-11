"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Contacto() {

    const [user, setUser] = React.useState<string>("");
    const [mail, setMail] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [checked, setChecked] = React.useState<boolean>(false);

    return (
        <div className="contacto w-full min-h-svh grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:px-5 py-6 gap-4">
                <div className="h-full w-full px-5 sm:pl-24 py-4 flex flex-col items-center justify-center gap-5">
                    <p className="text-xl text-ml_blue font-bold text-center py-7">
                        Estás a un click de conocer a tu aliado legal
                    </p>

                    <div className="w-full grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="user">Nombre completo*</Label>
                                <Input id="user" className='bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0' placeholder="" value={user} onChange={(e) => setUser(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="mail">Correo*</Label>
                                <Input id="mail" className='bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0' placeholder="" value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                        </div>                <div className="col-span-12 sm:col-span-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Número de telefono*</Label>
                                <Input id="phone" className='bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0' placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="flex flex-col space-y-1.5">
                                <Label className='font-extralight' htmlFor="message">¿Cómo podemos ayudarte?*</Label>
                                <Input id="message" className='bg-transparent rounded-full border-ml_blue focus-visible:ring-0 focus-visible:ring-offset-0' placeholder="" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="col-span-12 w-full flex items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <Checkbox className='border-ml_orange data-[state=checked]:bg-ml_orange rounded-md' checked={checked} onCheckedChange={(e) => { setChecked(e as boolean); }} id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    He leído y estoy de acuerdo en el manejo de mis datos personales con base en el Aviso de Privacidad.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit bg-ml_blue text-white font-bold text-base text-center rounded-full my-4 py-2 px-4 cursor-pointer transition-all hover:scale-105">
                        Ver más información
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 pl-5 gap-4 flex flex-col justify-center mobilecontact'>
                <div className="w-full h-fit flex flex-col justify-center">
                    <div className="flex items-center h-fit">
                        <Image src="/OneIcon.svg" alt="Step 1" width={90} height={90} />
                        <p className="text-white font-bold text-lg sm:text-2xl">
                            Completa el formulario
                        </p>
                    </div>
                    <div className="flex items-center h-fit">
                        <Image src="/TwoIcon.svg" alt="Step 2" width={90} height={90} />
                        <p className="text-white font-bold text-lg sm:text-2xl">
                            Nos ponemos en contacto contigo
                        </p>
                    </div>
                    <div className="flex items-center h-fit">
                        <Image src="/ThreeIcon.svg" alt="Step 3" width={90} height={90} />
                        <p className="text-white font-bold text-lg sm:text-2xl">
                            Agendamos tu consulta personalizada
                        </p>
                    </div>
                    <div className="flex items-center h-fit">
                        <Image src="/FourIcon.svg" alt="Step 4" width={90} height={90} />
                        <p className="text-white font-bold text-lg sm:text-2xl">
                            Atendemos tu caso
                        </p>
                    </div>
                </div>

                <div className="w-full h-fit px-6 py-3 bg-white rounded-tl-[65px] rounded-bl-[65px] hidden lg:flex flex-col xl:justify-around xl:flex-row gap-5">
                    <div className="hidden xl:flex items-center">
                        <Image src="/ContactPhone.svg" alt="Phone Number" width={40} height={40} />
                        <p className='ml-2 text-xs text-ml_blue'>55 1830 2233</p>
                    </div>
                    <div className="hidden xl:flex items-center">
                        <Image src="/ContactMail.svg" alt="Email Address" width={40} height={40} />
                        <p className='ml-2 text-xs text-ml_blue'>fernandosuarez@milegalista.com</p>
                    </div>
                    <div className="w-full justify-around gap-5 hidden lg:flex xl:hidden">
                        <div className="flex items-center">
                            <Image src="/ContactPhone.svg" alt="Phone Number" width={40} height={40} />
                            <p className='ml-2 text-xs text-ml_blue'>55 1830 2233</p>
                        </div>
                        <div className="flex items-center">
                            <Image src="/ContactMail.svg" alt="Email Address" width={40} height={40} />
                            <p className='ml-2 text-xs text-ml_blue'>fernandosuarez@milegalista.com</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <Link href="https://www.facebook.com/milegalista">
                            <Image src="/ContactFacebook.svg" alt="Facebook" width={40} height={40} />
                        </Link>
                        <Link href="https://www.tiktok.com/@milegalista">
                            <Image src="/ContactTiktok.svg" alt="TikTok" width={40} height={40} /> 
                        </Link>
                        <Link href="https://www.instagram.com/milegalista/">
                            <Image src="/ContactInstagram.svg" alt="Instagram" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="w-full justify-center gap-5 hidden lg:flex xl:hidden">
                        <Link href="https://www.facebook.com/milegalista">
                            <Image src="/ContactFacebook.svg" alt="Facebook" width={40} height={40} />
                        </Link>
                        <Link href="https://www.tiktok.com/@milegalista">
                            <Image src="/ContactTiktok.svg" alt="TikTok" width={40} height={40} />
                        </Link>
                        <Link href="https://www.instagram.com/milegalista/">
                            <Image src="/ContactInstagram.svg" alt="Instagram" width={40} height={40} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto