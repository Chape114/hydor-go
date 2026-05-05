'use client'

import { useEffect, useState } from 'react'

export default function TestClick() {
  const [count, setCount] = useState(0)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <section className="bg-red-600 text-white p-10">
      <p className="text-2xl mb-4">
        Hidratado: <strong>{hydrated ? 'SÍ' : 'NO'}</strong>
      </p>

      <p className="text-2xl mb-6">
        Clicks: <strong>{count}</strong>
      </p>

      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-white text-black px-8 py-5 rounded-xl font-bold"
      >
        TOCAR TEST
      </button>
    </section>
  )
}