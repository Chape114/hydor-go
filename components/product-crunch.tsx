'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function ProductCrunch() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const useCases = [
    { emoji: '🥗', text: 'Ensaladas' },
    { emoji: '🍚', text: 'Bowls de arroz' },
    { emoji: '🍳', text: 'Huevos revueltos' },
    { emoji: '🫙', text: 'Yogur' },
    { emoji: '🍝', text: 'Pastas' },
    { emoji: '🥘', text: 'Sopas y guisos' },
  ]

  return (
    <section
      ref={sectionRef}
      id="crunch"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
      style={{ backgroundColor: '#5ce1f0' }}
      aria-labelledby="crunch-heading"
    >
      {/* Big bg text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[20vw] text-black/[0.06] leading-none">CRUNCH</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Text side */}
        <div>
          <div className="reveal inline-flex items-center gap-2 bg-[#0a0a0a] text-[#5ce1f0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            MEJORA COMIDAS EXISTENTES
          </div>

          <h2
            id="crunch-heading"
            className="reveal font-display text-[clamp(3rem,8vw,8rem)] text-[#0a0a0a] leading-none mb-6"
          >
            CRUNCH
          </h2>

          <div className="reveal inline-block bg-[#0a0a0a]/20 border border-[#0a0a0a]/30 rounded-xl px-4 py-3 mb-6">
            <p className="font-display text-xl text-[#0a0a0a] font-semibold">No reemplaza nada. Mejora lo que ya comés.</p>
          </div>

          <p className="reveal font-display text-2xl md:text-3xl text-[#0a0a0a] mb-6 leading-tight">
            Tirá arriba.
            <br />
            Sumá proteína.
          </p>

          <p className="reveal text-[#0a0a0a]/70 text-base font-body mb-6 leading-relaxed">
            No cambia el sabor: suma textura, crocante y proteína. Convertí una comida simple en una comida con proteína.
          </p>

          <p className="reveal text-[#0a0a0a]/70 text-base font-body mb-8 leading-relaxed">
            <strong className="text-[#0a0a0a]">11g de proteína vegetal</strong> por porción en cualquier plato. Sin cambiar tu rutina.
          </p>

          {/* Use cases grid */}
          <div className="reveal grid grid-cols-3 gap-3 mb-10">
            {useCases.map(({ emoji, text }) => (
              <div
                key={text}
                className="bg-white/40 backdrop-blur-sm rounded-2xl px-3 py-3 text-center border border-white/30 hover:bg-white/60 transition-colors"
              >
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-[#0a0a0a] font-semibold text-xs font-body">{text}</div>
              </div>
            ))}
          </div>

          <div className="reveal flex flex-wrap gap-4">
            <a
              href="https://www.hydor.com.ar/productos/hydorcrunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-3 bg-[#0a0a0a] text-white font-semibold px-8 py-4 rounded-full text-base"
              aria-label="Comprar Hydor Crunch en www.hydor.com.ar"
            >
              Comprar Hydor Crunch
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="reveal flex justify-center items-center mt-10 md:mt-0">
          <div className="relative">
            <div className="float-1 absolute -top-4 -left-6 z-20">
              <div className="bg-[#0a0a0a] text-[#5ce1f0] font-display text-sm px-4 py-2 rounded-full rotate-[-7deg] shadow-xl whitespace-nowrap">
                NO ALTERA EL SABOR
              </div>
            </div>
            <div className="float-3 absolute bottom-10 -right-8 z-20">
              <div className="bg-white text-[#0a0a0a] font-display text-sm px-4 py-2 rounded-full rotate-[5deg]  whitespace-nowrap">
                46 KCAL ⚡
              </div>
            </div>
            <Image
              src="/images/crunch-solo.png"
              alt="Hydor Crunch topping proteico vegetal sabor natural"
              width={620}
              height={840}
              className="w-[min(92vw,560px)] md:w-[520px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Diagonal divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[#0a0a0a]"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
