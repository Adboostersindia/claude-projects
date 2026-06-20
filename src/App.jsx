import Hero from './components/Hero'
import WhatSection from './components/WhatSection'
import DifferentSection from './components/DifferentSection'
import TestimonialSection from './components/TestimonialSection'
import FounderSection from './components/FounderSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import { FormModalProvider } from './components/FormModal'

export default function App() {
  return (
    <FormModalProvider>
      <Hero />
      <WhatSection />
      <DifferentSection />
      <TestimonialSection />
      <FounderSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </FormModalProvider>
  )
}
