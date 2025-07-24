import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/bird.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Classes", to: "classes" },
    { text: "Batches", to: "batches" },
    { text: "Why Choose Us", to: "why-choose-us" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-[#E3D3BC] px-4 py-4 shadow-md w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="flex items-center gap-4 cursor-pointer">
          <img
            src={logo}
            alt="Learning Nest Logo"
            className="w-20 h-20 object-cover rounded-full border-2 border-[#583015]"
          />
          <span className="text-[#583015] font-bold text-3xl tracking-wide">
            Learning Nest
          </span>
        </ScrollLink>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-[#583015] transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#583015] transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#583015] transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, i) => (
            <ScrollLink
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-[#583015] font-medium text-xl whitespace-nowrap hover:text-[#A27448] hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 px-4 pb-4 bg-[#EADDCB] rounded-md shadow-inner">
          {navLinks.map((link, i) => (
            <ScrollLink
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="block text-[#583015] font-medium text-lg whitespace-nowrap transition duration-200 hover:text-[#A27448] hover:pl-3 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
