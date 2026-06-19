import HeroV2 from './components/HeroV2'
import WhyPaySection from './components/WhyPaySection'
import TestimonialSection from './components/TestimonialSection'
import WhatSectionV2 from './components/WhatSectionV2'
import WhySection from './components/WhySection'
import DifferentSection from './components/DifferentSection'
import FounderSection from './components/FounderSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import { FormModalProvider } from './components/FormModal'

export default function AppV2() {
  return (
    <FormModalProvider>
      <HeroV2 />
      <WhyPaySection />
      <TestimonialSection />
      <WhatSectionV2 />
      <WhySection />
      <DifferentSection />
      <FounderSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </FormModalProvider>
  )
}
