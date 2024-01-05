import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-t border-slate-200 p-4 flex items-center justify-between">
      <p className="text-2xl">
        Iwacu <span className="text-yellow-300">Marketing.</span>
      </p>
      <div>
        <p>© 2022-2024 Iwacu Marketing. All Rights Reserved.</p>
      </div>
      <div className="flex gap-8 items-center">
        <FaLinkedin className="w-6 h-6 hover:bg-yellow-400 hover:cursor-pointer transition ease-out delay-75" />
        <FaInstagram className="w-6 h-6 hover:bg-yellow-400 hover:cursor-pointer transition ease-out delay-75" />
        <FaWhatsapp className="w-6 h-6 hover:bg-yellow-400 hover:cursor-pointer transition ease-out delay-75" />
      </div>
    </div>
  );
}

export default Footer