'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Combo() {
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
      className="bg-[#0a0a0a] py-24 md:py-36 px-6 overflow-hidden"
      aria-labelledby="combo-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-white/30" />
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">El combo perfecto</span>
        </div>

        <h2
          id="combo-heading"
          className="reveal font-display text-[clamp(2.5rem,6vw,6rem)] text-white leading-none mb-6"
        >
          EL COMBO QUE
          <br />
          MÁS <span className="text-[#b6f542]">SENTIDO</span> TIENE.
        </h2>

        <p className="reveal text-white/60 font-body text-lg leading-relaxed max-w-2xl mb-12">
          <strong className="text-white">POP:</strong> reemplaza snacks entre comidas
        </p>
        <p className="reveal text-white/60 font-body text-lg leading-relaxed max-w-2xl mb-12">
          <strong className="text-white">CRUNCH:</strong> mejora comidas sin cambiar hábitos
        </p>
        <p className="reveal text-white/60 font-body text-lg leading-relaxed max-w-2xl mb-16">
          Uno reemplaza lo que no suma. El otro potencia lo que ya hacés.
        </p>

        {/* Products */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          {/* POP combo */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#b6f542]/10 border border-[#b6f542]/20 p-8 hover:bg-[#b6f542]/20 transition-colors">
            <div className="flex items-end gap-6">
              <Image
                src="/images/hydor-pop.jpg"
                alt="Hydor POP"
                width={120}
                height={150}
                className="product-img flex-shrink-0"
              />
              <div>
                <div className="font-display text-5xl text-[#b6f542] mb-2">POP</div>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  Para el hambre de las 10. Para el viaje. Para cuando el snack de siempre ya no alcanza.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[#b6f542] text-sm font-semibold">
              <span className="w-6 h-px bg-[#b6f542]" />
              Snack listo para comer
            </div>
          </div>

          {/* Crunch combo */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#5ce1f0]/10 border border-[#5ce1f0]/20 p-8 hover:bg-[#5ce1f0]/20 transition-colors">
            <div className="flex items-end gap-6">
              <Image
                src="/images/hydor-crunch.jpg"
                alt="Hydor Crunch"
                width={120}
                height={150}
                className="product-img flex-shrink-0"
              />
              <div>
                <div className="font-display text-5xl text-[#5ce1f0] mb-2">CRUNCH</div>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  Para el almuerzo, la cena, el bowl del domingo. Proteína extra sin cambiar lo que ya amás.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[#5ce1f0] text-sm font-semibold">
              <span className="w-6 h-px bg-[#5ce1f0]" />
              Topping que suma sin notar
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
