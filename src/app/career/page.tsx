import CareerClientsSection from '@/components/CareerClientsSection'
import CareerHeroSection from '@/components/CareerHeroSection'
import CareerPartnersSection from '@/components/CareerPartnersSection'
import CareerStorySection from '@/components/CareerStorySection'
import CareerTalentSection from '@/components/CareerTalentSection'
import CareerValuesSection from '@/components/CareerValuesSection'
import CareerVisionSection from '@/components/CareerVisionSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'


export default function CareerPage() {
  return (
    <main className="bg-[#131416] min-h-screen">
      <CareerHeroSection />
      <CareerStorySection />
      <CareerClientsSection />
      <CareerPartnersSection />
      <CareerTalentSection />
      <CareerValuesSection />
      <CareerVisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}