import React from 'react';
import ARHeroSection from '@/components/ARHeroSection';
import ARDescriptionSection from '@/components/ARDescriptionSection';
import ARValuePropositionSection from '@/components/ARValuePropositionSection';
import ARTechnicalExecutionSection from '@/components/ARTechnicalExecutionSection';
import ARUseCasesSection from '@/components/ARUseCasesSection';
import ARResultsSection from '@/components/ARResultsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const ARPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131416]">
      <ARHeroSection />
      <ARDescriptionSection />
      <ARValuePropositionSection />
      <ARTechnicalExecutionSection />
      <ARUseCasesSection />
      <ARResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ARPage;