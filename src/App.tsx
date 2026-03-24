import { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LoadingScreen from '@/components/common/LoadingScreen';
import CookieConsent from '@/components/common/CookieConsent';
import SEOHead from '@/components/common/SEOHead';
import BotpressChatWidget from '@/components/common/BotpressChatWidget';
import { ToastContainer } from '@/components/ui/toast';
import { useToast } from '@/hooks/useToast';
import { Toaster } from 'sileo';

// Lazy load below-fold sections for better performance
const ProblemSection = lazy(() => import('@/components/sections/ProblemSection'));
const FeaturesSection = lazy(() => import('@/components/sections/FeaturesSection'));
const EligibilitySection = lazy(() => import('@/components/sections/EligibilitySection'));
const HowItWorksSection = lazy(() => import('@/components/sections/HowItWorksSection'));
const BenefitsSection = lazy(() => import('@/components/sections/BenefitsSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const StatsSection = lazy(() => import('@/components/sections/StatsSection'));
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

// Section loading fallback
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    // Simulate initial load / wait for fonts
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      {/* SEO Meta Tags */}
      <SEOHead />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        offset={{ top: 96 }}
        theme="light"
        options={{
          roundness: 20,
          fill: '#0b1220',
          duration: 4200,
          styles: {
            title: '!text-sky-300 !font-semibold',
            description: '!text-slate-100/90',
            badge: '!bg-sky-500/25 !text-sky-200',
            button: '!text-white !bg-white/10 hover:!bg-white/20',
          },
        }}
      />
      <ToastContainer toasts={toasts.map(t => ({ ...t, onClose: removeToast }))} />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-blue focus:text-white focus:rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" role="main">
          <HeroSection />
          
          <Suspense fallback={<SectionLoader />}>
            <ProblemSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <FeaturesSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <EligibilitySection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <HowItWorksSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <BenefitsSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <TestimonialsSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <StatsSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <FAQSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <CTASection />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* Chatbot */}
        <BotpressChatWidget />
      </div>
    </ErrorBoundary>
  );
}

export default App;
