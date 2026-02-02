import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    botpress: any;
  }
}

const BotpressChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Your Botpress Bot ID from deployment
  const BOTPRESS_BOT_ID = 'dd48763a-e8cb-4063-972b-8d989dd7fc8b';

  // Show widget after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Load Botpress Web Chat script
  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById('botpress-webchat-script')) {
      setIsLoaded(true);
      return;
    }

    // Load Botpress inject script
    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script.async = true;

    script.onload = () => {
      // Initialize Botpress Web Chat
      if (window.botpress) {
        window.botpress.init({
          botId: BOTPRESS_BOT_ID,
          configuration: {
            botName: 'Aling Nina',
            botDescription: 'AI Assistant para sa MSME Pathways',
            fabIcon: 'bot',
            themeColor: '#3b82f6',
            textColor: '#ffffff',
            showPoweredBy: false,
            enableTranscriptDownload: false,
            closeOnEscape: true,
            containerWidth: '360px',
            layoutWidth: '360px',
            composerPlaceholder: 'Type your message...',
            locale: 'en',
          },
        });

        // Hide the default Botpress button (we use our own)
        window.botpress.on('webchat:ready', () => {
          setIsLoaded(true);
          // Hide default fab button
          const style = document.createElement('style');
          style.textContent = `
            #bp-web-widget-container .bpw-floating-button { display: none !important; }
          `;
          document.head.appendChild(style);
        });
      }
    };

    script.onerror = () => {
      console.error('Failed to load Botpress Web Chat');
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('botpress-webchat-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleChat = () => {
    if (!isLoaded || !window.botpress) {
      console.warn('Botpress not loaded yet');
      return;
    }

    if (isOpen) {
      window.botpress.close();
    } else {
      window.botpress.open();
    }
    
    setIsOpen(!isOpen);
  };

  // Listen for Botpress open/close events
  useEffect(() => {
    if (!window.botpress) return;

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.botpress.on('webchat:opened', handleOpen);
    window.botpress.on('webchat:closed', handleClose);

    return () => {
      window.botpress.off('webchat:opened', handleOpen);
      window.botpress.off('webchat:closed', handleClose);
    };
  }, [isLoaded]);

  if (!isVisible) return null;

  return (
    <>
      {/* Custom Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <motion.button
          onClick={toggleChat}
          className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-blue-700 shadow-lg shadow-primary-blue/30 flex items-center justify-center hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-primary-blue animate-ping opacity-25" />
          )}

          {/* Bot avatar or close icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white text-2xl"
              >
                ✕
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-12 h-12 rounded-full bg-primary-yellow flex items-center justify-center text-2xl"
              >
                🤖
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification badge */}
          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            >
              1
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      {/* Custom styling for Botpress webchat positioning */}
      <style>{`
        #bp-web-widget-container {
          z-index: 40 !important;
        }
        
        #bp-web-widget-container iframe {
          bottom: 90px !important;
          right: 24px !important;
        }
      `}</style>
    </>
  );
};

export default BotpressChatWidget;
