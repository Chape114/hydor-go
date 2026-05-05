'use client'

import { useEffect, useRef, useState } from 'react'

type VideoKey = 'pop' | 'crunch'

export default function UGC() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedVideo, setSelectedVideo] = useState<VideoKey>('pop')

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

  const videos = {
    pop: {
      label: 'POP',
      title: 'Abrís. Picás. Seguís.',
      description:
        'El snack salado para esos momentos donde querés algo rico, práctico y con proteína.',
      src: '/videos/hydor-pop.mp4',
      color: '#b6f542',
      badge: 'Snack salado',
      bgClass: 'border-[#b6f542]/25 bg-[#b6f542]/10',
    },
    crunch: {
      label: 'CRUNCH',
      title: 'Lo sumás arriba.',
      description:
        'El topping crocante para mejorar bowls, yogures, ensaladas o comidas simples.',
      src: '/videos/hydor-crunch.mp4',
      color: '#5ce1f0',
      badge: 'Topping proteico',
      bgClass: 'border-[#5ce1f0]/25 bg-[#5ce1f0]/10',
    },
  }

  const current = videos[selectedVideo]

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
      aria-labelledby="ugc-heading"
    >
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[-12%] w-[360px] h-[360px] rounded-full bg-[#b6f542]/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-12%] w-[420px] h-[420px] rounded-full bg-[#5ce1f0]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b6f542]" />
            UGC / Uso real
            <span className="w-2 h-2 rounded-full bg-[#5ce1f0]" />
          </span>

          <h2
            id="ugc-heading"
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-white mb-4"
          >
            Mirá cómo entra
            <br className="hidden md:block" /> en una rutina real
          </h2>

          <p className="text-white/50 font-body text-base md:text-lg max-w-2xl mx-auto">
            Sin vueltas. Sin recetas complejas. Así se usa Hydor GO en el día a día.
          </p>
        </div>

        {/* MOBILE controls */}
        <div className="reveal md:hidden grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setSelectedVideo('pop')}
            className={`rounded-2xl px-4 py-4 text-center font-display text-2xl leading-none transition-all ${
              selectedVideo === 'pop'
                ? 'bg-[#b6f542] text-[#0a0a0a]'
                : 'bg-white/[0.06] text-white'
            }`}
          >
            POP
          </button>

          <button
            type="button"
            onClick={() => setSelectedVideo('crunch')}
            className={`rounded-2xl px-4 py-4 text-center font-display text-2xl leading-none transition-all ${
              selectedVideo === 'crunch'
                ? 'bg-[#5ce1f0] text-[#0a0a0a]'
                : 'bg-white/[0.06] text-white'
            }`}
          >
            CRUNCH
          </button>
        </div>

        {/* MOBILE selected video */}
        <div className="reveal md:hidden">
          <div
            className={`relative rounded-[2rem] border p-4 overflow-hidden ${current.bgClass}`}
          >
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-full blur-3xl opacity-25"
              style={{ backgroundColor: current.color }}
            />

            <div
              className="absolute bottom-0 right-0 w-28 h-28 rounded-full blur-3xl opacity-25"
              style={{ backgroundColor: current.color }}
            />

            <div className="relative z-10 flex justify-center">
              <div className="relative w-full max-w-[270px]">
                <div className="absolute -left-5 top-12 z-20 hidden min-[390px]:block">
                  <div
                    className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rotate-[-8deg]"
                    style={{ backgroundColor: current.color, color: '#0a0a0a' }}
                  >
                    {current.badge}
                  </div>
                </div>

                <div className="absolute -right-5 bottom-16 z-20 hidden min-[390px]:block">
                  <div className="rounded-full bg-white text-[#0a0a0a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rotate-[7deg]">
                    Rutina real
                  </div>
                </div>

                <div className="relative aspect-[9/16] rounded-[1.6rem] overflow-hidden border border-white/15 bg-black">
                  <video
                    key={current.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={current.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-center mt-6">
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ backgroundColor: current.color, color: '#0a0a0a' }}
              >
                {current.label}
              </span>

              <h3 className="font-display text-4xl leading-none text-white mb-3">
                {current.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                {current.description}
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP: dos bloques grandes */}
        <div className="reveal hidden md:grid grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* POP */}
          <div className="relative rounded-[2.5rem] border border-[#b6f542]/25 bg-[#b6f542]/10 p-8 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#b6f542]/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#b6f542]/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="inline-flex rounded-full bg-[#b6f542] text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest mb-5">
                  POP
                </span>

                <h3 className="font-display text-5xl lg:text-6xl leading-none text-white mb-4">
                  Abrís.
                  <br />
                  Picás.
                  <br />
                  Seguís.
                </h3>

                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  El snack salado para esos momentos donde querés algo rico, práctico y con proteína.
                </p>
              </div>

              <div className="relative w-[250px] lg:w-[300px]">
                <div className="absolute -left-8 top-16 z-20">
                  <div className="rounded-full bg-[#b6f542] text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-[-8deg]">
                    Snack salado
                  </div>
                </div>

                <div className="absolute -right-8 bottom-20 z-20">
                  <div className="rounded-full bg-white text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-[7deg]">
                    Sin preparar
                  </div>
                </div>

                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/15 bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hydor-pop.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* CRUNCH */}
          <div className="relative rounded-[2.5rem] border border-[#5ce1f0]/25 bg-[#5ce1f0]/10 p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5ce1f0]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5ce1f0]/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="inline-flex rounded-full bg-[#5ce1f0] text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest mb-5">
                  CRUNCH
                </span>

                <h3 className="font-display text-5xl lg:text-6xl leading-none text-white mb-4">
                  Lo sumás
                  <br />
                  arriba.
                </h3>

                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  El topping crocante para mejorar bowls, yogures, ensaladas o comidas simples.
                </p>
              </div>

              <div className="relative w-[250px] lg:w-[300px]">
                <div className="absolute -left-8 top-16 z-20">
                  <div className="rounded-full bg-[#5ce1f0] text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-[-8deg]">
                    Topping
                  </div>
                </div>

                <div className="absolute -right-8 bottom-20 z-20">
                  <div className="rounded-full bg-white text-[#0a0a0a] px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-[7deg]">
                    A tus comidas
                  </div>
                </div>

                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/15 bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hydor-crunch.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-12 md:mt-16">
          <p className="text-white/50 font-body text-base mb-6">
            ¿Vos también sumaste Hydor GO a tu rutina?
          </p>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#b6f542] font-semibold hover:text-[#b6f542]/80 transition-colors"
          >
            Compartí tu momento
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}