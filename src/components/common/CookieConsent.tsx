import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openPrivacyPolicy = () => {
    window.dispatchEvent(new CustomEvent('msme:open-legal', { detail: 'privacy' }));
    setIsVisible(false);
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after 2 seconds for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-primary-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary-yellow" />
                </div>
                <p className="text-sm text-gray-600">
                  We use cookies to improve your experience and analyze site traffic. 
                  By continuing, you agree to our{' '}
                  <button
                    type="button"
                    onClick={openPrivacyPolicy}
                    className="text-primary-blue hover:underline"
                  >
                    Privacy Policy
                  </button>.
                </p>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={declineCookies}
                  className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-6 py-2 bg-primary-blue text-white text-sm font-medium rounded-full hover:bg-primary-blue-dark transition-colors"
                >
                  Accept All
                </button>
              </div>
              <button
                onClick={declineCookies}
                className="absolute top-2 right-2 md:static p-1 text-gray-400 hover:text-gray-600"
                aria-label="Close cookie consent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
