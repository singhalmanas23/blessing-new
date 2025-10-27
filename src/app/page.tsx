import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import MissionVisionSection from '@/components/MissionVisionSection'
import GlobalPresenceSection from '@/components/GlobalPresenceSection'
import InnovationCultureSection from '@/components/InnovationCultureSection'
import LeadershipSection from '@/components/LeadershipSection'
import LeadershipGuidanceSection from '@/components/LeadershipGuidanceSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131416]">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <GlobalPresenceSection />
      <InnovationCultureSection />
      <LeadershipSection />
      <LeadershipGuidanceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
