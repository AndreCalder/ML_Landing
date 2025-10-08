"use client";

import Link from "next/link";
import React from "react";

function NavLink({
  href,
  text,
  classes,
}: {
  href: string;
  text: string;
  classes?: string;
}) {
  return (
    <Link
      className={`nav-link relative sm:text-lg py-2 ${classes} transition-colors duration-200 ease-out after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
      href={href}
    >
      {text}
    </Link>
  );
}

export default NavLink;
