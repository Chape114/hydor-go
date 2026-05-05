'use client'

import { useState } from 'react'

type OptionId = 'pop' | 'crunch' | 'ambos'

export default function ArmaTuGo() {
  const [selected, setSelected] = useState<OptionId>('ambos')
  const [isChanging, setIsChanging] = useState(false)

  const handleSelect = (option: OptionId) => {
    if (option === selected || isChanging) return

    setIsChanging(true)

    window.setTimeout(() => {
      setSelected(option)

      window.setTimeout(() => {
        setIsChanging(false)
      }, 50)
    }, 150)
  }

  const data = {
    pop: {
      eyebrow: 'Snack salado',
      title: 'Te conviene POP',
      shortTitle: 'POP',
      description:
        'Una alternativa real a snacks tradicionales: salado, listo para comer y con proteína vegetal.',
      mobileDescription: 'Para cuando querés picar algo rico, salado y con proteína.',
      image: '/images/hydor-pop.png',
      imageClass: 'w-40 md:w-72 -rotate-6',
      bg: 'bg-[#b6f542]/10',
      border: 'border-[#b6f542]/30',
      glow: 'bg-[#b6f542]/20',
      color: 'text-[#b6f542]',
      button: 'bg-[#b6f542] text-[#0a0a0a]',
      cta: 'Comprar POP',
      href: 'https://www.hydor.com.ar/productos/hydorpop/',
    },
    crunch: {
      eyebrow: 'Topping proteico',
      title: 'Te conviene CRUNCH',
      shortTitle: 'CRUNCH',
      description:
        'Sumá proteína a tus comidas sin cambiar tu rutina. No reemplaza: mejora lo que ya comés.',
      mobileDescription: 'Para sumar textura, crocante y proteína a tus comidas.',
      image: '/images/hydor-crunch.png',
      imageClass: 'w-36 md:w-64 rotate-6',
      bg: 'bg-[#5ce1f0]/10',
      border: 'border-[#5ce1f0]/30',
      glow: 'bg-[#5ce1f0]/20',
      color: 'text-[#5ce1f0]',
      button: 'bg-[#5ce1f0] text-[#0a0a0a]',
      cta: 'Comprar CRUNCH',
      href: 'https://www.hydor.com.ar/productos/hydorcrunch/',
    },
    ambos: {
      eyebrow: 'Combo recomendado',
      title: 'El combo que más sentido tiene',
      shortTitle: 'COMBO',
      description:
        'POP para tus pausas. CRUNCH para tus comidas. Uno reemplaza snacks tradicionales y el otro potencia lo que ya comés.',
      mobileDescription: 'POP para tus pausas. CRUNCH para tus comidas.',
      bg: 'bg-gradient-to-br from-[#b6f542]/10 to-[#5ce1f0]/10',
      border: 'border-white/20',
      glow: 'bg-white/10',
      color: 'text-white',
      button: 'bg-white text-[#0a0a0a]',
      cta: 'Comprar Pack GO',
      href: 'https://www.hydor.com.ar/productos/pack-go/',
    },
  }

  const options: {
    id: OptionId
    icon: string
    title: string
    mobileTitle: string
    subtitle: string
    activeClass: string
  }[] = [
    {
      id: 'pop',
      icon: '🍿',
      title: 'Reemplazar snacks',
      mobileTitle: 'Snacks',
      subtitle: 'POP',
      activeClass: 'bg-[#b6f542] text-[#0a0a0a] border-[#b6f542]',
    },
    {
      id: 'crunch',
      icon: '🥗',
      title: 'Mejorar comidas',
      mobileTitle: 'Comidas',
      subtitle: 'CRUNCH',
      activeClass: 'bg-[#5ce1f0] text-[#0a0a0a] border-[#5ce1f0]',
    },
    {
      id: 'ambos',
      icon: '⚡',
      title: 'Quiero ambos',
      mobileTitle: 'Combo',
      subtitle: 'GO',
      activeClass: 'bg-white text-[#0a0a0a] border-white',
    },
  ]

  const current = data[selected]

  return (
    <section
      id="arma-tu-go"
      className="relative bg-[#0a0a0a] py-16 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-30%] md:left-[-10%] w-[320px] md:w-[360px] h-[320px] md:h-[360px] rounded-full bg-[#b6f542]/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-30%] md:right-[-10%] w-[360px] md:w-[420px] h-[360px] md:h-[420px] rounded-full bg-[#5ce1f0]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/60 mb-5 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b6f542]" />
            Elegí tu GO
            <span className="w-2 h-2 rounded-full bg-[#5ce1f0]" />
          </span>

          <h2 className="font-display text-[clamp(2.7rem,14vw,4.2rem)] md:text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] text-white mb-3 md:mb-4">
            Armá tu GO
          </h2>

          <p className="text-white/50 font-body text-sm md:text-lg">
            ¿Qué necesitás resolver hoy?
          </p>
        </div>

        {/* Botones */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-12">
          {options.map((option) => {
            const isActive = selected === option.id

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                aria-pressed={isActive}
                disabled={isChanging}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border px-2 py-3 md:px-5 md:py-6 text-center md:text-left min-h-[82px] md:min-h-[150px] transition-all duration-300 ease-out active:scale-[0.97] active:opacity-90 disabled:pointer-events-none ${
                  isActive
                    ? `${option.activeClass} md:scale-[1.03] shadow-2xl`
                    : 'bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08] hover:border-white/20 md:hover:-translate-y-1'
                }`}
              >
                <span className="absolute -right-6 -bottom-8 font-display text-[3.5rem] md:text-[6rem] leading-none opacity-[0.08] pointer-events-none">
                  {option.subtitle}
                </span>

                <span className="relative z-10 flex md:items-center md:justify-between justify-center mb-1 md:mb-6">
                  <span
                    className={`text-2xl md:text-4xl transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                  >
                    {option.icon}
                  </span>

                  <span
                    className={`hidden md:flex w-8 h-8 rounded-full border items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'border-[#0a0a0a]/20 bg-[#0a0a0a] text-white'
                        : 'border-white/15 bg-white/[0.04] text-white/40 group-hover:text-white'
                    }`}
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>

                <span className="relative z-10 hidden md:block font-display text-3xl leading-none mb-2">
                  {option.title}
                </span>

                <span className="relative z-10 block md:hidden font-semibold text-[11px] leading-tight">
                  {option.mobileTitle}
                </span>

                <span
                  className={`relative z-10 hidden md:block text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-[#0a0a0a]/60' : 'text-white/35'
                  }`}
                >
                  {option.subtitle}
                </span>
              </button>
            )
          })}
        </div>

        {/* Panel activo */}
        <div
          key={selected}
          className={`relative rounded-[2rem] md:rounded-[2.2rem] p-5 md:p-12 border ${current.bg} ${current.border} overflow-hidden transition-all duration-300 ease-out ${
            isChanging
              ? 'opacity-0 translate-y-3 scale-[0.985]'
              : 'opacity-100 translate-y-0 scale-100 animate-go-panel-in'
          }`}
        >
          <div
            className={`absolute -top-24 -left-24 w-64 md:w-72 h-64 md:h-72 rounded-full blur-3xl ${current.glow}`}
          />

          <div
            className={`absolute -bottom-24 -right-24 w-64 md:w-72 h-64 md:h-72 rounded-full blur-3xl ${current.glow}`}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-5 md:gap-12 items-center">
            {/* Imagen */}
            <div className="relative flex justify-center items-center min-h-[185px] md:min-h-[280px]">
              {selected === 'ambos' ? (
                <div className="relative flex items-end justify-center gap-3 md:gap-6">
                  <img
                    src="/images/hydor-pop.png"
                    alt="Hydor POP"
                    className="w-36 md:w-56 h-auto object-contain -rotate-6 animate-go-product-left"
                  />

                  <img
                    src="/images/hydor-crunch.png"
                    alt="Hydor Crunch"
                    className="w-28 md:w-52 h-auto object-contain rotate-6 animate-go-product-right"
                  />
                </div>
              ) : (
                <img
                  src={selected === 'pop' ? data.pop.image : data.crunch.image}
                  alt={selected === 'pop' ? 'Hydor POP' : 'Hydor Crunch'}
                  className={`${current.imageClass} h-auto object-contain animate-go-product-single`}
                />
              )}

              <div className="absolute left-2 top-2 md:left-8 md:top-8">
                <div
                  className={`rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rotate-[-7deg] ${
                    selected === 'pop'
                      ? 'bg-[#b6f542] text-[#0a0a0a]'
                      : selected === 'crunch'
                        ? 'bg-[#5ce1f0] text-[#0a0a0a]'
                        : 'bg-white text-[#0a0a0a]'
                  }`}
                >
                  {current.eyebrow}
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="text-center md:text-left animate-go-copy-in">
              <span
                className={`inline-flex rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-5 ${
                  selected === 'pop'
                    ? 'bg-[#b6f542]/15 text-[#b6f542] border border-[#b6f542]/20'
                    : selected === 'crunch'
                      ? 'bg-[#5ce1f0]/15 text-[#5ce1f0] border border-[#5ce1f0]/20'
                      : 'bg-white/10 text-white border border-white/15'
                }`}
              >
                {current.eyebrow}
              </span>

              <h3 className={`font-display text-4xl md:text-6xl leading-none mb-4 md:mb-5 ${current.color}`}>
                <span className="md:hidden">{current.shortTitle}</span>
                <span className="hidden md:inline">{current.title}</span>
              </h3>

              <p className="text-white/70 font-body text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                <span className="md:hidden">{current.mobileDescription}</span>
                <span className="hidden md:inline">{current.description}</span>
              </p>

              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 ${current.button} font-semibold px-6 md:px-7 py-3.5 md:py-4 rounded-full text-sm md:text-base hover:opacity-90 transition-all duration-300 ease-out active:scale-[0.97] md:hover:-translate-y-0.5`}
              >
                {current.cta}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h12M9 3l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes go-panel-in {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes go-product-single {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.92) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes go-product-left {
          from {
            opacity: 0;
            transform: translateX(-24px) translateY(16px) rotate(-12deg) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(-6deg) scale(1);
          }
        }

        @keyframes go-product-right {
          from {
            opacity: 0;
            transform: translateX(24px) translateY(16px) rotate(12deg) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(6deg) scale(1);
          }
        }

        @keyframes go-copy-in {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-go-panel-in {
          animation: go-panel-in 520ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-go-product-single {
          animation: go-product-single 560ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-go-product-left {
          animation: go-product-left 620ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-go-product-right {
          animation: go-product-right 620ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-go-copy-in {
          animation: go-copy-in 620ms cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  )
}