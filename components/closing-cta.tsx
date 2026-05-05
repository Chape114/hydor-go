'use client'

import { useEffect, useRef } from 'react'

export default function ClosingCta() {
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
      className="relative bg-[#0a0a0a] py-24 md:py-36 px-6 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Glow effects */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(182,245,66,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(92,225,240,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 border border-white/10 text-white/40 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#b6f542] animate-pulse" />
          Disponible ahora
        </div>

        <h2
          id="cta-heading"
          className="reveal font-display text-[clamp(3rem,8vw,8rem)] leading-none text-white mb-6"
        >
          ¿LISTO PARA
          <br />
          <span className="text-[#b6f542]">EL GO?</span>
        </h2>

        <p className="reveal text-white/50 text-lg font-body mb-12 max-w-xl mx-auto leading-relaxed">
          Comprá en la tienda oficial de Hydor. Envíos a todo el país.
        </p>

        {/* CTA buttons */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.hydor.com.ar/productos/hydorpop/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-3 bg-[#b6f542] text-[#0a0a0a] font-display text-base px-8 py-4 rounded-full w-full sm:w-auto justify-center"
            aria-label="Comprar Hydor POP en tienda oficial"
          >
            Comprar Hydor POP
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://www.hydor.com.ar/productos/hydorcrunch/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-3 bg-[#5ce1f0] text-[#0a0a0a] font-display text-base px-8 py-4 rounded-full w-full sm:w-auto justify-center"
            aria-label="Comprar Hydor Crunch en tienda oficial"
          >
            Comprar Hydor Crunch
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="reveal mt-8 text-white/20 text-sm font-body">
          Tienda oficial Hydor · www.hydor.com.ar
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/[0.06] text-center">
        <p className="text-white/20 text-xs font-body tracking-wider uppercase">
          © 2025 Hydor · Todos los derechos reservados
        </p>
      </footer>
    </section>
  )
}
