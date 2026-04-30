'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Decision() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="decisión"
      className="bg-[#0f0f0f] py-24 md:py-32 px-6"
      aria-labelledby="decision-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#5ce1f0]" />
          <span className="text-[#5ce1f0] text-xs font-semibold tracking-widest uppercase">¿Cuál es el tuyo?</span>
        </div>
        <h2
          id="decision-heading"
          className="reveal font-display text-[clamp(2rem,5vw,4.5rem)] text-white leading-none mb-12"
        >
          ELEGÍ TU MOMENTO
        </h2>

        {/* 👇 agregado items-stretch */}
        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          
          {/* POP card */}
          <a
            href="#pop"
            className="reveal decision-card group relative overflow-hidden rounded-3xl bg-[#b6f542] p-8 md:p-10 cursor-pointer block h-full flex flex-col"
            aria-label="Quiero el Hydor POP — tengo hambre entre comidas"
          >
            <span
              className="absolute -right-6 -bottom-8 font-display text-[10rem] text-black/10 leading-none pointer-events-none select-none"
              aria-hidden="true"
            >
              POP
            </span>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 bg-[#0a0a0a] text-[#b6f542] text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6 self-start ">
                SNACK
              </div>

              <p className="font-display text-4xl md:text-5xl text-[#0a0a0a] leading-tight mb-4">
                Tengo hambre
                <br />
                entre comidas
              </p>

              <p className="text-[#0a0a0a]/60 text-base font-body mb-8">
                Abrís, comés y seguís. Sin ensuciar. Sin preparar nada.
              </p>

              {/* 👇 empuja el botón abajo */}
              <div className="mt-auto inline-flex items-center gap-3 bg-[#0a0a0a] text-white font-semibold px-6 py-3 rounded-full text-sm group-hover:bg-[#1a1a1a] transition-colors self-start">
                Ver Hydor POP
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </a>

          {/* CRUNCH card */}
          <a
            href="#crunch"
            className="reveal decision-card group relative overflow-hidden rounded-3xl bg-[#5ce1f0] p-8 md:p-10 cursor-pointer block h-full flex flex-col"
            aria-label="Quiero el Hydor Crunch — quiero mejorar mis comidas"
            style={{ transitionDelay: '0.1s' }}
          >
            <span
              className="absolute -right-4 -bottom-8 font-display text-[7rem] text-black/10 leading-none pointer-events-none select-none "
              aria-hidden="true"
            >
              CRUNCH
            </span>

            <div className="relative z-10 flex flex-col h-full">
              <div className="self-start inline-flex items-center gap-2 bg-[#0a0a0a] text-[#5ce1f0] text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                TOPPING
              </div>

              <p className="font-display text-4xl md:text-5xl text-[#0a0a0a] leading-tight mb-4">
                Quiero mejorar
                <br />
                mis comidas
              </p>

              <p className="text-[#0a0a0a]/60 text-base font-body mb-8">
                Lo tirás arriba de lo que ya comés. Suma proteína sin cambiar el sabor.
              </p>

              <div className="mt-auto inline-flex items-center gap-3 bg-[#0a0a0a] text-white font-semibold px-6 py-3 rounded-full text-sm group-hover:bg-[#1a1a1a] transition-colors self-start">
                Ver Hydor Crunch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}