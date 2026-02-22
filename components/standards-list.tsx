"use client"

interface StandardCategory {
  title: string
  color: string
  codes: string[]
  image?: string
}

const STANDARDS_CATEGORIES: StandardCategory[] = [
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
    <div className="w-full flex flex-col md:flex-row gap-8">
      {/* Left side - Images only */}
      <div className="flex flex-col gap-6 md:w-1/3">
        <img
          src="/images/gestion-ambiental.png"
          alt="Gestión ambiental"
          className="w-full h-80 object-cover rounded-2xl shadow-xl"
        />
        <img
          src="/images/administracion-contabilidad.png"
          alt="Administración y Contabilidad"
          className="w-full h-80 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Right side - All categories */}
      <div className="flex-1 space-y-8">
        {STANDARDS_CATEGORIES.map((category, index) => (
          <div key={index} className="space-y-3">
            {/* Category Title with white background */}
            <h3
              className="text-3xl md:text-4xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
              style={{ color: category.color }}
            >
              {category.title}
            </h3>

            {/* Standards Pills - WITHOUT white background */}
            <div className="flex flex-wrap gap-3">
              {category.codes.map((code, codeIndex) => (
                <button
                  key={codeIndex}
                  className="px-5 py-2.5 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full text-gray-700 font-medium text-sm hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
