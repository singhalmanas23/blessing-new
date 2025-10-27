import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

import { UIHeroSection } from "@/components/UIHeroSection";
import { UIDescriptionSection } from "@/components/UIDescriptionSection";
import { UIApproachSection } from "@/components/UIApproachSection";
import { UIPrototypeSection } from "@/components/UIPrototypeSection";
import { UIResultsSection } from "@/components/UIResultsSection";

export default function UIPage() {
  return (
    <main className="min-h-screen bg-[#131416]">
      <UIHeroSection />
      <UIDescriptionSection />
      <UIApproachSection />
      <UIPrototypeSection />
      <UIResultsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}