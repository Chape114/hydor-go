'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function ProductPop() {
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

  const bullets = [
    'Snack salado con proteína',
    'Alternativa a snacks tradicionales',
    'Proteína vegetal de arveja',
    'Sin gluten',
    'Bajo en calorías (53 kcal)',
    'Práctico y sin preparación',
  ]

  return (
    <section
      ref={sectionRef}
      id="pop"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
      style={{ backgroundColor: '#b6f542' }}
      aria-labelledby="pop-heading"
    >
      {/* Diagonal divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[#0f0f0f]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
        aria-hidden="true"
      />

      {/* Big bg text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[30vw] text-black/[0.06] leading-none">POP</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Image side */}
        <div className="reveal flex justify-center order-2 md:order-1">
          <div className="relative">
            {/* Floating badges */}
            <div className="float-2 absolute -top-6 -right-4 z-20">
              <div className="bg-[#0a0a0a] text-[#b6f542] font-display text-sm px-4 py-2 rounded-full rotate-[8deg] shadow-xl whitespace-nowrap">
                LISTA PARA COMER
              </div>
            </div>
            <div className="float-3 absolute bottom-10 -left-8 z-20">
              <div className="bg-white text-[#0a0a0a] font-display text-sm px-4 py-2 rounded-full rotate-[-6deg] shadow-xl whitespace-nowrap">
                53 KCAL ⚡
              </div>
            </div>
            <Image
              src="/images/hydor-pop-old.png"
              alt="Hydor POP snack proteico vegetal sabor cebolla y crema"
              width={620}
              height={840}
              className="product-img drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 md:order-2">
          <div className="reveal inline-flex items-center gap-2 bg-[#0a0a0a] text-[#b6f542] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            REEMPLAZA SNACKS TRADICIONALES
          </div>

          <h2
            id="pop-heading"
            className="reveal font-display text-[clamp(4rem,10vw,9rem)] text-[#0a0a0a] leading-none mb-6"
          >
            POP
          </h2>

          <p className="reveal font-body text-base md:text-lg text-[#0a0a0a]/80 mb-8 leading-relaxed">
            Para cuando querés picar algo rico, pero no querés seguir cayendo en snacks cargados de grasas, harinas refinadas y sin valor nutricional.
          </p>

          <p className="reveal font-display text-2xl md:text-3xl text-[#0a0a0a] mb-8 leading-tight">
            Abrí.
            <br />
            Comé.
            <br />
            Seguí.
          </p>

          <ul className="reveal space-y-3 mb-10">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[#0a0a0a]/80 font-body text-base">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="#b6f542" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="reveal flex flex-wrap gap-4">
            <a
              href="https://www.tiendanube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-3 bg-[#0a0a0a] text-white font-semibold px-8 py-4 rounded-full text-base"
              aria-label="Comprar Hydor POP en Tiendanube"
            >
              Comprar Hydor POP
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Diagonal divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[#5ce1f0]"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
