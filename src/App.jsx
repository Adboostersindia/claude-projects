import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import WhatSection from './components/WhatSection'
import WhySection from './components/WhySection'
import DifferentSection from './components/DifferentSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import { FormModalProvider } from './components/FormModal'

export default function App() {
  return (
    <FormModalProvider>
      <SiteHeader />
      <Hero />
      <WhatSection />
      <WhySection />
      <DifferentSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </FormModalProvider>
  )
}
