export default function Comparison() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Comparación">
      {/* Split background - INVERTIDO */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div
          className="flex-1 md:flex-none comparison-split-left absolute inset-0"
          style={{ backgroundColor: '#5ce1f0', width: '100%', height: '100%' }}
        />
        <div
          className="comparison-split-right absolute inset-0"
          style={{ backgroundColor: '#b6f542', width: '100%', height: '100%' }}
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

      {/* Empty content area - for future additions */}
      <div className="relative z-10 py-20 md:py-32" />
    </section>
  )
}
