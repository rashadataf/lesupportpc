import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function (event) {
      if (document.documentElement.clientWidth > 768) {
        setOpen(false);
      }
    });
  });
  return (
    <div className="flex flex-wrap justify-between items-center p-3 bg-blue-500">
      <div className="w-16 h-16 sm:w-16 sm:h-16 md:h-20 md:w-20">
        <Image
          src="/logo.png"
          alt="Logo"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>

      <a href="#" onClick={() => setOpen(!open)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </a>
      <nav className="bg-blue-500 h-auto w-screen md:w-10/12 mt-1">
        <ul
          className={`text-white transition-all duration-700 ease-out md:max-h-40 w-full flex flex-col md:flex-row md:justify-end md:space-x-8 overflow-hidden items-end ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <li className="text-lg bg-blue-500 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            Home
          </li>
          <li className="text-lg bg-blue-500 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            About Us
          </li>
          <li className="text-lg bg-blue-500 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            Services
          </li>
          <li className="text-lg bg-blue-500 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            Happy Customers
          </li>
        </ul>
      </nav>
    </div>
  );
}
