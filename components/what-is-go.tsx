'use client'

import { useEffect, useRef, useState } from 'react'

type Metric = {
  value: string
  label: string
  sublabel: string
  color: string
  progress: number
}

const metrics: Metric[] = [
  {
    value: '11g',
    label: 'por porción',
    sublabel: 'proteína vegetal',
    color: '#b6f542',
    progress: 88,
  },
  {
    value: '2',
    label: 'productos',
    sublabel: 'POP + Crunch',
    color: '#5ce1f0',
    progress: 72,
  },
  {
    value: '0',
    label: 'esfuerzo',
    sublabel: 'sin complicarte',
    color: '#ffffff',
    progress: 100,
  },
]

function ProgressCircle({
  value,
  label,
  sublabel,
  color,
  progress,
  active,
}: Metric & { active: boolean }) {
  const radius = 84
  const stroke = 11
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset =
    circumference - ((active ? progress : 0) / 100) * circumference

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative w-[210px] h-[210px] md:w-[240px] md:h-[240px]">
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20"
          style={{ backgroundColor: color }}
        />

        <svg
          className="relative z-10 w-full h-full -rotate-90"
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
          <circle
            stroke="rgba(255,255,255,0.08)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition:
                'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <span
            className="font-display text-5xl md:text-6xl leading-none"
            style={{ color }}
          >
            {value}
          </span>

          <span className="mt-2 text-white text-sm md:text-base font-semibold uppercase tracking-widest">
            {label}
          </span>

          <span className="mt-1 text-white/45 text-xs md:text-sm font-body">
            {sublabel}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function GoStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="go-stats-heading"
    >
      {/* Fondo visual */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-10%] w-[360px] h-[360px] rounded-full bg-[#b6f542]/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] w-[420px] h-[420px] rounded-full bg-[#5ce1f0]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Pretítulo */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#5ce1f0]" />
          <span className="text-[#5ce1f0] text-xs font-semibold tracking-widest uppercase">
            La proteína que comés
          </span>
        </div>

        {/* Título */}
        <h2
          id="go-stats-heading"
          className="font-display text-[clamp(2.4rem,6vw,5rem)] text-white leading-none mb-14 md:mb-20 max-w-4xl"
        >
          No es barrita. No es batido. No es snack vacío.
        </h2>

        {/* Fórmula visual */}
        <div className="relative">
          {/* Línea conectora desktop */}
          <div className="hidden md:block absolute top-[120px] left-[16%] right-[16%] h-px bg-gradient-to-r from-[#b6f542]/0 via-white/20 to-[#5ce1f0]/0" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-5 items-center">
            <ProgressCircle {...metrics[0]} active={active} />

            <div className="hidden md:flex items-center justify-center">
              <span
                className={`font-display text-6xl leading-none transition-all duration-700 ${
                  active
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-50 -rotate-12'
                }`}
                style={{
                  color: '#ffffff',
                  transitionDelay: '450ms',
                }}
              >
                +
              </span>
            </div>

            <ProgressCircle {...metrics[1]} active={active} />

            <div className="hidden md:flex items-center justify-center">
              <span
                className={`font-display text-6xl leading-none transition-all duration-700 ${
                  active
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-50 rotate-12'
                }`}
                style={{
                  color: '#ffffff',
                  transitionDelay: '650ms',
                }}
              >
                +
              </span>
            </div>

            <ProgressCircle {...metrics[2]} active={active} />
          </div>
        </div>

        {/* Resultado */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 ${
            active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '850ms' }}
        >
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 rounded-full md:rounded-[999px] border border-white/10 bg-white/[0.04] px-8 py-5 md:px-10 md:py-6 backdrop-blur-sm">
            <span className="font-display text-3xl md:text-5xl text-white leading-none">
              Proteína real.
            </span>

            <span className="hidden md:block w-2 h-2 rounded-full bg-[#b6f542]" />

            <span className="font-display text-3xl md:text-5xl text-white leading-none">
              Formato real.
            </span>

            <span className="hidden md:block w-2 h-2 rounded-full bg-[#5ce1f0]" />

            <span className="font-display text-3xl md:text-5xl text-white leading-none">
              Vida real.
            </span>
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-white/60 text-base md:text-lg font-body leading-relaxed">
            Hydor GO suma proteína vegetal en dos formatos simples: POP para
            reemplazar snacks tradicionales y Crunch para mejorar tus comidas
            sin cambiar la rutina.
          </p>
        </div>
      </div>
    </section>
  )
}