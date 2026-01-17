import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import EligibilitySection from '@/components/sections/EligibilitySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ChatWidget from '@/components/common/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a
        href="#home"
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <EligibilitySection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
