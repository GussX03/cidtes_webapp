"use client"

interface StandardCategory {
  title: string
  color: string
  codes: string[]
  image?: string
}

const STANDARDS_CATEGORIES: StandardCategory[] = [
  {
    title: "Formativo",
    color: "#5DCCCC",
    codes: ["EC0076", "EC0217.01", "EC0301", "EC0366"],
  },
  {
    title: "Valuación",
    color: "#5DCCCC",
    codes: ["EC0664", "EC0865", "EC1182", "EC1306"],
  },
  {
    title: "Energía",
    color: "#5DCCCC",
    codes: ["EC0412", "EC0413", "EC0416", "EC0431", "EC0414"],
  },
  {
    title: "S.Salud en el",
    color: "#5DCCCC",
    codes: ["EC0330101", "EC0493", "EC0309701", "EC0680"],
  },
  {
    title: "Gestión ambiental",
    color: "#5DCCCC",
    codes: ["EC0490", "EC0517", "EC1543"],
    image: "/images/gestion-ambiental.png",
  },
  {
    title: "Administración-Contabilidad",
    color: "#5DCCCC",
    codes: ["EC1017", "EC1018"],
    image: "/images/administracion-contabilidad.png",
  },
  {
    title: "Manufactura",
    color: "#5DCCCC",
    codes: ["EC0467"],
  },
  {
    title: "Sustancias químicas",
    color: "#5DCCCC",
    codes: ["EC1022"],
  },
]

export default function StandardsList() {
  return (
    <div className="w-full space-y-8">
      {STANDARDS_CATEGORIES.map((category, index) => (
        <div key={index} className="space-y-4">
          {/* Category Title */}
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ color: category.color }}
          >
            {category.title}
          </h3>

          {/* Category Image if exists */}
          {category.image && (
            <div className="mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-64 h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Standards Pills */}
          <div className="flex flex-wrap gap-3">
            {category.codes.map((code, codeIndex) => (
              <button
                key={codeIndex}
                className="px-5 py-2.5 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-medium text-sm hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
