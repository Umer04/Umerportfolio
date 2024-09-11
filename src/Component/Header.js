import React, { useState } from "react";
import {navLinks} from "./DataMap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 sticky top-0 z-50 mybox" id="Header">
      <div className="absolute -bottom-4 left-32 sm:left-52 bg-blue-400 w-20 h-20 blur-[80px]"></div>
      
      <header className="shadow-md">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white"><a
                  
                  href="#Home"
                  className="text-gray-300 hover:text-customTurquoise"
                >
                  Umer
                </a></h1>
            </div>
            <nav className="hidden lg:flex space-x-4">
  {navLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className="relative text-gray-300 hover:text-customTurquoise before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1px] before:bg-customTurquoise before:transition-all before:duration-300 hover:before:w-full"
    >
      {link.label}
    </a>
  ))}
</nav>

            <div className="lg:hidden">
            <button
  className="text-gray-300 hover:text-customTurquoise"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? (
    // Cross icon when `isOpen` is true
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ) : (
    // Hamburger icon when `isOpen` is false
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  )}
</button>

            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute bg-slate-800 top-12 right-8 border rounded box`}
        >
          <nav className="space-y-2 sm:px-3 animate-slideFromTop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-customTurquoise"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
