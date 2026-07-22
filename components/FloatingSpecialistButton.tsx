"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingSpecialistButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/seja-especialista"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Seja um Especialista"
    >
      <div
        className={`flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-5 md:py-3 bg-brand-primary text-white text-[11px] md:text-[12px] font-medium tracking-wide uppercase shadow-lg transition-all duration-300 rounded-[5px] ${
          isHovered ? "md:pr-6" : ""
        }`}
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="hidden md:inline">
          Seja Especialista
        </span>
      </div>
    </Link>
  );
}
