"use client"

import { X, FileText } from "lucide-react"
import { useEffect } from "react"

interface Course {
  number: string
  name: string
}

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  courses: Course[]
  headerColor: string
}

export function CourseModal({ isOpen, onClose, title, courses }: CourseModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const midpoint = Math.ceil(courses.length / 2)
  const leftColumn = courses.slice(0, midpoint)
  const rightColumn = courses.slice(midpoint)
  const maxRows = Math.max(leftColumn.length, rightColumn.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div
          className="px-6 py-5 shadow-lg"
          style={{ background: "linear-gradient(to right, #084E9F 0%, #01A0E1 47.9%, #662686 95.8%)" }}
        >
          <h2 className="text-xl sm:text-4xl font-bold text-white text-center tracking-tight drop-shadow-md pr-8">{title}</h2>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-3 sm:p-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Mobile: single column */}
            <div className="block sm:hidden">
              {courses.map((course, i) => (
                <div key={i} className="flex items-stretch border-b border-gray-200 last:border-b-0 hover:bg-blue-50/50 transition-colors">
                  <div className="px-3 py-3 text-white font-bold text-center w-10 flex-shrink-0 flex items-center justify-center border-r border-blue-400 text-sm" style={{ background: "#084E9F" }}>
                    {course.number}
                  </div>
                  <div className="px-3 py-3 text-gray-800 font-medium text-sm leading-relaxed flex items-center justify-between gap-2 flex-1">
                    <span>{course.name}</span>
                    <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: two-column table */}
            <table className="w-full hidden sm:table">
              <tbody>
                {Array.from({ length: maxRows }).map((_, rowIndex) => {
                  const leftCourse = leftColumn[rowIndex]
                  const rightCourse = rightColumn[rowIndex]
                  return (
                    <tr key={rowIndex} className="border-b border-gray-200 last:border-b-0 hover:bg-blue-50/50 transition-colors duration-150">
                      {leftCourse ? (
                        <>
                          <td className="px-5 py-5 text-white font-bold text-center w-16 border-r border-blue-400" style={{ background: "#084E9F" }}>
                            <span className="text-lg">{leftCourse.number}</span>
                          </td>
                          <td className="px-6 py-5 text-gray-800 font-medium border-r-2 border-gray-200 text-[15px] leading-relaxed">
                            <div className="flex items-center justify-between gap-3">
                              <span>{leftCourse.name}</span>
                              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
                            </div>
                          </td>
                        </>
                      ) : (
                        <td colSpan={2} className="px-6 py-5 border-r-2 border-gray-200 bg-gray-50/30"></td>
                      )}
                      {rightCourse ? (
                        <>
                          <td className="px-5 py-5 text-white font-bold text-center w-16 border-r border-blue-400" style={{ background: "#084E9F" }}>
                            <span className="text-lg">{rightCourse.number}</span>
                          </td>
                          <td className="px-6 py-5 text-gray-800 font-medium text-[15px] leading-relaxed">
                            <div className="flex items-center justify-between gap-3">
                              <span>{rightCourse.name}</span>
                              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
                            </div>
                          </td>
                        </>
                      ) : (
                        <td colSpan={2} className="px-6 py-5 bg-gray-50/30"></td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
