'use client'

import { useEffect, useRef, useState } from 'react'

export default function UGC() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

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

  const videos = [
    { id: 'snap1', tag: 'Snack en oficina', duration: '0:15' },
    { id: 'snap2', tag: 'Entre comidas', duration: '0:18' },
    { id: 'snap3', tag: 'Ensalada con crunch', duration: '0:22' },
    { id: 'snap4', tag: 'Bowl proteico', duration: '0:20' },
    { id: 'snap5', tag: 'Para llevar', duration: '0:16' },
    { id: 'snap6', tag: 'Meal prep', duration: '0:25' },
  ]

  const handleScroll = (direction: 'left' | 'right') => {
    const container = sectionRef.current?.querySelector('[data-scroll-container]')
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="ugc-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2
            id="ugc-heading"
            className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-tight text-white mb-4"
          >
            Mirá cómo entra en una rutina real
          </h2>
          <p className="text-white/50 font-body text-lg">
            Sin vueltas. Sin recetas complejas. Así se usa en el día a día.
          </p>
        </div>

        {/* Carousel container */}
        <div className="reveal relative">
          {/* Scroll container */}
          <div
            data-scroll-container
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
              >
                {/* Video card */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#b6f542]/10 to-[#5ce1f0]/10 border border-white/10 hover:border-white/20 transition-all duration-300 h-96">
                  {/* Placeholder video frame */}
                  <div className="w-full h-full bg-gradient-to-b from-[#b6f542]/20 to-[#5ce1f0]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-white/70 font-body text-sm">{video.duration}</p>
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 text-white text-xs px-3 py-1 rounded-full">
                    {video.duration}
                  </div>

                  {/* Tag badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent p-4 pt-8">
                    <span className="inline-block bg-[#b6f542]/20 text-[#b6f542] text-xs font-semibold px-3 py-1 rounded-full">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-white/50 font-body text-base mb-6">
            ¿Vos también sumaste Hydor a tu rutina?
          </p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#b6f542] font-semibold hover:text-[#b6f542]/80 transition-colors"
          >
            Comparte tu momento
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
