"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingSpecialistButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/seja-especialista"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center gap-3 px-5 py-3 bg-brand-primary text-white text-[12px] font-medium tracking-wide uppercase shadow-lg transition-all duration-300 rounded-[5px] ${
          isHovered ? "pr-6" : ""
        }`}
      >
        <svg
          className="w-5 h-5"
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
        <span className={`${isHovered ? "opacity-100" : "opacity-0 md:opacity-100"} transition-opacity`}>
          Seja Especialista
        </span>
      </div>
    </Link>
  );
}
