"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Standard {
  code: string
  title: string
  description: string
  image: string
  category: string
}

const STANDARDS_BY_CATEGORY: Record<string, Standard[]> = {
  Formativo: [
    {
      code: "EC0076",
      title: "Evaluación de la competencia de candidatos",
      description: "Evaluación de la competencia de candidatos con base en estándares de Competencia",
      image: "/images/formativo-1-magnifying.png",
      category: "Formativo",
    },
    {
      code: "EC0217.01",
      title: "Impartición de cursos de formación",
      description: "Impartición de cursos de formación del capital humano de manera presencial grupal",
      image: "/images/formativo-2-training.png",
      category: "Formativo",
    },
    {
      code: "EC0301",
      title: "Diseño de cursos de formación",
      description: "Diseño de cursos de formación del capital humano de acuerdo con la evaluación y necesidades",
      image: "/images/formativo-3-online.png",
      category: "Formativo",
    },
    {
      code: "EC0366",
      title: "Desarrollo de cursos en línea",
      description: "Desarrollo de cursos de formación en línea",
      image: "/images/formativo-4-video.png",
      category: "Formativo",
    },
  ],
  Valuación: [
    {
      code: "EC0664",
      title: "Valuación de ahorros y riesgos",
      description: "Valuación de ahorros y riesgos en ventanilla",
      image: "/images/valuacion-1-tools.png",
      category: "Valuación",
    },
    {
      code: "EC0865",
      title: "Valuación de artículos",
      description: "Valuación de artículos usados en ventanilla",
      image: "/images/valuacion-2-watch.png",
      category: "Valuación",
    },
    {
      code: "EC1182",
      title: "Valuación de vehículos",
      description: "Valuación de vehículos sin resguardo",
      image: "/images/valuacion-3-car.png",
      category: "Valuación",
    },
    {
      code: "EC1306",
      title: "Estimación del valor de alhajas",
      description: "Estimación del valor de alhajas y gemas de acuerdo con el propósito, uso y finalidad",
      image: "/images/valuacion-4-analysis.png",
      category: "Valuación",
    },
  ],
}

interface CategoryCarouselProps {
  category: string
  standards: Standard[]
  categoryColor: string
}

function CategoryCarousel({ category, standards, categoryColor }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % standards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, standards.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + standards.length) % standards.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % standards.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const current = standards[currentIndex]

  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: categoryColor }}>
        {category}
      </h2>

      <div className="relative w-full">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Image Section - Full width on mobile, 60% on desktop */}
            <div className="w-full lg:w-3/5 flex-shrink-0">
              <div className="relative w-full aspect-video lg:aspect-auto lg:h-96 rounded-xl overflow-hidden shadow-md">
                <img
                  src={current.image || "/placeholder.svg?height=400&width=600&query=estándar"}
                  alt={current.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(current.title)}`
                  }}
                />
              </div>
            </div>

            {/* Content Section - Full width on mobile, 40% on desktop */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between space-y-4 lg:space-y-6">
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{current.category}</p>
                  <p
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 lg:mt-3"
                    style={{ color: categoryColor }}
                  >
                    {current.code}
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 lg:mt-3 leading-relaxed line-clamp-4">
                    {current.description}
                  </p>
                </div>
              </div>

              <button
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all text-white w-full"
                style={{
                  backgroundColor: categoryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1"
                }}
              >
                Más información
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 lg:p-3 rounded-full hover:bg-gray-100 transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} style={{ color: categoryColor }} className="lg:w-8 lg:h-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 lg:p-3 rounded-full hover:bg-gray-100 transition-all"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} style={{ color: categoryColor }} className="lg:w-8 lg:h-8" />
        </button>
      </div>

      {/* Indicators Dots */}
      <div className="flex justify-center items-center gap-3">
        {standards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 h-3" : "w-3 h-3"}`}
            style={{
              backgroundColor: index === currentIndex ? categoryColor : "#e5e7eb",
            }}
            aria-label={`Ir a estándar ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function StandardsCarousel() {
  return (
    <div className="w-full space-y-12 lg:space-y-20 max-w-7xl mx-auto px-4">
      <CategoryCarousel category="Formativo" standards={STANDARDS_BY_CATEGORY.Formativo} categoryColor="#0891b2" />

      <div className="border-t-2 border-gray-200 py-8 lg:py-16" />

      <CategoryCarousel category="Valuación" standards={STANDARDS_BY_CATEGORY.Valuación} categoryColor="#0891b2" />
    </div>
  )
}
