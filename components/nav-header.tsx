"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "CIDTES" },
  { href: "/capacitacion", label: "Capacitación" },
  { href: "/certificacion", label: "Certificación" },
  { href: "/consultoria", label: "Consultoría" },
  { href: "/investigacion-consultoria", label: "Investigación y Consultoría" },
  { href: "/proyectos", label: "Proyectos" },
]

export function NavHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-100 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo-simple.png" alt="CIDTES Logo" width={80} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <span key={link.href + link.label} className="flex items-center">
                {i > 0 && <span className="text-gray-400 mx-2">|</span>}
                <Link
                  href={link.href}
                  className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
                >
                  <span className="relative z-10 transition-colors duration-500">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
                </Link>
              </span>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-gray-100 border-t border-gray-200 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-gradient-to-tr hover:from-[#6B46C1] hover:via-[#0891B2] hover:to-[#059669] hover:text-white transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
