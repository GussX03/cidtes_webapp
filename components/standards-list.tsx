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
    <div className="w-full space-y-10">
      {STANDARDS_CATEGORIES.map((category, index) => (
        <div key={index} className="space-y-4">
          <div className={`flex ${category.image ? 'flex-col md:flex-row-reverse gap-8 items-start' : 'flex-col'}`}>
            {/* Content on the LEFT (or on top on mobile) */}
            <div className="flex-1 space-y-4">
              {/* Category Title with white background */}
              <h3
                className="text-3xl md:text-4xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>

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

            {/* Image on the RIGHT if exists (bigger size) */}
            {category.image && (
              <div className="flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full md:w-96 h-72 object-cover rounded-2xl shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
