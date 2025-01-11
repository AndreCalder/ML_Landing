"use client";

import Link from 'next/link'
import React from 'react'

function NavLink({ href, text, classes}: { href: string, text: string, classes?: string }) {
    return (
        <Link className={`text-white py-2 nav-link sm:text-lg ${classes}`} href={href} >
            {text}
        </Link>
    )
}

export default NavLink