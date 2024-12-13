"use client";

import Link from 'next/link'
import React from 'react'

function NavLink({ href, text }: { href: string, text: string }) {
    return (
        <Link className='text-white py-2 nav-link sm:text-small' href={href} >
            {text}
        </Link>
    )
}

export default NavLink