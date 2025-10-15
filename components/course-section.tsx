import Image from "next/image"
import Link from "next/link"

interface CourseSectionProps {
  title: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  href?: string
}

// Button styling constants
const BUTTON_CONFIG = {
  paddingX: 35, // px-12
  paddingY: 4, // py-4
  fontSize: "text-xl", // larger font size
  borderRadius: "rounded-xl", // less rounded corners (was rounded-full)
}

export function CourseSection({ title, imageSrc, imageAlt, reverse = false, href = "#" }: CourseSectionProps) {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image with Fade Effect */}
      <div className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
        {/* Gradient Overlay - stronger fade from the content side */}
        <div
          className={`absolute inset-0 ${
            reverse
              ? "bg-gradient-to-l from-white/95 via-white/70 to-transparent"
              : "bg-gradient-to-r from-white/95 via-white/70 to-transparent"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className={`flex items-center h-full ${reverse ? "justify-end" : "justify-start"}`}>
          <div className="max-w-md text-left">
            {/* Title with line above */}
            <div className="inline-block">
              <div className="h-1 w-32 bg-black mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
            </div>

            {/* Button with gradient background */}
            <Link
              href={href}
              className={`inline-block font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap text-left ${BUTTON_CONFIG.fontSize}`}
              style={{
                padding: `${BUTTON_CONFIG.paddingY * 0.25}rem ${BUTTON_CONFIG.paddingX * 0.25}rem`,
                background: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
                boxShadow: "0 4px 15px rgba(132, 204, 22, 0.4)",
                borderRadius: BUTTON_CONFIG.borderRadius === "rounded-xl" ? "0.75rem" : "9999px",
              }}
            >
              Listado de cursos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
