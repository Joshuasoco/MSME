import HeroSection from '@/components/sections/HeroSection';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import SEOHead from '@/components/common/SEOHead';

function App() {
  return (
    <ErrorBoundary>
      <SEOHead />

      <div className="msme-coming-soon">
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        <main id="main-content" role="main">
          <HeroSection />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
