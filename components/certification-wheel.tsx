"use client"

import { useState } from "react"
import Image from "next/image"

type SectionKey = 0 | 1 | 2 | 3

interface CertificationWheelProps {
  onSectionChange: (section: SectionKey | null) => void
  currentColor: string
}

export default function CertificationWheel({ onSectionChange, currentColor }: CertificationWheelProps) {
  const [active, setActive] = useState<SectionKey | null>(null)

  const sectionColors = {
    0: "#9470DE",
    1: "#74B74A",
    2: "#005BB1",
    3: "#13D4CB",
  }

  const CFG = {
    view: 700,
    cx: 350,
    cy: 350,
    rOuter: 320,
    rInner: 100,
    rim: 10,
    divider: 12,
  }

  const d2r = (deg: number) => ((deg - 90) * Math.PI) / 180
  const polar = (r: number, deg: number) => {
    const t = d2r(deg)
    return [CFG.cx + r * Math.cos(t), CFG.cy + r * Math.sin(t)]
  }

  const ringSlice = (start: number, end: number) => {
    const [x1, y1] = polar(CFG.rOuter, start)
    const [x2, y2] = polar(CFG.rOuter, end)
    const [x3, y3] = polar(CFG.rInner, end)
    const [x4, y4] = polar(CFG.rInner, start)
    const largeArc = end - start > 180 ? 1 : 0
    return [
      `M ${x1} ${y1}`,
      `A ${CFG.rOuter} ${CFG.rOuter} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${x3} ${y3}`,
      `A ${CFG.rInner} ${CFG.rInner} 0 ${largeArc} 0 ${x4} ${y4}`,
      "Z",
    ].join(" ")
  }

  const SECTORS: Array<{ start: number; end: number; key: SectionKey }> = [
    { start: -45, end: 45, key: 0 },
    { start: 45, end: 135, key: 1 },
    { start: 135, end: 225, key: 2 },
    { start: 225, end: 315, key: 3 },
  ]

  const rText = (CFG.rOuter + CFG.rInner) / 2 - 10
  const labelColor = (k: SectionKey) => (active === k ? "#FFFFFF" : "#8B8B8B")

  const toggle = (k: SectionKey) => {
    setActive(active === k ? null : k)
    onSectionChange(active === k ? null : k)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[550px] h-[550px]">
        <svg
          viewBox={`0 0 ${CFG.view} ${CFG.view}`}
          className="absolute inset-0 w-full h-full"
          style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,.35))" }}
        >
          <defs>
            <linearGradient id="g-gray" x1="23.68%" y1="11.63%" x2="100%" y2="100%">
              <stop offset="24.5%" stopColor="#BFBABA" />
              <stop offset="66.92%" stopColor="#DDDDDD" />
            </linearGradient>

            <linearGradient id="g-purple" x1="23.68%" y1="11.63%" x2="100%" y2="100%">
              <stop offset="22.04%" stopColor="#662686" />
              <stop offset="91.36%" stopColor="#A64AD4" />
            </linearGradient>
            <linearGradient id="g-green" x1="20%" y1="5%" x2="100%" y2="100%">
              <stop offset="24.5%" stopColor="#2FA14A" />
              <stop offset="66.92%" stopColor="#9BE24E" />
            </linearGradient>
            <linearGradient id="g-blue" x1="20%" y1="5%" x2="100%" y2="100%">
              <stop offset="24.5%" stopColor="#006F9E" />
              <stop offset="66.92%" stopColor="#039DDF" />
            </linearGradient>
            <linearGradient id="g-aqua" x1="20%" y1="5%" x2="100%" y2="100%">
              <stop offset="20%" stopColor="#16C7C4" />
              <stop offset="80%" stopColor="#92F7EF" />
            </linearGradient>
          </defs>

          {SECTORS.map(({ start, end, key }) => {
            const fill =
              active === key
                ? key === 0
                  ? "url(#g-purple)"
                  : key === 1
                    ? "url(#g-green)"
                    : key === 2
                      ? "url(#g-blue)"
                      : "url(#g-aqua)"
                : "url(#g-gray)"

            return (
              <path
                key={key}
                d={ringSlice(start, end)}
                fill={fill}
                style={{ cursor: "pointer", pointerEvents: "auto", filter: "drop-shadow(0 8px 16px rgba(0,0,0,.15))" }}
                onClick={() => toggle(key)}
              />
            )
          })}

          {[-45, 45, 135, 225].map((deg, i) => {
            const [x1, y1] = polar(CFG.rInner, deg)
            const [x2, y2] = polar(CFG.rOuter, deg)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFFFFF"
                strokeWidth={CFG.divider}
                style={{ pointerEvents: "none" }}
              />
            )
          })}

          <circle
            cx={CFG.cx}
            cy={CFG.cy}
            r={CFG.rOuter}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={CFG.rim}
            style={{ pointerEvents: "none" }}
          />

          <text
            x={CFG.cx}
            y={CFG.cy - rText}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={labelColor(0)}
            fontSize="26"
            fontWeight="700"
            fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
            style={{ pointerEvents: "none", letterSpacing: ".2px" }}
          >
            Conocer
          </text>

          <text
            x={CFG.cx + rText}
            y={CFG.cy - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={labelColor(1)}
            fontSize="20"
            fontWeight="700"
            fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
            style={{ pointerEvents: "none" }}
          >
            <tspan x={CFG.cx + rText} dy="0">
              Proceso de
            </tspan>
            <tspan x={CFG.cx + rText} dy="24">
              Evaluación
            </tspan>
          </text>

          <text
            x={CFG.cx}
            y={CFG.cy + rText - 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={labelColor(2)}
            fontSize="20"
            fontWeight="700"
            fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
            style={{ pointerEvents: "none" }}
          >
            <tspan x={CFG.cx} dy="0">
              ¿Dónde puedo
            </tspan>
            <tspan x={CFG.cx} dy="24">
              certificarme?
            </tspan>
          </text>

          <text
            x={CFG.cx - rText}
            y={CFG.cy - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={labelColor(3)}
            fontSize="20"
            fontWeight="700"
            fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
            style={{ pointerEvents: "none" }}
          >
            <tspan x={CFG.cx - rText} dy="0">
              Estándares
            </tspan>
            <tspan x={CFG.cx - rText} dy="24">
              ofertados
            </tspan>
          </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Image
            src="/images/design-mode/image.png"
            alt="Logo CIDTES"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}
