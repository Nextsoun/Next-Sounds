"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const sections = ["home", "about", "services", "contact"];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1b262c] p-2 shadow-md z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/next_sound.png" alt="logo" width={60} height={60} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-4 ${menuOpen ? "block" : "hidden"} md:block`}>
          <li>
            <a
              className={`hover:text-[#C06048] focus:underline-offset-8 text-white p-2 ${
                activeSection === "home" ? "underline" : ""
              }`}
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#C06048] focus:underline-offset-8 text-white p-2 ${
                activeSection === "about" ? "underline" : ""
              }`}
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#C06048] focus:underline-offset-8 text-white p-2 ${
                activeSection === "services" ? "underline" : ""
              }`}
              href="#services"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#C06048] focus:underline-offset-8 text-white p-2 ${
                activeSection === "contact" ? "underline" : ""
              }`}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
