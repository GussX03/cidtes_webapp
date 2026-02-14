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
  { id: 8, image: "/images/ods/ods-08.png", alt: "08 Decent Work and Economic Growth" },
  { id: 9, image: "/images/ods/ods-09.png", alt: "09 Industry, Innovation and Infrastructure" },
  { id: 10, image: "/images/ods/ods-10.png", alt: "10 Reduced Inequalities" },
  { id: 11, image: "/images/ods/ods-11.png", alt: "11 Sustainable Cities and Communities" },
  { id: 12, image: "/images/ods/ods-12.png", alt: "12 Responsible Consumption and Production" },
  { id: 13, image: "/images/ods/ods-13.png", alt: "13 Climate Action" },
  { id: 14, image: "/images/ods/ods-14.png", alt: "14 Life Below Water" },
  { id: 15, image: "/images/ods/ods-15.png", alt: "15 Life on Land" },
  { id: 16, image: "/images/ods/ods-16.png", alt: "16 Peace, Justice and Strong Institutions" },
  { id: 17, image: "/images/ods/ods-17.png", alt: "17 Partnerships for the Goals" },
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
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Investigación y Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
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

      {/* ODS Section */}
      <section className="pt-32 pb-16 bg-white relative">
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
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.alt}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#0891B2] w-6" : "bg-gray-300"
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

      {/* Desarrollo Social - Niños Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src="/images/desarrollo-social-ninos.png"
                  alt="Niña sonriendo con su muñeca"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-bold italic mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}
                >
                  Desarrollo Social
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-1 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}></div>
                  <span
                    className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}
                  >
                    Niños
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Conocer los derechos constitucionales que defienden nuestra integridad y autonomía como seres humanos, nos permiten ejercer nuestra libertad y solicitar el apoyo a instituciones gubernamentales cuando se presenten situaciones que atenten contra nuestra soberanía.
                </p>
                <p>
                  Por lo que se consideran esenciales en el desarrollo de cada ser humano y en la creación de una buena calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué lo estamos trabajando - Autismos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src="/images/autismos-manos.png"
                  alt="Manos pintadas con caritas felices"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-3xl lg:text-4xl font-bold italic mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}
                >
                  Por qué lo estamos trabajando y beneficios
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-1 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}></div>
                  <span
                    className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(90deg, #01A0E1 0%, #662686 100%)' }}
                  >
                    Autismos
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  En CIDTES somos una asociación civil dedicada a la sustentabilidad, está comprometida con el avance de personas pertenecientes a grupos minoritarios o vulnerables.
                </p>
                <p>
                  Reconociendo el creciente interés en el autismo por parte de la comunidad científica, CIDTES lidera el "Proyecto Autismo", centrado en la integración de personas con Trastorno del Espectro Autista (TEA) en la comunidad y su impulso dentro de un marco sustentable.
                </p>
                <p>
                  Creemos que la difusión y divulgación científica sobre esta condición son el primer paso para una inclusión efectiva, promoviendo sensibilidad y conciencia en la población para disminuir la estigmatización y los prejuicios que enfrentan estas personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo Social - Derechos Constitucionales Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Green leaf background - Right side */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none flex items-start justify-end">
          <div className="relative" style={{ width: '800px', height: '800px', marginTop: '-100px', marginRight: '-100px' }}>
            <Image
              src="/images/hoja-verde-background.png"
              alt=""
              width={800}
              height={800}
              className="w-full h-full object-contain opacity-40"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-1 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, #662686 0%, #01A0E1 100%)' }}></div>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#14b8a6] mb-3">
                  Desarrollo social
                </h2>
                <h3 className="text-2xl lg:text-3xl font-normal text-gray-800">
                  Derechos Constitucionales
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  En CIDTES somos una asociación civil dedicada a la sustentabilidad, está comprometida con el avance de personas pertenecientes a grupos minoritarios o vulnerables.
                </p>
                <p>
                  Reconociendo el creciente interés en el autismo por parte de la comunidad científica, CIDTES lidera el "Proyecto Autismo", centrado en la integración de personas con Trastorno del Espectro Autista (TEA) en la comunidad y su impulso dentro de un marco sustentable.
                </p>
                <p>
                  Creemos que la difusión y divulgación científica sobre esta condición son el primer paso para una inclusión efectiva, promoviendo sensibilidad y conciencia en la población para disminuir la estigmatización y los prejuicios que enfrentan estas personas.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative z-20">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/derechos-constitucionales.png"
                  alt="Profesionales trabajando con documentos legales"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative pt-20 pb-8">
            {/* Timeline Items Container */}
            <div className="relative">
              {/* Timeline line - thicker green line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-[#14b8a6] hidden md:block" style={{ left: '5%', right: '5%' }}></div>

              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Item 1: Autismo */}
                <div className="flex flex-col items-center relative">
                  {/* Icon circle - above the line with hover effect */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#14b8a6] flex items-center justify-center p-3 shadow-md mb-8 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#0d9488] cursor-pointer">
                    <Image
                      src="/images/icon-autismo.png"
                      alt="Autismo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Connection dot - centered on the line */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#14b8a6] z-20 hidden md:block"></div>
                  <h3 className="text-base font-normal text-gray-700 text-center mt-6">Autismo</h3>
                </div>

                {/* Item 2: Derechos Constitucionales */}
                <div className="flex flex-col items-center relative">
                  {/* Icon circle - above the line with hover effect */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#14b8a6] flex items-center justify-center p-3 shadow-md mb-8 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#0d9488] cursor-pointer">
                    <Image
                      src="/images/icon-derechos.png"
                      alt="Derechos Constitucionales"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Connection dot - centered on the line */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#14b8a6] z-20 hidden md:block"></div>
                  <h3 className="text-base font-normal text-gray-700 text-center mt-6">Derechos<br />Constitucionales</h3>
                </div>

                {/* Item 3: Niños */}
                <div className="flex flex-col items-center relative">
                  {/* Icon circle - above the line with hover effect */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#14b8a6] flex items-center justify-center p-3 shadow-md mb-8 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#0d9488] cursor-pointer">
                    <Image
                      src="/images/icon-ninos.png"
                      alt="Niños"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Connection dot - centered on the line */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#14b8a6] z-20 hidden md:block"></div>
                  <h3 className="text-base font-normal text-gray-700 text-center mt-6">Niños</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="h-16 bg-white relative overflow-hidden">
        <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
      </div>

      {/* Comunidades Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2
              className="text-5xl lg:text-6xl font-bold inline-block pb-3"
              style={{
                color: '#14b8a6',
                borderBottom: '5px solid #14b8a6'
              }}
            >
              Comunidades
            </h2>
          </div>

          {/* Image */}
          <div className="mb-12 flex justify-center">
            <div className="max-w-4xl w-full">
              <Image
                src="/images/comunidades-global.png"
                alt="Comunidades globales conectadas"
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Sistemas de Gestión Card */}
            <div>
              <div className="text-white px-8 py-3 rounded min-w-[280px] inline-block" style={{ background: 'linear-gradient(90deg, #0E9991 0%, #662686 100%)' }}>
                <h3 className="text-xl font-semibold">Sistemas de Gestión</h3>
              </div>
              <div className="mt-6">
                <p className="text-gray-800 mb-4 text-base">
                  Se analiza para <span className="font-bold">facilitar</span> la implementación o <span className="font-bold">accesos</span> a los sistemas de gestión a las PYMES:
                </p>
                <ul className="space-y-1 text-gray-800 text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Calidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Energía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>SyST</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sostenibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Compliance (Texto)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Educación Dual Card */}
            <div>
              <div className="text-white px-8 py-3 rounded min-w-[260px] inline-block" style={{ background: 'linear-gradient(90deg, #0E9991 0%, #662686 100%)' }}>
                <h3 className="text-xl font-semibold">Educación Dual</h3>
              </div>
              <div className="mt-6">
                <p className="text-gray-800 leading-relaxed text-base">
                  La formación dual <span className="font-bold">es un modelo educativo</span> que integra teoría y práctica, <span className="font-bold">preparando a estudiantes</span> para el empleo mediante la colaboración entre instituciones educativas y empresas, lo que asegura su relevancia y alineación con el mercado laboral.
                </p>
              </div>
            </div>
              <div className="mt-4">
                <p className="text-gray-700 mb-4">
                  Se analiza para <span className="font-semibold">facilitar</span> la implementación o <span className="font-semibold">accesos</span> a los sistemas de gestión a las PYMES:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Calidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Energía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>SyST</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sostenibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Compliance (Texto)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Educación Dual Card */}
            <div>
              <div className="text-white px-6 py-3 inline-block rounded" style={{ background: 'linear-gradient(90deg, #0E9991 0%, #662686 100%)' }}>
                <h3 className="text-xl font-semibold">Educación Dual</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed">
                  La formación dual <span className="font-semibold">es un modelo educativo</span> que integra teoría y práctica, <span className="font-semibold">preparando a estudiantes</span> para el empleo mediante la colaboración entre instituciones educativas y empresas, lo que asegura su relevancia y alineación con el mercado laboral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 shadow-[0_-5px_6px_rgba(0,0,0,0.05)] font-sans">
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
                  Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330, México.
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
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-gray-500 text-sm text-center">
                Copyright 2025 CIDTES Energía y Sustentabilidad. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
