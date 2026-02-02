import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

const BotpressChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Show widget after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Load Botpress Web Chat script
  useEffect(() => {
    // Get credentials from environment variables or use defaults
    const BOTPRESS_BOT_ID = import.meta.env.VITE_BOTPRESS_BOT_ID || 'YOUR_BOT_ID_HERE';
    const BOTPRESS_CLIENT_ID = import.meta.env.VITE_BOTPRESS_CLIENT_ID || 'YOUR_CLIENT_ID_HERE';
    const BOTPRESS_STYLE_ID = import.meta.env.VITE_BOTPRESS_STYLE_ID || '';
    const BOTPRESS_HOST = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';

    // Check if credentials are configured
    if (BOTPRESS_BOT_ID === 'YOUR_BOT_ID_HERE' || BOTPRESS_CLIENT_ID === 'YOUR_CLIENT_ID_HERE') {
      console.warn('Botpress credentials not configured. Please set VITE_BOTPRESS_BOT_ID and VITE_BOTPRESS_CLIENT_ID in your .env file.');
      // Fall back to pattern-based chatbot
      return;
    }

    // Check if script is already loaded
    if (document.getElementById('botpress-webchat-script')) {
      setIsLoaded(true);
      return;
    }

    // Load Botpress script
    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = BOTPRESS_HOST;
    script.async = true;

    script.onload = () => {
      // Initialize Botpress Web Chat
      window.botpressWebChat.init({
        botId: BOTPRESS_BOT_ID,
        clientId: BOTPRESS_CLIENT_ID,
        hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
        messagingUrl: 'https://messaging.botpress.cloud',
        botName: 'Aling Nina',
        botDescription: 'AI Assistant for MSME Pathways',
        hideWidget: true, // We'll use our custom button
        showCloseButton: true,
        showPoweredBy: false,
        stylesheet: BOTPRESS_STYLE_ID ? `https://webchat-styler-css.botpress.app/prod/code/${BOTPRESS_STYLE_ID}.css` : undefined,
        containerWidth: '360px',
        layoutWidth: '360px',
        useSessionStorage: true,
        enableConversationDeletion: true,
        enableTranscriptDownload: false,
        closeOnEscape: true,
        className: 'botpress-chat-widget',
        themeColor: '#3b82f6', // primary-blue
      });

      setIsLoaded(true);

      // Listen to webchat events
      window.botpressWebChat.onEvent((event: any) => {
        if (event.type === 'LIFECYCLE.READY') {
          console.log('Botpress webchat is ready');
        }
      }, 'LIFECYCLE.READY');
    };

    script.onerror = () => {
      console.error('Failed to load Botpress Web Chat');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('botpress-webchat-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleChat = () => {
    if (!isLoaded || !window.botpressWebChat) {
      console.error('Botpress Web Chat not loaded yet');
      return;
    }

    if (isOpen) {
      window.botpressWebChat.sendEvent({ type: 'hide' });
    } else {
      window.botpressWebChat.sendEvent({ type: 'show' });
    }
    
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Button */}
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
          <span className="absolute inset-0 rounded-full bg-primary-blue animate-ping opacity-25" />

          {/* Bot avatar or close icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="relative w-6 h-6 text-white" />
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

      {/* Custom styling for Botpress webchat */}
      <style>{`
        .botpress-chat-widget {
          position: fixed !important;
          bottom: 90px !important;
          right: 24px !important;
          z-index: 40 !important;
        }

        /* Animate the Botpress webchat */
        #bp-web-widget-container {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Custom scrollbar for Botpress chat */
        #bp-web-widget-container ::-webkit-scrollbar {
          width: 6px;
        }

        #bp-web-widget-container ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        #bp-web-widget-container ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        #bp-web-widget-container ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  );
};

export default BotpressChatWidget;
