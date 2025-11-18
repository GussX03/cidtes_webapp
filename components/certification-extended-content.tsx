"use client"

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function CertificationExtendedContent() {
  return (
    <div className="w-full space-y-16 py-12">
      

      {/* Section: What is CE/EI */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-4xl font-bold text-[#005BB1] text-center">
          ¿Qué es un Centro de Evaluación (CE) / Evaluador Independiente (EI)?
        </h2>
        <p className="text-lg text-gray-800 text-center leading-relaxed">
          Un CE (persona moral pública o privada) o EI (persona física) autorizados por el CONOCER y acreditada por
          CIDTES ECE0472-21, para evaluar las competencias de las personas.
        </p>

        {/* Flow Diagram */}
        <div className="space-y-6">
          {/* CE Flow */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-bold text-2xl"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              CE
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#8B8B8B" }}
            >
              <div className="text-[#005BB1]">Persona Moral</div>
              <div className="text-xs text-gray-600">(Pública/Privada)</div>
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              <div>Acreditada por</div>
              <div className="font-bold">CONOCER y CIDTES</div>
            </div>
          </div>

          {/* EI Flow */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-bold text-2xl"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              EI
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#8B8B8B" }}
            >
              Persona Física
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              <div>Acreditada por</div>
              <div className="font-bold">CONOCER y CIDTES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Benefits */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-4xl font-bold text-[#005BB1]">Beneficios de convertirte en un CE/EI:</h2>
        <ul className="space-y-3 text-lg text-gray-800">
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Generar una nueva línea de negocios</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Aumentar tus ingresos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Promover la profesionalización de tus clientes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Acreditar la experiencia laboral de tus clientes con reconocimiento oficial</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Respaldar tus capacitaciones con Certificación Oficial SEP-CONOCER</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Oportunidad para registrarte como Agente Capacitador Externo de la STPS y extender constancias DC-3 de tus cursos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Ofrecer capacitación continua para las empresas y sus trabajadores</span>
          </li>
        </ul>
        <div className="flex justify-center pt-6">
          <button className="px-8 py-3 rounded-lg font-semibold text-white bg-[#0369A1] hover:bg-[#0251A0] transition-all duration-300 hover:shadow-lg">
            Más información
          </button>
        </div>
      </div>

      {/* Section: How to do it */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#005BB1] text-center mb-8">
          ¿Quieres saber cómo? Integra tu expediente:
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* CE Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#005BB1]">Centro de Evaluación (CE)</h3>
            <ul className="space-y-3 text-gray-800 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                <span>Firma de convenio de colaboración para la acreditación y operación como CE</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                <span>Copia del Acta Constitutiva o Decreto de creación y sus modificaciones en su caso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">3.</span>
                <span>Constancia de Situación Fiscal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">4.</span>
                <span>Copia del Poder del Representante Legal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">5.</span>
                <span>Copia de Identificación del Representante Legal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">6.</span>
                <span>Copia de comprobante de domicilio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">7.</span>
                <span>CV empresarial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">8.</span>
                <span>Comprobar documentalmente la existencia o acceso a infraestructura administrativa y de equipamiento para realizar las funciones como CE en congruencia con los estándares de Competencia Laboral que solicita.</span>
              </li>
            </ul>
          </div>

          {/* EI Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#005BB1]">Evaluador Independiente (EI)</h3>
            <ul className="space-y-3 text-gray-800 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                <span>Firma de convenio de colaboración para la acreditación y operación como EI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                <span>CV</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">3.</span>
                <span>Constancia de Situación Fiscal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">4.</span>
                <span>Copia de Identificación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">5.</span>
                <span>Copia de comprobante de domicilio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">6.</span>
                <span>Comprobar documentalmente la existencia o acceso a infraestructura administrativa y de equipamiento para realizar las funciones como CE en congruencia con los estándares de Competencia Laboral que solicita.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-4">
          <h4 className="text-xl font-bold text-[#005BB1]">Para la operación del CE deben tener:</h4>
          <ol className="space-y-3 text-gray-800 text-sm ml-4">
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#005BB1] flex-shrink-0">i.</span>
              <span>Capacidad técnica para la recopilación de evidencias del desempeño laboral en el sitio de trabajo o en situación simulada.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#005BB1] flex-shrink-0">ii.</span>
              <div className="space-y-2">
                <span className="block font-bold">Garantizar la calidad de las evaluaciones:</span>
                <ol className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                    <span>Certificar en el estándar EC0076 "Evaluación de la competencia de candidatos con base en estándares de Competencia", al personal encargado de la evaluación de candidatos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                    <span>Certificarse en el estándar de la función específica que se desea evaluar.</span>
                  </li>
                </ol>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
