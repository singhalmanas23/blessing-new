import MLHeroSection from "@/components/MLHeroSection";
import { MLDescriptionSection } from "@/components/MLDescriptionSection";
import MLBusinessValueSection from "@/components/MLBusinessValueSection";
import MLTechnicalExecutionSection from "@/components/MLTechnicalExecutionSection";
import MLUseCasesSection from "@/components/MLUseCasesSection";
import MLWhyBSTSection from "@/components/MLWhyBSTSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function MLPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section with Navigation */}
      <MLHeroSection />

      {/* Description Section */}
      <MLDescriptionSection />

      {/* Business Value Section with Statistics */}
      <MLBusinessValueSection />

      {/* Technical Execution Section with Tools */}
      <MLTechnicalExecutionSection />

      {/* Use Cases Section */}
      <MLUseCasesSection />

      {/* Why BST Section */}
      <MLWhyBSTSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
