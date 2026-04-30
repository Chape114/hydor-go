'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      const popImg = hero.querySelector<HTMLElement>('.pop-product')
      const crunchImg = hero.querySelector<HTMLElement>('.crunch-product')
      if (popImg) popImg.style.transform = `translateY(-8px) rotate(-4deg) translate(${x * 0.5}px, ${y * 0.3}px)`
      if (crunchImg) crunchImg.style.transform = `translateY(-8px) rotate(4deg) translate(${-x * 0.5}px, ${y * 0.3}px)`
    }
    const hero = heroRef.current
    hero?.addEventListener('mousemove', handleMouseMove)
    return () => hero?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero Hydor GO"
    >
      {/* Split background */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div
          className="flex-1 md:flex-none hero-split-left absolute inset-0"
          style={{ backgroundColor: '#b6f542', width: '100%', height: '100%' }}
        />
        <div
          className="hero-split-right absolute inset-0"
          style={{ backgroundColor: '#5ce1f0', width: '100%', height: '100%' }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-8">
        <span className="font-display text-2xl text-[#0a0a0a] tracking-tight">
          HYDOR<span className="text-[#0a0a0a] opacity-60"> GO</span>
        </span>
        <a
          href="#decisión"
          className="hidden md:inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full cta-btn"
        >
          Descubrí tu producto →
        </a>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pt-8 pb-24">
        {/* Big headline */}
        <h1 className="font-display text-[clamp(4rem,11vw,11rem)] leading-none text-[#0a0a0a] text-balance mb-4">
          PURA PROTEÍNA
          <br />
          PARA TU RUTINA
        </h1>
        <p className="text-[#0a0a0a] text-xl md:text-2xl font-semibold opacity-70 mb-10 tracking-wide">
          Snack o topping. Vos elegís.
        </p>

        {/* Products floating */}
        <div className="relative flex items-end justify-center gap-8 md:gap-12 w-full max-w-full md:max-w-[1200px] mx-auto mt-4 overflow-visible">
          {/* POP */}
          <div className="relative flex flex-col items-center overflow-visible md:-mt-8 md:-mr-16 group">
            <div className="relative">
              {/* Floating tags */}
              <div className="absolute top-[30%] left-[87%] -translate-x-1/2 w-[14rem] flex flex-col items-start gap-3 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                  🫛 Proteína de arvejas
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '180ms' }}>
                  🧅 Cebolla y Crema
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '260ms' }}>
                 💪 11 gr. de proteínas por porción
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '340ms' }}>
                 🔥 Abrís y comés
                </span>
              </div>

              {/* Stickers */}
              <div className="float-1 absolute -top-8 -left-14 z-20">
                <div className="bg-[#0a0a0a] text-[#b6f542] font-display text-xs px-3 py-1.5 rounded-full rotate-[-8deg] whitespace-nowrap shadow-lg">
                  11g PROTEÍNA
                </div>
              </div>
              <div className="float-3 absolute top-4 -right-10 z-20">
                <div className="bg-white text-[#0a0a0a] font-display text-xs px-3 py-1.5 rounded-full rotate-[5deg] whitespace-nowrap shadow-lg">
                  SIN TACC ✓
                </div>
              </div>
              <div className="transition-transform duration-500 group-hover:-translate-x-8">
                <Image
                  src="/images/hydor-pop.png"
                  alt="Hydor POP — snack proteico sabor cebolla y crema"
                  width={920}
                  height={980}
                  className="pop-product product-img transition-transform duration-500 w-[320px] md:w-[520px] lg:w-[680px] h-auto z-20"
                  style={{ transform: 'translateY(-8px) rotate(-4deg)' }}
                />
              </div>
            </div>
            <div className="mt-4 font-display text-5xl md:text-8xl xl:text-[9.5rem] text-[#0a0a0a]">POP</div>
            <div className="text-[#0a0a0a] text-sm md:text-base font-semibold opacity-60 mt-1 uppercase tracking-widest">
              Snack · 53 kcal
            </div>
          </div>

          {/* Center divider */}
          <div className="hidden md:flex flex-col items-center gap-2 pb-16 text-[#0a0a0a] opacity-30">
            <span className="w-px h-16 bg-current" />
            <span className="font-display text-sm tracking-widest rotate-90 mt-4">VS</span>
          </div>

          {/* CRUNCH */}
          <div className="relative flex flex-col items-center overflow-visible md:-mt-8 md:ml-8 group">
            <div className="relative">
              {/* Floating tags */}
              <div className="absolute top-[30%] right-[50%] -translate-x-1/2 w-[14rem] flex flex-col items-end gap-3 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform -translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                 🫛 Proteína de arvejas
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform -translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '180ms' }}>
                  Sin Sabor
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform -translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '260ms' }}>
                 💪 11 gr. de proteínas por porción
                </span>
                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white text-xs font-semibold uppercase tracking-widest shadow-2xl transform -translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '340ms' }}>
                  🔥 En cualquier comida
                </span>
              </div>

              <div className="float-2 absolute -top-8 -right-14 z-20">
                <div className="bg-[#0a0a0a] text-[#5ce1f0] font-display text-xs px-3 py-1.5 rounded-full rotate-[6deg] whitespace-nowrap shadow-lg">
                  11g PROTEÍNA
                </div>
              </div>
              <div className="float-1 absolute top-4 -left-10 z-20">
                <div className="bg-white text-[#0a0a0a] font-display text-xs px-3 py-1.5 rounded-full rotate-[-4deg] whitespace-nowrap shadow-lg">
                  VEGETAL ✓
                </div>
              </div>
              <div className="transition-transform duration-500 group-hover:translate-x-8">
                <Image
                  src="/images/hydor-crunch.png"
                  alt="Hydor Crunch — topping proteico sabor natural"
                  width={420}
                  height={520}
                  className="crunch-product product-img transition-transform duration-500 w-[240px] md:w-[360px] lg:w-[460px] h-auto z-20"
                  style={{ transform: 'translateY(-8px) rotate(4deg)' }}
                />
              </div>
            </div>
            <div className="mt-4 font-display text-5xl md:text-8xl xl:text-[9.5rem] text-[#0a0a0a]">CRUNCH</div>
            <div className="text-[#0a0a0a] text-sm md:text-base font-semibold opacity-60 mt-1 uppercase tracking-widest">
              Topping · 46 kcal
            </div>
          </div>
        </div>
      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[#0a0a0a] opacity-50 text-xs uppercase tracking-widest font-semibold">
          Scrolleá
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#0a0a0a] opacity-40">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
