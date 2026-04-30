'use client'

import { useState } from 'react'

type OptionId = 'pop' | 'crunch' | 'ambos'

export default function ArmaTuGo() {
  const [selected, setSelected] = useState<OptionId>('ambos')

  const data = {
    pop: {
      title: 'Te conviene POP',
      description:
        'Una alternativa real a snacks tradicionales: salado, listo para comer y con proteína vegetal.',
      image: '/images/hydor-pop.png',
      bg: 'bg-[#b6f542]/10',
      border: 'border-[#b6f542]/30',
      color: 'text-[#b6f542]',
      cta: 'Comprar POP',
      href: 'https://www.hydor.com.ar/productos/hydorpop/',
    },
    crunch: {
      title: 'Te conviene CRUNCH',
      description:
        'Sumá proteína a tus comidas sin cambiar tu rutina. No reemplaza: mejora lo que ya comés.',
      image: '/images/hydor-crunch.png',
      bg: 'bg-[#5ce1f0]/10',
      border: 'border-[#5ce1f0]/30',
      color: 'text-[#5ce1f0]',
      cta: 'Comprar CRUNCH',
      href: 'https://www.hydor.com.ar/productos/hydorcrunch/',
    },
    ambos: {
      title: 'El combo que más sentido tiene',
      description:
        'POP para tus pausas. CRUNCH para tus comidas. Uno reemplaza snacks tradicionales y el otro potencia lo que ya comés.',
      bg: 'bg-gradient-to-br from-[#b6f542]/10 to-[#5ce1f0]/10',
      border: 'border-white/20',
      color: 'text-white',
    },
  }

  const current = data[selected]

  return (
    <section
      id="arma-tu-go"
      className="bg-[#0a0a0a] py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-tight text-white mb-4">
            Armá tu GO
          </h2>
          <p className="text-white/50 font-body text-lg">
            ¿Qué necesitás resolver hoy?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => setSelected('pop')}
            className={`rounded-2xl p-6 text-center transition-all ${
              selected === 'pop'
                ? 'bg-[#b6f542] text-[#0a0a0a] scale-105'
                : 'bg-white/[0.04] text-white hover:bg-white/[0.08]'
            }`}
          >
            <div className="text-4xl mb-3">🍿</div>
            <h3 className="font-semibold text-base">Reemplazar snacks</h3>
          </button>

          <button
            onClick={() => setSelected('crunch')}
            className={`rounded-2xl p-6 text-center transition-all ${
              selected === 'crunch'
                ? 'bg-[#5ce1f0] text-[#0a0a0a] scale-105'
                : 'bg-white/[0.04] text-white hover:bg-white/[0.08]'
            }`}
          >
            <div className="text-4xl mb-3">🥗</div>
            <h3 className="font-semibold text-base">Mejorar comidas</h3>
          </button>

          <button
            onClick={() => setSelected('ambos')}
            className={`rounded-2xl p-6 text-center transition-all ${
              selected === 'ambos'
                ? 'bg-white text-[#0a0a0a] scale-105'
                : 'bg-white/[0.04] text-white hover:bg-white/[0.08]'
            }`}
          >
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-base">Ambos</h3>
          </button>
        </div>

        <div className={`rounded-3xl p-8 md:p-12 border ${current.bg} ${current.border}`}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center items-center min-h-[260px]">
              {selected === 'ambos' ? (
                <div className="flex items-end justify-center gap-6">
                  <img
                    src="/images/hydor-pop.png"
                    alt="Hydor POP"
                    className="w-36 md:w-48 h-auto object-contain drop-shadow-2xl -rotate-6"
                  />
                  <img
                    src="/images/hydor-crunch.png"
                    alt="Hydor Crunch"
                    className="w-32 md:w-44 h-auto object-contain drop-shadow-2xl rotate-6"
                  />
                </div>
              ) : (
                <img
                  src={selected === 'pop' ? '/images/hydor-pop.png' : '/images/hydor-crunch.png'}
                  alt={selected === 'pop' ? 'Hydor POP' : 'Hydor Crunch'}
                  className="w-44 md:w-64 h-auto object-contain drop-shadow-2xl"
                />
              )}
            </div>

            <div>
              <h3 className={`font-display text-3xl md:text-5xl leading-none mb-5 ${current.color}`}>
                {current.title}
              </h3>

              <p className="text-white/70 font-body text-lg leading-relaxed mb-8">
                {current.description}
              </p>

              {selected === 'ambos' ? (
                <a
                  href="https://www.hydor.com.ar/productos/pack-go/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0a0a0a] font-semibold px-6 py-3 rounded-full text-base hover:opacity-90 transition-opacity"
                >
                  Comprar Pack GO →
                </a>
              ) : (
                <a
                  href={current.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 ${
                    selected === 'pop'
                      ? 'bg-[#b6f542]'
                      : 'bg-[#5ce1f0]'
                  } text-[#0a0a0a] font-semibold px-6 py-3 rounded-full text-base hover:opacity-90 transition-opacity`}
                >
                  {current.cta} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}