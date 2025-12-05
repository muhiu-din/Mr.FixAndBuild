"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { usePathname } from "next/navigation";

export default function Team() {
  const pathname = usePathname();
  const { darkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures this runs only on client
  }, []);

  if (!mounted) return null; // prevent SSR/client mismatch

  return (
    <div
      className={`min-h-screen px-6 py-24 md:px-20 transition-colors duration-300 ${
        darkMode ? "bg-[#121212] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* PAGE HEADER */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
        I Am <br />
        Muzammil Rehman
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-24">
        {/* LEFT SIDE — DESCRIPTION */}
        <div className="md:w-1/2">
          <p
            className={`text-lg leading-relaxed mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I am a dedicated builder with years of hands-on experience delivering
            reliable home improvement, renovation, and repair services. My focus
            is on precision, durability, and clean workmanship that transforms
            spaces into functional, beautiful environments. Whether it's a minor
            repair or a full-scale remodel, I take pride in providing solutions
            that are efficient, long-lasting, and tailored to your needs.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#C8102E]">
            Services I Provide
          </h2>

          <ul
            className={`space-y-4 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <li>
              <span className="font-semibold text-[#C8102E]">General Repairs:</span>{" "}
              Fixing leaky faucets, squeaky doors, broken fixtures, and all small
              issues before they become big problems.
            </li>

            <li>
              <span className="font-semibold text-[#C8102E]">Custom Carpentry:</span>{" "}
              Bespoke shelving, cabinetry, stud walls, and flat-pack joinery,
              crafted with precision and strength.
            </li>

            <li>
              <span className="font-semibold text-[#C8102E]">Painting & Decorating:</span>{" "}
              Clean interior and exterior painting with smooth, premium finishes.
            </li>

            <li>
              <span className="font-semibold text-[#C8102E]">Renovations:</span>{" "}
              Complete remodeling for kitchens, bathrooms, bedrooms, and living
              rooms — handled from start to finish.
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — VISUAL STACK */}
        <div className="relative w-[320px] h-[380px] md:w-[450px] md:h-[520px] mx-auto md:mx-0">
          {/* BACK SQUARE — Main Theme Color */}
          <div
            className="absolute inset-0 rounded-xl -rotate-[130deg]"
            style={{ backgroundColor: "#C8102E" }}
          ></div>

          {/* SECOND SQUARE — Light Color */}
          <div
            className="absolute inset-0 rounded-xl -rotate-[110deg] top-6 left-6"
            style={{ backgroundColor: darkMode ? "#2b2b2b" : "#eaeaea" }}
          ></div>

          <img
            src="pic1.png"
            alt="Muzammil Rehman"
            className="
              absolute bottom-9 left-1/2 -translate-x-1/2
              w-[100%] md:w-[95%] 
              h-[105%] md:h-[110%]
              object-cover rounded-lg
            "
          />
        </div>
      </div>
    </div>
  );
}
