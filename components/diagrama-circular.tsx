"use client"

import { useMemo, useState } from "react"

/** util clases */
function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ")
}

/* =============== Geometría =============== */
const deg2rad = (deg: number) => (Math.PI / 180) * deg
/** 0° arriba (SVG tiene 0° a la derecha) */
const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = deg2rad(deg - 90)
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

/** Rebanada (sector) */
const sectorPath = (cx: number, cy: number, r: number, start: number, end: number) => {
  const a1 = start
  let a2 = end
  while (a2 < a1) a2 += 360
  const largeArc = a2 - a1 > 180 ? 1 : 0
  const p1 = polar(cx, cy, r, a1)
  const p2 = polar(cx, cy, r, a2)
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 1 ${p2.x} ${p2.y} Z`
}

/** Banda anular con **extremos redondeados** (cápsula a lo largo de un arco) */
const roundedBandPath = (cx: number, cy: number, innerR: number, outerR: number, start: number, end: number) => {
  const a1 = start
  let a2 = end
  while (a2 < a1) a2 += 360
  const largeArc = a2 - a1 > 180 ? 1 : 0
  const i1 = polar(cx, cy, innerR, a1)
  const i2 = polar(cx, cy, innerR, a2)
  const o2 = polar(cx, cy, outerR, a2)
  const o1 = polar(cx, cy, outerR, a1)
  const capR = (outerR - innerR) / 2 // radio de las "tapas" redondeadas

  // Los arcos de las tapas ahora son explícitamente semicírculos de 180° (sweep-flag=1, large-arc-flag=0)
  return `
    M ${i1.x} ${i1.y}
    A ${innerR} ${innerR} 0 ${largeArc} 1 ${i2.x} ${i2.y}
    A ${capR} ${capR} 0 0 1 ${o2.x} ${o2.y}
    A ${outerR} ${outerR} 0 ${largeArc} 0 ${o1.x} ${o1.y}
    A ${capR} ${capR} 0 0 1 ${i1.x} ${i1.y}
    Z
  `
}

/* =============== Layout =============== */
const W = 600
const H = 600
const CX = W / 2
const CY = H / 2

// Anillo blanco (delgado) y gráfico interno
const RING_OUTER = 180 // borde externo del anillo blanco
const WHEEL_R = 178 // radio de los 3 sectores (=> anillo blanco ≈ 12px)

const BAND_SEPARATION = 22 // Separación entre el anillo blanco y las bandas externas
const BAND_THICKNESS = 32 // Grosor de cada banda

const TAB_INNER = RING_OUTER + BAND_SEPARATION
const TAB_OUTER = TAB_INNER + BAND_THICKNESS

const BAND_SIZES = {
  capacitacion: 50,
  estudios: 130,
  consultoria: 50,
  proyectos: 50,
  certificacion: 70,
}

// 0° = arriba, 90° = derecha, 180° = abajo, 270° = izquierda
const BAND_ANGLES = {
  capacitacion: 0, // Arriba
  estudios: 95, // Izquierda-abajo (extendido hacia la izquierda)
  consultoria: 185, // Abajo
  proyectos: 240, // Izquierda
  certificacion: 300, // Izquierda-arriba
}

const SECTOR_LAYOUT = {
  seguridad: {
    iconRadius: 95, // Radio donde se posiciona el icono
    textRadius: 138, // Radio donde se posiciona el texto
    iconSize: 35, // Tamaño del icono en px
    fontSize: 17, // Tamaño de fuente
    lineSpacing: 18, // Espaciado entre líneas de texto
  },
  sustentabilidad: {
    iconRadius: 105,
    textRadius: 148,
    iconSize: 34,
    fontSize: 19,
    lineSpacing: 0, // Texto en una sola línea
  },
  energia: {
    iconRadius: 80, // Icono más cerca del centro
    textRadius: 120, // Texto más hacia afuera
    iconSize: 35,
    fontSize: 19,
    lineSpacing: 0, // Texto en una sola línea
  },
}

type Tab = {
  id: string
  title: string
  color: string
  angle: number // ángulo central (0° arriba, horario)
  span: number // longitud angular de la pestaña
  z?: number // z-order (dibujo)
}

const tabs: Tab[] = [
  {
    id: "capacitacion",
    title: "Capacitación",
    color: "#00AEEF",
    angle: BAND_ANGLES.capacitacion,
    span: BAND_SIZES.capacitacion,
    z: 2,
  },
  {
    id: "estudios",
    title: "Estudios e Investigación",
    color: "#005B9A",
    angle: BAND_ANGLES.estudios,
    span: BAND_SIZES.estudios,
    z: 5,
  },
  {
    id: "consultoria",
    title: "Consultoría",
    color: "#4FC3F7",
    angle: BAND_ANGLES.consultoria,
    span: BAND_SIZES.consultoria,
    z: 3,
  },
  {
    id: "proyectos",
    title: "Proyectos",
    color: "#A9DDFF",
    angle: BAND_ANGLES.proyectos,
    span: BAND_SIZES.proyectos,
    z: 1,
  },
  {
    id: "certificacion",
    title: "Certificación",
    color: "#80DEEA",
    angle: BAND_ANGLES.certificacion,
    span: BAND_SIZES.certificacion,
    z: 4,
  },
]

const SECTORS = [
  { id: "seguridad", label: "Seguridad e Higiene", start: 0, end: 120, colorText: "#FFFFFF" },
  { id: "sustentabilidad", label: "Sustentabilidad", start: 120, end: 240, colorText: "#FFFFFF" },
  { id: "energia", label: "Energía", start: 240, end: 360, colorText: "#0A5FA6" },
] as const

export default function DiagramaCircular({ onTabSelect }: { onTabSelect?: (tabId: string | null) => void }) {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null)
  const rotation = selectedTab ? -selectedTab.angle : 0

  /** Pestañas con path redondeado + textPath */
  const tabPaths = useMemo(() => {
    return [...tabs]
      .sort((a, b) => (a.z ?? 0) - (b.z ?? 0)) // z-order deseado (p.ej. Estudios encima)
      .map((tab) => {
        const start = tab.angle - tab.span / 2
        const end = tab.angle + tab.span / 2
        const path = roundedBandPath(CX, CY, TAB_INNER, TAB_OUTER, start, end)

        const midR = (TAB_INNER + TAB_OUTER) / 2
        const textPath =
          `M ${polar(CX, CY, midR, start).x} ${polar(CX, CY, midR, start).y} ` +
          `A ${midR} ${midR} 0 ${end - start > 180 ? 1 : 0} 1 ${polar(CX, CY, midR, end).x} ${polar(CX, CY, midR, end).y}`

        return { ...tab, start, end, path, textPath }
      })
  }, [])

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab)
    onTabSelect?.(tab.id)
  }

  return (
    <div className="relative w-[600px] h-[600px]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))" }}
      >
        <defs>
          {/* Gradientes de los sectores (calcados del look objetivo) */}
          <radialGradient id="energiaGradient" cx="36%" cy="28%">
            <stop offset="0%" stopColor="#C7F0FF" />
            <stop offset="100%" stopColor="#A9DDFF" />
          </radialGradient>
          <radialGradient id="seguridadGradient" cx="70%" cy="30%">
            <stop offset="0%" stopColor="#42B9F4" />
            <stop offset="100%" stopColor="#1F94F0" />
          </radialGradient>
          <radialGradient id="sustentabilidadGradient" cx="48%" cy="80%">
            <stop offset="0%" stopColor="#2C58BC" />
            <stop offset="100%" stopColor="#004C8F" />
          </radialGradient>

          <linearGradient id="capacitacionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0096D6" />
          </linearGradient>
          <linearGradient id="estudiosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#005B9A" />
            <stop offset="100%" stopColor="#004578" />
          </linearGradient>
          <linearGradient id="consultoriaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#29B6F6" />
          </linearGradient>
          <linearGradient id="proyectosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A9DDFF" />
            <stop offset="100%" stopColor="#81D4FA" />
          </linearGradient>
          <linearGradient id="certificacionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#80DEEA" />
            <stop offset="100%" stopColor="#4DD0E1" />
          </linearGradient>

          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.22" />
          </filter>

          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="0" dy="1" result="offsetBlur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="offsetBlur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Anillo blanco (delgado) */}
        <circle
          cx={CX}
          cy={CY}
          r={RING_OUTER}
          fill="white"
          stroke="#E6EEF5"
          strokeWidth="2"
          filter="url(#softShadow)"
        />

        <g>
          {/* 3 sectores */}
          <path
            d={sectorPath(CX, CY, WHEEL_R, SECTORS[0].start, SECTORS[0].end)}
            fill="url(#seguridadGradient)"
            className="diagram-section"
          />
          <path
            d={sectorPath(CX, CY, WHEEL_R, SECTORS[1].start, SECTORS[1].end)}
            fill="url(#sustentabilidadGradient)"
            className="diagram-section"
          />
          <path
            d={sectorPath(CX, CY, WHEEL_R, SECTORS[2].start, SECTORS[2].end)}
            fill="url(#energiaGradient)"
            className="diagram-section"
          />

          {(() => {
            const mid = (SECTORS[0].start + SECTORS[0].end) / 2 // 60°
            const layout = SECTOR_LAYOUT.seguridad
            const pIcon = polar(CX, CY, layout.iconRadius, mid)
            const pT = polar(CX, CY, layout.textRadius, mid)
            return (
              <g>
                <svg
                  x={pIcon.x - layout.iconSize / 2}
                  y={pIcon.y - layout.iconSize / 2}
                  width={layout.iconSize}
                  height={layout.iconSize}
                  viewBox="0 0 39 51"
                  fill="none"
                >
                  <path
                    d="M37.0146 5.86705C31.5478 5.86705 26.2557 4.26435 21.7069 1.23241L20.2289 0.247048C19.7362 -0.0823495 19.0945 -0.0823495 18.6018 0.247048L17.1238 1.23241C12.5751 4.26445 7.283 5.86705 1.81621 5.86705C1.00557 5.86705 0.349609 6.52301 0.349609 7.33365L0.349609 24.176C0.349609 35.9044 7.82584 46.2766 18.9514 49.9847C19.1017 50.0348 19.2592 50.0605 19.4154 50.0605C19.5715 50.0605 19.729 50.0347 19.8794 49.9847C31.0049 46.2766 38.4812 35.9044 38.4812 24.176V7.33365C38.4812 6.52301 37.8252 5.86705 37.0146 5.86705ZM35.548 24.176C35.548 34.4766 29.0857 43.6041 19.4154 47.0429C9.74503 43.6041 3.28281 34.4766 3.28281 24.176L3.28281 8.76593C8.80689 8.50243 14.1276 6.75513 18.7508 3.67292L19.4154 3.2304L20.08 3.67292C24.7032 6.75503 30.0239 8.50243 35.548 8.76593V24.176ZM16.0525 25.5581C15.4796 24.9852 14.5515 24.9852 13.9786 25.5581C13.4058 26.1309 13.4058 27.0591 13.9786 27.632L16.9118 30.5652C17.1983 30.8516 17.5735 30.9949 17.9487 30.9949C18.3238 30.9949 18.6992 30.8516 18.9856 30.5652L24.852 24.6988C25.4248 24.1259 25.4248 23.1977 24.852 22.6249C24.2791 22.052 23.351 22.052 22.7781 22.6249L17.9486 27.4544L16.0525 25.5581ZM6.216 25.1284C6.216 32.4069 12.1369 38.3278 19.4154 38.3278C26.6939 38.3278 32.6148 32.4069 32.6148 25.1284C32.6148 17.8498 26.6939 11.929 19.4154 11.929C12.1369 11.929 6.216 17.8498 6.216 25.1284ZM29.6816 25.1284C29.6816 30.7886 25.0756 35.3946 19.4154 35.3946C13.7552 35.3946 9.1492 30.7886 9.1492 25.1284C9.1492 19.4682 13.7552 14.8622 19.4154 14.8622C25.0756 14.8622 29.6816 19.4683 29.6816 25.1284Z"
                    fill="white"
                  />
                </svg>
                <text
                  x={pT.x}
                  y={pT.y}
                  textAnchor="middle"
                  fontSize={layout.fontSize}
                  fontWeight={700}
                  fill="#FFFFFF"
                  style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
                >
                  <tspan x={pT.x} dy="0">
                    Seguridad
                  </tspan>
                  <tspan x={pT.x} dy={layout.lineSpacing}>
                    e Higiene
                  </tspan>
                </text>
              </g>
            )
          })()}

          {(() => {
            const mid = (SECTORS[1].start + SECTORS[1].end) / 2 // 180°
            const layout = SECTOR_LAYOUT.sustentabilidad
            const pIcon = polar(CX, CY, layout.iconRadius, mid)
            const pT = polar(CX, CY, layout.textRadius, mid)
            return (
              <g>
                <svg
                  x={pIcon.x - layout.iconSize / 2}
                  y={pIcon.y - layout.iconSize / 2}
                  width={layout.iconSize}
                  height={layout.iconSize}
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    d="M2 44.0002L30.0486 15.9516M37.0829 28.7161C27.9707 37.8283 10.6842 35.3157 10.6842 35.3157C10.6842 35.3157 8.17168 18.0292 17.2838 8.91705C26.396 -0.195093 43.6825 2.31745 43.6825 2.31745C43.6825 2.31745 46.1953 19.604 37.0829 28.7161Z"
                    stroke="white"
                    strokeWidth="3.27273"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <text
                  x={pT.x}
                  y={pT.y + 6}
                  textAnchor="middle"
                  fontSize={layout.fontSize}
                  fontWeight={700}
                  fill="#FFFFFF"
                  style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
                >
                  Sustentabilidad
                </text>
              </g>
            )
          })()}

          {(() => {
            const mid = (SECTORS[2].start + SECTORS[2].end) / 2 // 300°
            const layout = SECTOR_LAYOUT.energia
            const pIcon = polar(CX, CY, layout.iconRadius, mid)
            const pT = polar(CX, CY, layout.textRadius, mid)
            return (
              <g>
                <svg
                  x={pIcon.x - layout.iconSize / 2}
                  y={pIcon.y - layout.iconSize / 2}
                  width={layout.iconSize}
                  height={layout.iconSize}
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <path
                    d="M2 26.5H5.04979M51 26.5H47.9502M26.5 51V47.9502M26.5 5.04979V2M5.28239 38.75L7.92361 37.2251M45.0764 15.7749L47.7176 14.25M37.2251 45.0764L38.75 47.7176M15.7749 7.92361L14.25 5.28239M14.25 47.7176L15.7749 45.0764M37.2251 7.92361L38.75 5.28239M45.0764 37.2251L47.7176 38.75M7.92361 15.7749L5.28239 14.25M36.666 24.4668L27.5166 23.4502L28.5332 11.251L16.334 28.5332L25.4834 29.5498L24.4668 41.749L36.666 24.4668Z"
                    stroke="#396DDC"
                    strokeWidth="3.04979"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <text
                  x={pT.x}
                  y={pT.y + 6}
                  textAnchor="middle"
                  fontSize={layout.fontSize}
                  fontWeight={700}
                  fill="#0A5FA6"
                  style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.2))" }}
                >
                  Energía
                </text>
              </g>
            )
          })()}
        </g>

        <g
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            transform: `rotate(${rotation}deg)`,
            transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {tabPaths.map((tab) => {
            const gradientMap: Record<string, string> = {
              capacitacion: "capacitacionGradient",
              estudios: "estudiosGradient",
              consultoria: "consultoriaGradient",
              proyectos: "proyectosGradient",
              certificacion: "certificacionGradient",
            }

            return (
              <g key={tab.id}>
                <path
                  d={tab.path}
                  fill={`url(#${gradientMap[tab.id]})`}
                  className={cn("diagram-tab", selectedTab?.id === tab.id && "diagram-tab-active")}
                  onClick={() => handleTabClick(tab)}
                  style={{
                    cursor: "pointer",
                    filter:
                      selectedTab?.id === tab.id
                        ? "drop-shadow(0 14px 28px rgba(0,0,0,0.35)) brightness(1.12) url(#innerGlow)"
                        : "drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
                    transition: "filter 300ms ease, transform 200ms ease",
                    stroke: "rgba(255,255,255,0.2)",
                    strokeWidth: "1",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTab?.id !== tab.id) {
                      e.currentTarget.style.filter = "drop-shadow(0 10px 20px rgba(0,0,0,0.28)) brightness(1.06)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTab?.id !== tab.id) {
                      e.currentTarget.style.filter = "drop-shadow(0 8px 16px rgba(0,0,0,0.2))"
                    }
                  }}
                />
                {/* Texto curvo */}
                <path id={`textPath-${tab.id}`} d={tab.textPath} fill="none" />
                <text
                  onClick={() => handleTabClick(tab)}
                  className="select-none"
                  fill="white"
                  fontSize={tab.id === "estudios" ? 15.5 : 13.5}
                  fontWeight={selectedTab?.id === tab.id ? 900 : 800}
                  style={{
                    cursor: "pointer",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                  }}
                >
                  <textPath href={`#textPath-${tab.id}`} startOffset="50%" textAnchor="middle">
                    {tab.title}
                  </textPath>
                </text>
              </g>
            )
          })}
        </g>

        {/* Centro (badge) */}
        <circle
          cx={CX}
          cy={CY}
          r={52}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth={3}
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.18))" }}
        />
        <text x={CX} y={CY + 6} textAnchor="middle" fill="#1f2937" fontSize="18" fontWeight={900}>
          Áreas
        </text>
      </svg>
    </div>
  )
}
