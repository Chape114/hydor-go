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

export default function Page() {
  return (
    <main>
      <Hero />
      <Decision />
      <ProductPop />
      <Ticker />
      <ProductCrunch />
      <WhatIsGo />
      <Diferencial />
      <UGC />
      <ArmaTuGo />
      <ClosingCta />
    </main>
  )
}
