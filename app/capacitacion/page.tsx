"use client"

import Image from "next/image"
import Link from "next/link"

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
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Certificación</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-500">Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
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
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8 relative">
                {/* Decorative Circles - Left Side */}
                <div className="absolute -left-20 top-10"></div>
                <div className="absolute left-32 top-40"></div>

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
                  <h1
                    className="text-6xl font-bold mb-0"
                    style={{
                      background: "linear-gradient(to right, #662686 0%, #084E9F 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Capacitación
                  </h1>
                </div>

                {/* Subtitle with Gradient Background */}
                <div className="inline-block">
                  <div
                    className="text-white px-8 py-3 rounded-lg"
                    style={{
                      background: "linear-gradient(to right, #084E9F 0%, #01A0E1 47.9%, #662686 95.8%)",
                    }}
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

                  <p>
                    Hemos capacitado a más de 40,000 personas, potencializando sus competencias laborales y las
                    respaldamos.
                  </p>
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
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#ffffff" aria-hidden="true">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.04-.851-.175-1.203-.275-1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </div>

              {/* Copyright and Legal Links */}
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

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          16.67% { opacity: 1; }
          83.33% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Seamless infinite scroll animations with no visible restart */
        @keyframes scroll-clients-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }

        @keyframes scroll-partners-right {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-collaborations-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }

        /* Updated animations with triple content for seamless looping */
        .animate-scroll-clients-left {
          animation: scroll-clients-left 15s linear infinite;
          width: fit-content;
        }

        .animate-scroll-partners-right {
          animation: scroll-partners-right 12s linear infinite;
          width: fit-content;
        }

        .animate-scroll-collaborations-left {
          animation: scroll-collaborations-left 10s linear infinite;
          width: fit-content;
        }

        @media (max-width: 768px) {
          .animate-scroll-clients-left {
            animation: scroll-clients-left 20s linear infinite;
          }

          .animate-scroll-partners-right {
            animation: scroll-partners-right 16s linear infinite;
          }

          .animate-scroll-collaborations-left {
            animation: scroll-collaborations-left 13s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}
