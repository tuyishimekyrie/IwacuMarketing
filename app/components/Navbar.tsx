'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/logo.jpeg'
import Link from 'next/link'
import menuLinks from '../constants/menuLinks'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 border-b border-slate-200">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" className="w-10" />
        </Link>
      </div>
      <ul className="space-x-8 ">
        {menuLinks.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className=" hover:text-yellow-300 hover:cursor-pointer transition ease-out delay-75"
          >
            {menu.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar