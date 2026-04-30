export default function Ticker() {
  const words = [
    'OFICINA',
    'GYM',
    'ESTUDIO',
    'VIAJES',
    'ENSALADAS',
    'BOWLS',
    'ENTRENAMIENTOS',
    'TRABAJO REMOTO',
    'MEDIA MAÑANA',
    'SNACK NOCTURNO',
  ]

  const doubled = [...words, ...words]

  return (
    <div
      className="bg-[#b6f542] py-5 overflow-hidden border-y-4 border-[#0a0a0a]"
      aria-label="Momentos de uso: Oficina, Gym, Estudio, Viajes, Ensaladas, Bowls"
    >
      <div className="ticker-track">
        {doubled.map((word, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-2xl text-[#0a0a0a] mx-6 flex-shrink-0 flex items-center gap-6"
          >
            {word}
            <span className="inline-block w-2 h-2 rounded-full bg-[#0a0a0a] flex-shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
