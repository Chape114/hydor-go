'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function DecisionInteractive() {
  const [selected, setSelected] = useState<'pop' | 'crunch' | null>(null)
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
      aria-labelledby="decision-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="reveal text-center mb-16">
          <h2
            id="decision-heading"
            className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-tight text-white mb-4"
          >
            Elegí tu momento
          </h2>
          <p className="text-white/50 font-body text-lg">¿Cuál es tu realidad ahora?</p>
        </div>

        {/* Interactive buttons */}
        <div className="reveal grid md:grid-cols-2 gap-6 mb-12">
          {/* POP option */}
          <button
            onClick={() => setSelected(selected === 'pop' ? null : 'pop')}
            className={`group relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-300 ${
              selected === 'pop'
                ? 'bg-[#b6f542]/20 border-2 border-[#b6f542] shadow-xl'
                : 'bg-white/[0.02] border border-white/10 hover:bg-white/[0.05]'
            }`}
            aria-pressed={selected === 'pop'}
          >
            <div className="relative z-10">
              <h3 className="font-display text-2xl text-[#b6f542] mb-3">Tengo hambre</h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                entre comidas, en el trabajo, en el viaje
              </p>
            </div>
            {selected === 'pop' && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#b6f542] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>

          {/* CRUNCH option */}
          <button
            onClick={() => setSelected(selected === 'crunch' ? null : 'crunch')}
            className={`group relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-300 ${
              selected === 'crunch'
                ? 'bg-[#5ce1f0]/20 border-2 border-[#5ce1f0] shadow-xl'
                : 'bg-white/[0.02] border border-white/10 hover:bg-white/[0.05]'
            }`}
            aria-pressed={selected === 'crunch'}
          >
            <div className="relative z-10">
              <h3 className="font-display text-2xl text-[#5ce1f0] mb-3">Quiero mejorar</h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                almuerzo, cena, bowls, ensaladas
              </p>
            </div>
            {selected === 'crunch' && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#5ce1f0] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* Dynamic response */}
        {selected && (
          <div className="reveal animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className={`rounded-3xl p-8 md:p-12 border ${
              selected === 'pop'
                ? 'bg-[#b6f542]/10 border-[#b6f542]/30'
                : 'bg-[#5ce1f0]/10 border-[#5ce1f0]/30'
            }`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product image */}
                <div className="flex justify-center order-2 md:order-1">
                  <div className="relative w-40 h-48">
                    <Image
                      src={selected === 'pop' ? '/images/hydor-pop.jpg' : '/images/hydor-crunch.jpg'}
                      alt={selected === 'pop' ? 'Hydor POP' : 'Hydor CRUNCH'}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Response text */}
                <div className="order-1 md:order-2">
                  {selected === 'pop' ? (
                    <>
                      <h3 className="font-display text-3xl text-[#b6f542] mb-4">Te conviene POP</h3>
                      <p className="text-white/70 font-body text-base leading-relaxed mb-6">
                        Una alternativa real a snacks tradicionales, con proteína y sin lo de siempre.
                      </p>
                      <div className="space-y-2 mb-8 text-white/60 text-sm font-body">
                        <p>✓ Snack salado con proteína</p>
                        <p>✓ Reemplaza opciones poco nutritivas</p>
                        <p>✓ Listo para comer, directo</p>
                      </div>
                      <a
                        href="https://www.hydor.com.ar/productos/hydorpop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#b6f542] text-[#0a0a0a] font-semibold px-6 py-3 rounded-full text-base hover:bg-[#b6f542]/90 transition-colors"
                      >
                        Comprar POP
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="font-display text-3xl text-[#5ce1f0] mb-4">Te conviene CRUNCH</h3>
                      <p className="text-white/70 font-body text-base leading-relaxed mb-6">
                        Sumá proteína a tus comidas sin cambiar tu rutina. No reemplaza, mejora.
                      </p>
                      <div className="space-y-2 mb-8 text-white/60 text-sm font-body">
                        <p>✓ Topping proteico versátil</p>
                        <p>✓ Mejora comidas existentes</p>
                        <p>✓ No altera sabor ni textura</p>
                      </div>
                      <a
                        href="https://www.hydor.com.ar/productos/hydorcrunch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#5ce1f0] text-[#0a0a0a] font-semibold px-6 py-3 rounded-full text-base hover:bg-[#5ce1f0]/90 transition-colors"
                      >
                        Comprar CRUNCH
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
