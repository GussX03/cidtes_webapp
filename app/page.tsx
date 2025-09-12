"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredCommitment, setHoveredCommitment] = useState<string | null>(null)
  const [currentLetter, setCurrentLetter] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState("")

  const carouselImages = [
    "/images/eficiencia-energetica.jpg",
    "/images/certificacion-valuadores.jpg",
    "/images/seguridad-salud.webp",
    "/images/gestion-ambiental.jpg",
  ]

  const commitments = [
    {
      id: "social",
      title: "Desarrollo Social",
      icon: "/images/desarrollo-social.png",
      description:
        "Fomentar la educación y valores en comunidades para reducir desigualdades, pobreza y promover la equidad de género.",
    },
    {
      id: "economico",
      title: "Desarrollo Económico",
      icon: "/images/desarrollo-economico.png",
      description:
        "Impulsar soluciones que fortalezcan a organizaciones y empresas en calidad, innovación y empleo digno para contribuir al crecimiento económico.",
    },
    {
      id: "ambiental",
      title: "Desarrollo Ambiental",
      icon: "/images/desarrollo-ambiental.png",
      description:
        "Promover energía limpia y consumos responsables para optimizar recursos naturales y mitigar el cambio climático.",
    },
  ]

  const cidtesLetters = [
    { letter: "C", meaning: "Calidad", position: 0 },
    { letter: "I", meaning: "Integridad", position: 1 },
    { letter: "D", meaning: "Dedicación", position: 2 },
    { letter: "T", meaning: "Trabajo en Equipo", position: 3 },
    { letter: "E", meaning: "Equidad", position: 4 },
    { letter: "S", meaning: "Servicio", position: 5 },
    { letter: "C", meaning: "Compromiso Social", position: 0 }, // Segunda C en la misma posición
  ]

  const displayLetters = ["C", "I", "D", "T", "E", "S"] // Solo para mostrar las 6 letras

  const clients = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.jpg",
    "6.png",
    "7.svg",
    "8.png",
    "9.png",
    "10.jpg",
    "11.jpeg",
    "12.jpeg",
    "13.png",
    "14.jpeg",
    "15.png",
  ]

  const partners = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.jpg",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.webp",
    "13.jpeg",
  ]

  const collaborations = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.png", "8.jpg"]

  // Create repeated arrays for infinite scroll effect
  const repeatedClients = [...clients, ...clients]
  const repeatedPartners = [...partners, ...partners]
  const repeatedCollaborations = [...collaborations, ...collaborations]


  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [carouselImages.length])

  // Auto-advance CIDTES letters
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLetter((prev) => (prev + 1) % cidtesLetters.length)
    }, 3000) // Keep at 3000ms total

    return () => clearInterval(timer)
  }, [cidtesLetters.length])

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalImage("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src="/images/logo-simple.png" alt="CIDTES Logo" width={80} height={40} className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex items-center">
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">CIDTES</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">Capacitación</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">Certificación</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">Investigación y Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link
                href="#"
                className="relative text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-500 hover:text-white group overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors duration-75">Únete</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 rounded-lg shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1] via-[#0891B2] to-[#059669] opacity-20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-lg blur-sm"></div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* ¿Quiénes somos? Section */}
        <section className="py-16 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            {/* Leaf Background Elements for Quienes Somos */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-10">
                <Image
                  src="/images/leaf-background.png"
                  alt="Decorative leaves"
                  width={384}
                  height={384}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-16 translate-y-10 transform rotate-180">
                <Image
                  src="/images/leaf-background.png"
                  alt="Decorative leaves"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex justify-center leading-7 mb-8">
                  <Image src="/images/cidtes-logo.png" alt="CIDTES" width={400} height={160} className="h-32 w-auto" />
                </div>

                <div className="bg-[#385CAF] text-white p-4 text-center py-1.5 px-3 h-12 rounded mx-20 w-10/12 flex items-center justify-center">
                  <h2 className="font-medium font-sans leading-9 text-3xl text-white">¿Quiénes somos?</h2>
                </div>

                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p className="font-semibold mx-0 my-0 px-20 text-justify">
                    Iniciamos operaciones formalmente en 2010 y nuestros expertos cuentan como más de 20 años de
                    experiencia.
                  </p>

                  <p className="px-20">
                    Somos una <span className="font-semibold">organización interdisciplinaria que brinda</span>{" "}
                    soluciones integrales en energía, sustentabilidad, seguridad y salud en el trabajo y desarrollo
                    organizacional.
                  </p>

                  <p className="px-20">
                    <span className="font-semibold">Promoviendo</span> la capacitación, la certificación, la
                    investigación, el desarrollo tecnológico y la implementación de proyectos para mejores prácticas.
                  </p>
                </div>
              </div>

              {/* Right Content - Carousel */}
              <div className="relative">
                <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-xl">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`${index === currentSlide ? "block" : "hidden"} transition-opacity duration-1000 cursor-pointer`}
                      onClick={() => openModal(carouselImages[currentSlide])}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        {/* Nuestros Compromisos Section */}
        <section className="py-20 relative overflow-hidden bg-gray-50">
          {/* Leaf Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {/* Large central leaf covering most of the background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <Image
                src="/images/leaf-background.png"
                alt="Decorative leaves"
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Additional smaller leaves for texture */}
            <div className="absolute top-10 right-10 w-96 h-96 transform rotate-45">
              <Image
                src="/images/leaf-background.png"
                alt="Decorative leaves"
                width={384}
                height={384}
                className="w-full h-full object-contain opacity-60"
              />
            </div>
            <div className="absolute bottom-20 left-10 w-80 h-80 transform -rotate-45">
              <Image
                src="/images/leaf-background.png"
                alt="Decorative leaves"
                width={320}
                height={320}
                className="w-full h-full object-contain opacity-60"
              />
            </div>
          </div>

          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white overflow-hidden">
              <Image
                src="/images/wave-separator.png"
                alt="Wave separator"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="container mx-auto relative z-10 my-20 px-4">
            <div className="text-left mb-16">
              <div className="inline-block">
                <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Nuestros Compromisos
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {commitments.map((commitment) => (
                <div
                  key={commitment.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredCommitment(commitment.id)}
                  onMouseLeave={() => setHoveredCommitment(null)}
                >
                  <div className="relative group">
                    <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[400px] flex flex-col justify-between border border-white/20 bg-[rgba(244,244,244,1)] overflow-hidden">
                      <div className="text-center flex-1 flex flex-col justify-center items-center">
                        <div className="flex justify-center mb-6">
                          <div className="w-40 flex items-center justify-center h-40">
                            <Image
                              src={commitment.icon || "/placeholder.svg"}
                              alt={commitment.title}
                              width={160}
                              height={160}
                              className="w-40 h-40"
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <div
                            className="inline-block text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                            style={{
                              background: "linear-gradient(to right, #5A9E59, #01A0E1)",
                              borderRadius: "99.67px",
                              border: "2.93px solid transparent",
                            }}
                          >
                            {commitment.title}
                          </div>
                        </div>
                      </div>

                      {/* Overlay que aparece al hacer hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-teal-800/95 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-center">
                          <div className="mb-4">
                            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                              <Image
                                src={commitment.icon || "/placeholder.svg"}
                                alt={commitment.title}
                                width={64}
                                height={64}
                                className="w-16 h-16 opacity-80"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
                          </div>
                          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                            <p className="text-white/90 text-sm leading-relaxed">{commitment.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* Misión y Visión Section */}
        <section className="relative overflow-hidden h-[500px] sm:h-[600px] lg:h-[800px]">
        
          {/* Solar Panels Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/solar-panels.jpg" alt="Solar panels field" fill className="object-cover" />
            <div
              className="absolute bottom-0 left-0 right-0 h-3/5 sm:h-1/2 lg:h-1/3"
              style={{ background: "linear-gradient(to right, #652686, #084E9F)", opacity: "0.92" }}
            ></div>
          </div>

          <div className="relative z-10 flex items-end h-full py-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12 lg:pb-16 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto relative">
                {/* Línea separadora */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 transform -translate-x-1/2 hidden md:block"></div>

                {/* Misión */}
                <div className="text-center px-2 sm:px-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Misión</h2>
                  <p className="text-white leading-relaxed text-xs sm:text-sm lg:text-base px-1 sm:px-2">
                    <span className="font-bold">Promover</span> la investigación, la innovación y el desarrollo de
                    proyectos en temas de energía, sustentabilidad y seguridad y salud en el trabajo, así como{" "}
                    <span className="font-bold">fomentar</span> el desarrollo de capacidades, la asesoría técnica
                    especializada y el fortalecimiento de la cultura.
                  </p>
                </div>

                {/* Visión */}
                <div className="text-center px-2 sm:px-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Visión</h2>
                  <p className="text-white leading-relaxed text-xs sm:text-sm lg:text-base px-1 sm:px-2">
                    <span className="font-bold">Ser líder en soluciones sustentables</span>, conformando un grupo de
                    expertos que actúe como agente de cambio en México.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>

        {/* CIDTES Animated Section */}
        <section className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/cidtes-background.jpg" alt="CIDTES background" fill className="object-cover" />
            {/* Blur overlay instead of blue */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              {/* Line above title */}
              <div className="w-16 sm:w-24 lg:w-32 h-1 bg-white mx-auto mb-3 sm:mb-4"></div>

              {/* Nuestros Compromisos Title */}
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 tracking-wide"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.8)" }}
              >
                Nuestros Compromisos
              </h2>

              {/* CIDTES Letters - Much larger */}
              <div className="flex justify-center items-center mb-4">
                {displayLetters.map((letter, index) => (
                  <span
                    key={index}
                    className={`text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-black transition-all duration-700 ${
                      cidtesLetters[currentLetter].position === index ? "drop-shadow-lg" : "text-white drop-shadow-lg"
                    }`}
                    style={{
                      color: cidtesLetters[currentLetter].position === index ? "#acff39ff" : "white",
                      textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Current Letter Meaning with line below */}
              <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
                <p
                  key={currentLetter}
                  className="text-white text-xl sm:text-3xl lg:text-5xl font-semibold tracking-wider mb-2 sm:mb-4 animate-pulse"
                  style={{
                    animation: "fadeInOut 3s ease-in-out infinite",
                  }}
                >
                  {cidtesLetters[currentLetter].meaning}
                </p>
                {/* Line below meaning */}
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white mt-2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Wave Separator */}
        <div className="h-16 bg-white relative overflow-hidden">
          <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center" />
        </div>
                {/* Video Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          {/* Leaf Plant Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-32 w-[800px] h-[800px]">
              <Image
                src="/images/leaf-plant.png"
                alt="Decorative plant"
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center">
              {/* Video container with title positioned relative to it */}
              <div className="relative w-[95%] mx-auto">
                {/* Title - Aligned with video left edge */}
                <div className="text-left mb-8">
                  <div className="inline-block">
                    <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                    <h2
                      className="text-4xl font-extrabold bg-clip-text text-transparent"
                      style={{
                        background: "linear-gradient(to right, #662686, #01A0E1)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Nuestros Compromisos
                    </h2>
                  </div>
                </div>

                {/* Video */}
                <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/3z9jZhDisIA"
                      title="PRESENTACIÓN CIDTES"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
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
        <section className="bg-gray-50 relative overflow-hidden leading-7 tracking-normal py-12">
          <div className="max-w-5xl mx-auto px-4 pr-4 pt-0 pb-9">
            {/* Clients Carousel */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#397383] mb-4">Nuestra Cartera de Clientes</h2>
              </div>
              <div className="relative overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <div className="flex animate-scroll-clients-left transform-gpu will-change-transform">
                  {repeatedClients.map((client, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                      <div className="w-40 h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                        <Image
                          src={`/images/home/clients/${client}`}
                          alt="Client logo"
                          width={150}
                          height={70}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Partners Carousel */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#397383] mb-4">Alianzas Estratégicas</h2>
              </div>
              <div className="relative overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <div className="flex animate-scroll-partners-right transform-gpu will-change-transform">
                  {repeatedPartners.map((partner, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                      <div className="w-40 h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                        <Image
                          src={`/images/home/partners/${partner}`}
                          alt="Partner logo"
                          width={150}
                          height={70}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Collaborations Carousel */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#397383] mb-4">Colaboraciones</h2>
              </div>
              <div className="relative overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <div className="flex animate-scroll-collaborations-left transform-gpu will-change-transform">
                  {repeatedCollaborations.map((collaboration, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                      <div className="w-40 h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                        <Image
                          src={`/images/home/collaborations/${collaboration}`}
                          alt="Collaboration logo"
                          width={150}
                          height={70}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wave Separator at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white overflow-hidden">
            <Image src="/images/wave-separator.png" alt="Wave separator" fill className="object-cover object-center py-0" />
          </div>
        </section>

        {/* Modal for enlarged image */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black font-bold hover:bg-gray-200 transition-colors z-10"
              >
                ×
              </button>
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={modalImage || "/placeholder.svg"}
                  alt="Enlarged view"
                  width={800}
                  height={600}
                  className="object-contain max-h-[80vh] w-auto"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          16.67% { opacity: 1; }
          83.33% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Updated animations for faster speed and correct directions */
        @keyframes scroll-clients-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-partners-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-collaborations-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-clients-left {
          animation: scroll-clients-left 10s linear infinite;
        }

        .animate-scroll-partners-right {
          animation: scroll-partners-right 8s linear infinite;
        }

        .animate-scroll-collaborations-left {
          animation: scroll-collaborations-left 6s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-clients-left {
            animation: scroll-clients-left 15s linear infinite;
          }

          .animate-scroll-partners-right {
            animation: scroll-partners-right 13s linear infinite;
          }

          .animate-scroll-collaborations-left {
            animation: scroll-collaborations-left 10s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}
