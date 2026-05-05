import Hero from '@/components/hero'
import Comparison from '@/components/comparison'
import WhatIsGo from '@/components/what-is-go'
import Diferencial from '@/components/diferencial'
import Decision from '@/components/decision'
import ProductPop from '@/components/product-pop'
import ProductCrunch from '@/components/product-crunch'
import Ticker from '@/components/ticker'
import Simple from '@/components/simple'
import Combo from '@/components/combo'
import DecisionInteractive from '@/components/decision-interactive'
import UGC from '@/components/ugc'
import ArmaTuGo from '@/components/arma-tu-go'
import ClosingCta from '@/components/closing-cta'
import TestClick from '@/components/test-click'

export default function Page() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Hero />
      <Decision />
      <UGC />
      <ProductPop />
      <Ticker />
      <ProductCrunch />
      <WhatIsGo />
      <Diferencial />
      <ArmaTuGo />
      <ClosingCta />
    </main>
  )
}

