"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Category = {
  id: string
  name: string
  icon: string
}

type ServiceCard = {
  title: string
  image: string
  description?: string
}

const categories: Category[] = [
  { id: "energia", name: "Energía", icon: "/icons/desarrollo-organizacional-icon.png" },
  { id: "seguridad", name: "Seguridad y Salud en el Trabajo", icon: "/icons/formativo-icon.png" },
  { id: "desarrollo-personal", name: "Desarrollo Personal", icon: "/icons/energia-icon.png" },
  { id: "desarrollo-org", name: "Desarrollo Organizacional", icon: "/icons/valuacion-icon.png" },
  { id: "formativo", name: "Formativo", icon: "/icons/desarrollo-personal-icon.png" },
  { id: "valuacion", name: "Valuación", icon: "/icons/seguridad-icon.png" },
]

const servicesData: Record<string, ServiceCard[]> = {
  energia: [
    {
      title: "Diagnósticos Energéticos Residenciales",
      image: "/images/diagnosticos-residenciales.png",
    },
    {
      title: "Diagnósticos Energéticos Empresariales",
      image: "/images/diagnosticos-empresariales.png",
    },
    {
      title: "Alumbrado Público Eficiente",
      image: "/images/alumbrado-publico.png",
    },
    {
      title: "Código De Red",
      image: "/images/codigo-red.png",
    },
    {
      title: "Compraventa De Energía En Mercados Eléctricos",
      image: "/images/compraventa-energia.png",
    },
    {
      title: "Control De La Demanda Eléctrica",
      image: "/images/control-demanda.png",
    },
    {
      title: "Cortocircuito Y Coordinación De Protecciones",
      image: "/images/cortocircuito-protecciones.png",
    },
    {
      title: "Edificación Sustentable",
      image: "/images/edificacion-sustentable.png",
    },
    {
      title: "Eficiencia En Aire Acondicionado Y Refrigeración",
      image: "/images/eficiencia-aire.png",
    },
    {
      title: "Evaluación De Proyectos De Energía",
      image: "/images/evaluacion-proyectos.png",
    },
    {
      title: "Factor De Potencia Y Demanda",
      image: "/images/factor-potencia.png",
    },
    {
      title: "Generación Con Sistemas Fotovoltaicos",
      image: "/images/sistemas-fotovoltaicos.png",
    },
  ],
  seguridad: [],
  "desarrollo-personal": [],
  "desarrollo-org": [],
  formativo: [],
  valuacion: [],
}

export default function UnetePage() {
  const [activeCategory, setActiveCategory] = useState<string>("energia")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/images/logo-simple.png" alt="CIDTES Logo" width={80} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center">
              <Link
                href="/"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">CIDTES</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/capacitacion"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Capacitación</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/certificacion"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Certificación</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/consultoria"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/investigacion-consultoria"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Investigación y Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="/unete"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Únete</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main
        className="flex-1 pt-24 pb-8 relative"
        style={{
          backgroundImage: "url('/images/wave-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Title */}
          <div className="flex items-center justify-center mb-12">
            <div
              className="w-1 h-12 md:h-16 mr-4 rounded-full"
              style={{
                background: "linear-gradient(270deg, #01A0E1 0%, #662686 100%)",
              }}
            />
            <h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(270deg, #01A0E1 0%, #662686 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData[activeCategory].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-row"
              >
                {/* Image on Left */}
                <div className="relative w-1/3 min-w-[200px] flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content on Right */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-xl font-bold text-[#075EAB] mb-4">
                    {service.title}
                  </h3>
                  <button
                    className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #0296DA 0%, #065BA9 100%)",
                    }}
                  >
                    Información
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {servicesData[activeCategory].length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Contenido próximamente disponible
              </p>
            </div>
          )}
        </div>

        {/* Floating Bottom Navigation Bar */}
        <div className="sticky bottom-4 left-0 right-0 z-50 px-2 mt-12">
          <div className="max-w-[1400px] mx-auto">
            <div
              className="rounded-2xl shadow-2xl p-4 md:p-5"
              style={{
                background: "linear-gradient(90deg, #0293D8 0%, #075EAB 100%)",
              }}
            >
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 ${activeCategory === category.id
                      ? "bg-white text-[#075EAB] shadow-md scale-105"
                      : "bg-transparent text-white hover:bg-white/20"
                      }`}
                  >
                    <div className="relative w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        fill
                        className="object-contain transition-all duration-300"
                        style={
                          activeCategory === category.id
                            ? {
                              filter:
                                "invert(27%) sepia(82%) saturate(2270%) hue-rotate(195deg) brightness(91%) contrast(95%)",
                            }
                            : {}
                        }
                      />
                    </div>
                    <span className="font-semibold text-xs md:text-sm whitespace-nowrap">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-100 shadow-[0_-5px_6px_rgba(0,0,0,0.05)] font-sans">
        <div className="w-full px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-8">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-20 h-20 p-3 rounded-2xl bg-white shadow-lg mb-4 flex items-center justify-center">
                <Image
                  src="/images/logo2.png"
                  alt="CIDTES Logo"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg text-gray-800 text-center lg:text-left leading-relaxed font-bold">
                Tu aventura con CIDTES Energía y Sustentabilidad comienza aquí.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-[#1D63ED] mb-6">Contacto</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3"></div>
                  <a
                    href="mailto:cidtes@energiaysustentabilidad.org"
                    className="text-gray-800 hover:text-[#1D63ED] transition-colors duration-300"
                  >
                    cidtes@energiaysustentabilidad.org
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3"></div>
                  <a
                    href="tel:+525568125783"
                    className="text-gray-800 hover:text-[#1D63ED] transition-colors duration-300"
                  >
                    +52 55 6812-5783
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-[#1D63ED] mb-6">Ubicación</h2>
              <div className="flex items-start mb-4">
                <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3 mt-2"></div>
                <p className="text-gray-800 text-center lg:text-left leading-relaxed">
                  Real de Los Reyes #303, Los Reyes, Coyoacán, Ciudad de México, C.P. 04330, México.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <iframe
                  title="Mapa de Ubicación"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                  className="w-full h-40 rounded-lg shadow-md border-0"
                />
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-gray-700 text-sm text-center lg:text-right">
                © 2024 CIDTES. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
