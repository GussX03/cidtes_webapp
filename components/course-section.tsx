"use client"

import Image from "next/image"
import { useState } from "react"
import { CourseModal } from "./course-modal"
import { courseData } from "@/lib/course-data"

interface CourseSectionProps {
  title: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  courseKey: string
}

// Button styling constants
const BUTTON_CONFIG = {
  paddingX: 35,
  paddingY: 6,
  fontSize: "text-xl",
  borderRadius: "rounded-xl",
}

export function CourseSection({ title, imageSrc, imageAlt, reverse = false, courseKey }: CourseSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const courseInfo = courseData[courseKey]

  return (
    <>
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
          {/* Gradient Overlay */}
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
            <div className="w-full max-w-[55%] sm:max-w-md text-left">
              {/* Title with line above */}
              <div className="inline-block max-w-full">
                <div className="h-1 w-16 sm:w-32 bg-black mb-3 sm:mb-4" />
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">{title}</h2>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap text-sm sm:${BUTTON_CONFIG.fontSize} px-7 py-2.5 sm:px-[8.75rem] sm:py-[1.5rem]`}
                style={{
                  background: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
                  boxShadow: "0 4px 15px rgba(132, 204, 22, 0.4)",
                  borderRadius: "0.75rem",
                }}
              >
                Listado de cursos
              </button>
            </div>
          </div>
        </div>
      </section>

      {courseInfo && (
        <CourseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={courseInfo.title}
          courses={courseInfo.courses}
          headerColor={courseInfo.headerColor}
        />
      )}
    </>
  )
}
