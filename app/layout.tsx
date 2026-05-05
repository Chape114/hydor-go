import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hydor GO — Pura proteína para tu rutina',
  description:
    'Hydor GO es la nueva línea de snacks y toppings proteicos. POP: snack vegetal listo para comer. Crunch: topping proteico para tus comidas. 11g de proteína, sin TACC.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#0a0a0a]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400;900&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}