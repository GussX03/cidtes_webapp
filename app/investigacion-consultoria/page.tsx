"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const odsItems = [
  { id: 1, image: "/images/ods/ods-01.png", alt: "01 No Poverty" },
  { id: 2, image: "/images/ods/ods-02.png", alt: "02 Zero Hunger" },
  { id: 3, image: "/images/ods/ods-03.png", alt: "03 Good Health & Well-Being" },
  { id: 4, image: "/images/ods/ods-04.png", alt: "04 Quality Education" },
  { id: 5, image: "/images/ods/ods-05.png", alt: "05 Gender Equality" },
  { id: 6, image: "/images/ods/ods-06.png", alt: "06 Clean Water and Sanitation" },
  { id: 7, image: "/images/ods/ods-07.png", alt: "07 Affordable and Clean Energy" },
]

export default function InvestigacionConsultoriaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4)
      } else {
        setItemsPerView(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, odsItems.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="min-h-screen bg-white">
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
                className="relative text-white font-medium px-6 py-3 rounded-lg transition-all duration-500 group overflow-hidden transform scale-105"
              >
                <span className="relative z-10">Investigación consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-100 rounded-lg shadow-xl"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Únete
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/capacitacion/waves-background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left - Colibri Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/colibri-consultoria.png"
                  alt="CIDTES Colibri"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Decorative Line */}
              <div className="flex justify-center lg:justify-start mb-4">
                <Image
                  src="/images/linea-decorativa.png"
                  alt=""
                  width={120}
                  height={8}
                  className="h-2 w-auto"
                />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
                Investigación consultoría
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                En CIDTES <strong>nos comprometemos en los tres pilares económico, ambiental y social</strong> y nos
                alineamos a los compromisos y cumplimiento de las ODS de la ONU.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Cidtes está alineado a los compromiso y cumplimientos a los objetivos de la ODS, nos basamos en:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative -mt-1">
        <Image src="/images/wave-separator.png" alt="" width={1920} height={100} className="w-full" />
      </div>

      {/* ODS Section */}
      <section className="py-16 bg-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/leaf-background.png" alt="" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title with decorative line */}
          <div className="text-center mb-8">
            {/* Blue-Purple Line */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/linea-azul-morado.png"
                alt=""
                width={150}
                height={8}
                className="h-2 w-auto"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d]">
              ODS y agenda 2030
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              En CIDTES <strong>nos comprometemos en los tres pilares económico, ambiental y social</strong> y nos
              alineamos a los compromisos y cumplimiento de las ODS de la ONU. Cidtes está alineado a los
              compromiso y cumplimientos a los objetivos de la ODS, nos basamos en:
            </p>
          </div>

          {/* Los 17 ODS Badge */}
          <div className="flex justify-center mb-12">
            <div className="border-2 border-gray-300 rounded-full px-8 py-3">
              <span className="text-2xl font-light text-gray-700">Los 17 ODS</span>
            </div>
          </div>

          {/* ODS Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {odsItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-[#0891B2] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-[#0891B2] hover:text-[#0891B2] transition-colors duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-[#0891B2] hover:text-[#0891B2] transition-colors duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Image src="/images/cidtes-logo.png" alt="CIDTES" width={150} height={60} className="mb-4" />
              <p className="text-gray-300 text-sm">
                Centro de Investigación y Desarrollo Tecnológico en Energías Sustentables
              </p>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>contacto@cidtes.com</p>
                <p>+52 (55) 1234-5678</p>
              </div>
            </div>

            {/* Location */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
              <p className="text-gray-300 text-sm">
                Ciudad de México, México
              </p>
            </div>

            {/* Social */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CIDTES. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
