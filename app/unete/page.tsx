"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
  { id: "energia", name: "Energía", icon: "/icons/energia-icon.png" },
  { id: "seguridad", name: "Seguridad y Salud en el Trabajo", icon: "/icons/seguridad-icon.png" },
  { id: "desarrollo-personal", name: "Desarrollo Personal", icon: "/icons/desarrollo-personal-icon.png" },
  { id: "desarrollo-org", name: "Desarrollo Organizacional", icon: "/icons/desarrollo-organizacional-icon.png" },
  { id: "formativo", name: "Formativo", icon: "/icons/formativo-icon.png" },
  { id: "valuacion", name: "Valuación", icon: "/icons/valuacion-icon.png" },
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
  ],
  seguridad: [],
  "desarrollo-personal": [],
  "desarrollo-org": [],
  formativo: [],
  valuacion: [],
}

export default function UnetePage() {
  const [activeCategory, setActiveCategory] = useState<string>("seguridad")

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        {/* Floating Navigation Bar */}
        <div className="sticky top-20 z-30 mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="rounded-2xl shadow-lg p-4 overflow-x-auto"
              style={{
                background: "linear-gradient(90deg, #0293D8 0%, #075EAB 100%)",
              }}
            >
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                        ? "bg-white text-[#075EAB] shadow-md"
                        : "bg-transparent text-white hover:bg-white/20"
                      }`}
                  >
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <span className="font-semibold text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#075EAB] mb-12 text-center">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData[activeCategory].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#075EAB] mb-3">
                    {service.title}
                  </h3>
                  <button className="w-full bg-[#0293D8] hover:bg-[#075EAB] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
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
      </main>

      <Footer />
    </div>
  )
}
