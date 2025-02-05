"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios';
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'sonner';

function Contacto() {
    const [user, setUser] = React.useState<string>("");
    const [mail, setMail] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [checked, setChecked] = React.useState<boolean>(false);
    const [recaptchaValue, setRecaptchaValue] = React.useState<string | null>(null);
    const [sent, setSent] = React.useState<boolean>(false);

    const onChange = async (value: string | null) => {
        setRecaptchaValue(value)
    }

    const sendContact = async () => {
        if (
            user === "" ||
            mail === "" ||
            phone === "" ||
            message === "" ||
            !checked
        ) {
            toast.error("Por favor, llena todos los campos y acepta el aviso de privacidad");
            return;
        }

        const axiosInstance = axios.create({
            baseURL: "https://mlai-434520.uc.r.appspot.com",
            headers: {
                "Content-type": "application/json"
            }
        });

        let res = await axiosInstance.post("/email/",
            {
                token: recaptchaValue,
                name: user,
                email: mail,
                phone: phone,
                message: message
            })
        toast.success("Correo enviado correctamente");
        setSent(true);
    };

    return (
        <div className="min-h-128 h-fit w-full px-5 sm:px-24 py-4 bg-contact_bg/50 flex flex-col items-center justify-center">
            <p className="text-xl text-ml_blue font-bold text-center py-7">
                Solicita tu asesoría gratuita
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
                <div className="col-span-12 w-full flex items-center justify-center py-6">

                    <ReCAPTCHA
                        sitekey="6LclRccqAAAAALFruEMbyr2VCbWUZYoWZmcCJk62"
                        onChange={onChange}
                    />
                </div>
            </div>
            {
                !sent && (
                    <button onClick={() => sendContact()} className="w-fit bg-ml_blue disabled:gray:300 text-white font-bold text-base text-center rounded-full my-4 py-2 px-4 cursor-pointer transition-all hover:scale-105">
                        Enviar
                    </button>
                )
            }
        </div>
    )
}

export default Contacto