"use client"

import Image from "next/image"
import Link from "next/link"
import { CourseSection } from "@/components/course-section"

export default function CapacitacionPage() {
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

      {/* Main Content */}
      <main className="pt-16">
        {/* Capacitación Section */}
        <section
          className="relative overflow-hidden min-h-screen py-20"
          style={{
            backgroundImage: "url(/images/capacitacion/waves-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8 relative">
                {/* Title */}
                <div>
                  <svg width="126" height="10" viewBox="0 0 126 10" fill="none" className="mb-4">
                    <path d="M5 5H121" stroke="url(#paint0_linear_cap_line)" strokeWidth="9" strokeLinecap="round" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_cap_line"
                        x1="5"
                        y1="5.5"
                        x2="121"
                        y2="5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#084E9F" />
                        <stop offset="1" stopColor="#662686" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Subtitle with Gradient Background */}
                <div className="inline-block">
                  <div
                    className="text-white px-8 py-3 rounded-lg"
                    style={{ background: "linear-gradient(to right, #084E9F 0%, #01A0E1 47.9%, #662686 95.8%)" }}
                  >
                    <h2 className="text-white text-2xl font-semibold">Metodología de capacitación</h2>
                  </div>
                </div>

                {/* Description Text */}
                <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
                  <p>
                    En nuestros cursos, hemos desarrollado una metodología sólida alineada con la competitividad,{" "}
                    <span className="font-bold">fomentando un entorno de aprendizaje</span> relevante para el desarrollo
                    personal y profesional.
                  </p>

                  <p>
                    Valoramos la experiencia, autonomía y motivación del aprendiz, utilizando la andragogía para
                    facilitar la conexión de nueva información con experiencias previas y promover conocimientos
                    duraderos y funcionales.
                  </p>

                  <p>Hemos capacitado a más de 40,000 personas, potencializando sus competencias laborales.</p>
                </div>
              </div>

              {/* Right Content - Single PNG Image */}
              <div className="relative flex justify-center items-start pt-[-50px]">
                <div className="relative w-full max-w-2xl">
                  <Image
                    src="/images/capacitacion/team-with-circles.png"
                    alt="Equipo de capacitación"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        {/* Course Sections */}
        <CourseSection
          title="Energía"
          imageSrc="/images/capacitacion/energia-bg.png"
          imageAlt="Energía - Cursos de energía"
          courseKey="energia"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        <CourseSection
          title="Seguridad y Salud en el trabajo"
          imageSrc="/images/capacitacion/seguridad-bg.png"
          imageAlt="Seguridad y Salud en el trabajo"
          reverse={true}
          courseKey="seguridad"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        <CourseSection
          title="Desarrollo Personal"
          imageSrc="/images/capacitacion/desarrollo-bg.png"
          imageAlt="Desarrollo Personal"
          courseKey="desarrollo-personal"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        <CourseSection
          title="Formativo"
          imageSrc="/images/capacitacion/formativo-bg.png"
          imageAlt="Formativo - Cursos formativos"
          reverse={true}
          courseKey="formativo"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        <CourseSection
          title="Valuación"
          imageSrc="/images/capacitacion/valuacion-bg.png"
          imageAlt="Valuación - Cursos de valuación"
          courseKey="valuacion"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        <CourseSection
          title="Desarrollo Organizacional"
          imageSrc="/images/capacitacion/desarrollo-organizacional-bg.png"
          imageAlt="Desarrollo Organizacional"
          reverse={true}
          courseKey="desarrollo-organizacional"
        />

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>
      </main>

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

              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-700">
                <span>© 2025 CIDTES Energía y Sustentabilidad.</span>
                <span>|</span>
                <span>Todos los derechos reservados.</span>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Aviso de privacidad
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Términos y condiciones
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
