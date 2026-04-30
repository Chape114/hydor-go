'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Diferencial() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
        }
      },
      { threshold: 0.18 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const rowOne = [
    'Snack salado con proteína',
    'Proteína vegetal de arveja',
    'Sin gluten',
    'Bajo en calorías',
  ]

  const rowTwo = [
    'Sin preparación',
    'Sabor real',
    'No sabe a suplemento',
    'Para la vida real',
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] py-24 md:py-32 overflow-hidden"
      aria-labelledby="diferencial-heading"
    >
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#b6f542]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[460px] h-[460px] rounded-full bg-[#5ce1f0]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Claim central */}
        <div
          className={`text-center px-6 mb-14 transition-all duration-1000 ${
            active ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b6f542]" />
            Diferencial GO
            <span className="w-2 h-2 rounded-full bg-[#5ce1f0]" />
          </span>

          <h3
            id="diferencial-heading"
            className="font-display text-[clamp(2.8rem,8vw,7rem)] text-white leading-[0.85] tracking-tight"
          >
            Snack que suma. <br />
            <span className="text-[#5ce1f0]">Topping que potencia.</span>
          </h3>
        </div>

        {/* Pills full width */}
        <div
          className={`relative z-10 space-y-4 md:space-y-5 mb-16 md:mb-20 transition-all duration-1000 ${
            active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '260ms' }}
        >
          <div className="w-screen overflow-hidden">
            <div className="flex gap-3 w-max animate-marquee">
              {[...rowOne, ...rowOne, ...rowOne].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="shrink-0 rounded-full border border-[#b6f542]/25 bg-[#b6f542]/10 px-5 md:px-7 py-3 md:py-4 text-[#b6f542] text-sm md:text-lg font-semibold whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="w-screen overflow-hidden">
            <div className="flex gap-3 w-max animate-marquee-reverse">
              {[...rowTwo, ...rowTwo, ...rowTwo].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="shrink-0 rounded-full border border-[#5ce1f0]/25 bg-[#5ce1f0]/10 px-5 md:px-7 py-3 md:py-4 text-[#5ce1f0] text-sm md:text-lg font-semibold whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fórmula final */}
        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
            active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '420ms' }}
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
            {/* POP */}
            <div className="group overflow-hidden rounded-3xl border border-[#b6f542]/20 bg-[#b6f542]/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/picada.png"
                  alt="Hydor POP en una picada visto desde arriba"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-[#b6f542]/30 bg-black/40 px-4 py-2 text-[#b6f542] text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                  POP
                </span>
              </div>

              <div className="p-6 md:p-8">
                <p className="font-display text-3xl md:text-5xl leading-none text-white">
                  Reemplaza snacks tradicionales
                </p>

                <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                  Una opción salada, práctica y con proteína para sumar a picadas,
                  juntadas o momentos de snack.
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <span className="font-display text-5xl text-white/25">+</span>
            </div>

            {/* Crunch */}
            <div className="group overflow-hidden rounded-3xl border border-[#5ce1f0]/20 bg-[#5ce1f0]/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/yogurt.png"
                  alt="Hydor Crunch en un bowl de yogurt visto desde arriba"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-[#5ce1f0]/30 bg-black/40 px-4 py-2 text-[#5ce1f0] text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                  Crunch
                </span>
              </div>

              <div className="p-6 md:p-8">
                <p className="font-display text-3xl md:text-5xl leading-none text-white">
                  Mejora comidas reales
                </p>

                <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                  Un topping crocante para sumar textura y proteína a bowls,
                  yogures, ensaladas o comidas de todos los días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 24s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 26s linear infinite;
        }
      `}</style>
    </section>
  )
}