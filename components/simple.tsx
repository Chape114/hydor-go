'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Simple() {
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
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="simple-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2
          id="simple-heading"
          className="reveal font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white mb-16 text-center"
        >
          Así de simple
        </h2>

        {/* Three columns */}
        <div className="reveal grid md:grid-cols-3 gap-8">
          {/* POP */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-32 h-40 relative">
              <Image
                src="/images/hydor-pop.jpg"
                alt="Hydor POP"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            <h3 className="font-display text-3xl text-[#b6f542] mb-4">POP</h3>
            <p className="text-white/60 font-body text-base mb-4 leading-relaxed">
              Reemplaza snacks entre comidas
            </p>
            <div className="flex items-center justify-center gap-2 text-white/40 text-sm font-body">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Abrís y comés</span>
            </div>
          </div>

          {/* Arrow divider */}
          <div className="flex items-center justify-center">
            <div className="w-px h-24 bg-white/10" />
          </div>

          {/* CRUNCH */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-32 h-40 relative">
              <Image
                src="/images/hydor-crunch.jpg"
                alt="Hydor CRUNCH"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            <h3 className="font-display text-3xl text-[#5ce1f0] mb-4">CRUNCH</h3>
            <p className="text-white/60 font-body text-base mb-4 leading-relaxed">
              Mejora comidas sin cambiar hábitos
            </p>
            <div className="flex items-center justify-center gap-2 text-white/40 text-sm font-body">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Lo sumás arriba</span>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="reveal mt-16 text-center">
          <p className="text-white/50 font-body text-base leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white">Combo:</strong> resolvés dos momentos del día con una estrategia clara.
          </p>
        </div>
      </div>
    </section>
  )
}
