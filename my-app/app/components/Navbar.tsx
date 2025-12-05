"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { useTheme } from "../context/ThemeContext";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavLink {
  name: string;
  id: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ track client mount

  useEffect(() => {
    setMounted(true); // now we know we're on the client
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        darkMode ? "bg-[#000000] text-white border-[#3A3A3C]" : "bg-white text-black border-gray-200"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <Image
              className={`${darkMode ? "filter brightness-0 invert" : ""}`}
              src="/logo.png"
              alt="Mr. Fix and Build Logo"
              width={70}
              height={40}
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={e => {
                  if (pathname === "/") handleScroll(e, link.id);
                }}
              >
                {link.name}
              </a>
            ))}

            {/* THEME TOGGLE SLIDER */}
            <div
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 flex items-center px-1 ${
                darkMode ? "bg-[#3A3A3C]" : "bg-gray-300"
              }`}
            >
              <div className="absolute left-1.5 text-xs text-yellow-500">☀️</div>
              <div className="absolute right-1.5 text-xs text-white">🌙</div>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10 ${
                  darkMode ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </div>

            {/* CTA BUTTON */}
            <a
              href="/#contact"
              onClick={e => handleScroll(e, "contact")}
              className="bg-[#C8102E] hover:bg-[#a00d25] text-white px-6 py-2 rounded-sm uppercase font-bold text-sm tracking-wide transition-all transform hover:scale-105 shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center space-x-4">
            {/* THEME TOGGLE */}
            <div
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 flex items-center px-1 ${
                darkMode ? "bg-[#3A3A3C]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>

            {/* HAMBURGER BUTTON */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-[#BFC0C0] hover:text-[#C8102E] dark:hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 w-64 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          darkMode ? "bg-[#3A3A3C]" : "bg-gray-50"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div
          className={`h-20 flex justify-between items-center px-6 ${
            darkMode ? "bg-[#000000] border-[#3A3A3C]" : "bg-gray-100 border-gray-500"
          } border-b transition-colors duration-300`}
        >
          <span className="text-[#C8102E] font-bold text-2xl tracking-tighter uppercase">
            Build<span className="text-black dark:text-white transition-colors duration-300">Co.</span>
          </span>
          <span onClick={toggleMenu} className={`${darkMode ? "text-white" : "text-gray-800"} ml-2 font-semibold text-m`}>
            X
          </span>
        </div>

        <div className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => handleScroll(e, link.id)}
              className={`text-lg uppercase font-semibold tracking-wide transition-colors ${
                darkMode ? "text-[#BFC0C0] hover:text-white" : "text-gray-700 hover:text-[#C8102E]"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className={`pt-6 border-t ${darkMode ? "border-[#505052]" : "border-gray-300"}`}>
            <a
              href="#contact"
              onClick={e => handleScroll(e, "contact")}
              className="block w-full text-center bg-[#C8102E] px-6 py-3 rounded-sm uppercase font-bold tracking-wide shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
