"use client"

import { Mail, Phone, MapPin } from "lucide-react"

type SectionKey = 0 | 1 | 2 | 3

interface CertificationContentProps {
  activeSection: SectionKey | null
}

export default function CertificationContent({ activeSection }: CertificationContentProps) {
  const getBackgroundStyle = () => {
    const colors = {
      0: {
        bg: "#9470DE",
        bgLight: "#f3e8ff",
        accent: "#7c3aed",
        title: "#6B2D8F",
        borderColor: "#9470DE",
        titleBg: "#f3e8ff",
      },
      1: {
        bg: "#74B74A",
        bgLight: "#f0fdf4",
        accent: "#65a30d",
        title: "#4A7C2A",
        borderColor: "#74B74A",
        titleBg: "#f0fdf4",
      },
      2: {
        bg: "#005BB1",
        bgLight: "#eff6ff",
        accent: "#0369a1",
        title: "#003D7A",
        borderColor: "#005BB1",
        titleBg: "#eff6ff",
      },
      3: {
        bg: "#13D4CB",
        bgLight: "#f0fdfa",
        accent: "#0891b2",
        title: "#0A8B82",
        borderColor: "#13D4CB",
        titleBg: "#f0fdfa",
      },
    }
    return colors[activeSection || 0]
  }

  const style = getBackgroundStyle()

  if (activeSection === null) {
    return (
      <div className="flex flex-col items-end justify-center min-h-screen">
        <div className="text-right space-y-2">
          <h2 className="text-6xl font-bold text-gray-600" style={{ fontWeight: 700 }}>
            Interactúa con el
          </h2>
          <p className="text-6xl font-bold text-gray-600" style={{ fontWeight: 700 }}>
            círculo CIDTES
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-start min-h-screen space-y-8 pr-4 pt-12 pb-12">
      {/* Title */}
      <h2 className="text-5xl font-bold leading-tight" style={{ color: style.title }}>
        {activeSection === 0 && "¿Qué es el CONOCER?"}
        {activeSection === 1 && "Proceso de Evaluación y Certificación"}
        {activeSection === 2 && "¿Dónde puedo certificarme?"}
        {activeSection === 3 && "Estándares ofertados"}
      </h2>

      {/* Content Boxes - Improved styling with solid backgrounds, better contrast */}
      <div className="space-y-4 pr-2">
        {activeSection === 0 && (
          <>
            {/* Main intro box */}
            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <p className="text-base text-gray-800 leading-relaxed">
                <span className="font-bold" style={{ color: style.title }}>
                  El Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER)
                </span>{" "}
                es una entidad paraestatal sectorizada de la Secretaría de Educación Pública (SEP),{" "}
                <span className="font-bold">
                  conformado por un órgano de gobierno tripartita con representantes de los trabajadores, los
                  empresarios y el gobierno.
                </span>
              </p>
            </div>

            {/* Info boxes */}
            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: style.title }}>
                ¿Qué es un estándar de competencia?
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Es un <span className="font-bold">documento oficial</span> aplicable en toda la República Mexicana que
                sirve de <span className="font-bold">referencia para evaluar y certificar</span> la competencia de las
                personas.
              </p>
            </div>

            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: style.title }}>
                ¿Qué es la Certificación de Competencia Laboral?
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                La certificación de competencias <span className="font-bold">es el proceso</span> a través del cual las
                personas{" "}
                <span className="font-bold">
                  demuestran por medio de evidencias: los conocimientos, habilidades y destrezas.
                </span>
              </p>
            </div>
          </>
        )}

        {activeSection === 1 && (
          <>
            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <p className="text-base text-gray-800 leading-relaxed">
                <span className="font-bold" style={{ color: style.title }}>
                  El proceso de evaluación y certificación
                </span>{" "}
                es una entidad paraestatal sectorizada de la Secretaría de Educación Pública (SEP),{" "}
                <span className="font-bold">
                  conformado por un órgano de gobierno tripartita con representantes de los trabajadores, los
                  empresarios y el gobierno.
                </span>
              </p>
            </div>

            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: style.title }}>
                ¿Qué es un estándar de competencia?
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                La certificación de competencias <span className="font-bold">es el proceso</span> a través del cual las
                personas <span className="font-bold">demuestran</span> por medio de evidencias: los conocimientos,
                habilidades y destrezas.
              </p>
            </div>
          </>
        )}

        {activeSection === 2 && (
          <>
            <p
              className="text-xs font-semibold mb-4 bg-white px-3 py-2 rounded-lg inline-block"
              style={{ color: style.accent }}
            >
              Estándares ofertados: EC0076, EC0865, EC1182
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Centro de Evaluación AUTODINERO",
                  contact: "Brenda Martínez",
                  email: "enlace@autodinero.com",
                  phone: "55 1670 1050 Ext. 1090",
                  address: "Calle Pennsylvania #127, Parque San Andrés Coyoacán, C.P. 04040, CDMX",
                },
                {
                  name: "Centro de Evaluación SEVAC",
                  contact: "Lauro Romero Martónez",
                  email: "ventas@centrosevac.com",
                  phone: "818 687 5499",
                  address: "Guerrero Norte #1003, Col. Centro, C.P.64000, Monterrey, Nuevo León",
                  standards: "EC0076, EC0865, EC0664, EC1182, EC1306",
                },
              ].map((center, idx) => (
                <div key={idx}>
                  {idx === 1 && center.standards && (
                    <p
                      className="text-xs font-semibold mb-4 bg-white px-3 py-2 rounded-lg inline-block"
                      style={{ color: style.accent }}
                    >
                      Estándares ofertados: {center.standards}
                    </p>
                  )}
                  <div
                    className="border-l-4 px-6 py-5 rounded-xl shadow-md overflow-hidden"
                    style={{
                      borderColor: style.borderColor,
                      backgroundColor: "white",
                      borderLeftWidth: "6px",
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{center.name}</h3>
                        <p className="text-xs text-gray-700 font-semibold mb-3">{center.contact}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Mail size={16} style={{ color: style.accent, flexShrink: 0 }} />
                            <a href={`mailto:${center.email}`} className="text-xs text-gray-700 hover:underline">
                              {center.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone size={16} style={{ color: style.accent, flexShrink: 0 }} />
                            <span className="text-xs text-gray-700">{center.phone}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin size={16} style={{ color: style.accent, marginTop: "2px", flexShrink: 0 }} />
                            <span className="text-xs text-gray-700">{center.address}</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                        <img
                          src="/images/design-mode/image(1).png"
                          alt="Location map"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: style.accent }}
              >
                Ilma
              </button>
              <button
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: style.accent }}
              >
                José Luis
              </button>
              <button
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: style.accent }}
              >
                CIDTES
              </button>
            </div>
          </>
        )}

        {activeSection === 3 && (
          <div className="space-y-16 pb-8">
            {/* Formativo Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Formativo
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {["EC0076", "EC0217.01", "EC0301", "EC0366"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Valuación Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Valuación
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {["EC0664", "EC0865", "EC1182", "EC1306"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Energía Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Energía
              </h3>
              <div className="grid grid-cols-5 gap-4 mt-6">
                {["EC0412", "EC0413", "EC0416", "EC0431", "EC0414"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* S. Salud en el Trabajo Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                S. Salud en el Trabajo
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {["EC0391.01", "EC0493", "EC0397.01", "EC0680"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Gestión Ambiental Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Gestión Ambiental
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {["EC0490", "EC0517", "EC1543"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Administración-Contabilidad Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Administración-Contabilidad
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {["EC1017", "EC1018"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Manufactura Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Manufactura
              </h3>
              <div className="grid grid-cols-1 gap-4 mt-6">
                {["EC0467"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Sustancias Químicas Section */}
            <div className="space-y-4">
              <h3
                className="text-4xl font-bold pb-3 border-b-4 inline-block"
                style={{
                  color: "#0891b2",
                  borderColor: "#0891b2",
                }}
              >
                Sustancias Químicas
              </h3>
              <div className="grid grid-cols-1 gap-4 mt-6">
                {["EC1022"].map((code) => (
                  <div
                    key={code}
                    className="px-4 py-3 rounded-lg text-sm font-bold text-center shadow-lg border-2 hover:shadow-xl transition-shadow"
                    style={{
                      borderColor: "#0891b2",
                      color: "#0891b2",
                      backgroundColor: "#f0fdfa",
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            {/* Images Section - Below all standards */}
            <div className="space-y-6 mt-12 pt-8 border-t-2" style={{ borderColor: "#0891b2" }}>
              <h3 className="text-xl font-bold text-gray-800">Galería de Estándares</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "#0891b2" }}>
                  <img
                    src="/images/design-mode/image(1).png"
                    alt="Formativo"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "#0891b2" }}>
                  <img
                    src="/images/design-mode/image(1).png"
                    alt="Valuación"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
