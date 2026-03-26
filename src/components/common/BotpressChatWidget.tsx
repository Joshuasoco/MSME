import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

declare global {
  interface Window {
    botpress: any;
  }
}

const TEASER_SESSION_KEY = 'msme_chat_teaser_seen';
const TEASER_FALLBACK_KEY = 'msme_chat_teaser_seen_fallback';

const BotpressChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const BOTPRESS_BOT_ID = import.meta.env.VITE_BOTPRESS_BOT_ID;
  const BOTPRESS_CLIENT_ID = import.meta.env.VITE_BOTPRESS_CLIENT_ID;
  const BOTPRESS_WEBCHAT_ID =
    import.meta.env.VITE_BOTPRESS_WEBCHAT_ID || import.meta.env.VITE_BOTPRESS_STYLE_ID;
  const BOTPRESS_CONFIG_URL = import.meta.env.VITE_BOTPRESS_CONFIG_URL;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    try {
      const hasSeenTeaser =
        sessionStorage.getItem(TEASER_SESSION_KEY) === '1' ||
        localStorage.getItem(TEASER_FALLBACK_KEY) === '1';
      setShowTeaser(!hasSeenTeaser);
      setHasInteracted(hasSeenTeaser);
    } catch {
      setShowTeaser(true);
    }
  }, [isVisible]);

  const markTeaserSeen = () => {
    setHasInteracted(true);
    setShowTeaser(false);
    try {
      sessionStorage.setItem(TEASER_SESSION_KEY, '1');
      localStorage.setItem(TEASER_FALLBACK_KEY, '1');
    } catch {
      try {
        localStorage.setItem(TEASER_FALLBACK_KEY, '1');
      } catch {
        // Ignore storage errors (private mode, etc.)
      }
    }
  };

  // If user interacts with any Botpress widget surface, dismiss teaser immediately.
  useEffect(() => {
    const handleAnyChatInteraction = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const interactedWithLauncher = Boolean(target.closest('#msme-chat-launcher'));
      const interactedWithBotpress = Boolean(target.closest('#bp-web-widget-container'));

      if (interactedWithLauncher || interactedWithBotpress) {
        markTeaserSeen();
      }
    };

    document.addEventListener('pointerdown', handleAnyChatInteraction, true);
    return () => document.removeEventListener('pointerdown', handleAnyChatInteraction, true);
  }, []);

  useEffect(() => {
    const hasConfigScript =
      Boolean(BOTPRESS_CONFIG_URL) && BOTPRESS_CONFIG_URL !== 'your_webchat_config_url_here';

    if (!hasConfigScript) {
      if (!BOTPRESS_BOT_ID || BOTPRESS_BOT_ID === 'your_bot_id_here') {
        console.error('Botpress botId not configured. Add VITE_BOTPRESS_BOT_ID to .env');
        return;
      }

      if (!BOTPRESS_CLIENT_ID || BOTPRESS_CLIENT_ID === 'your_client_id_here') {
        console.error('Botpress clientId not configured. Add VITE_BOTPRESS_CLIENT_ID to .env');
        return;
      }
    }

    if (document.getElementById('botpress-webchat-script')) {
      if (window.botpress) {
        setIsLoaded(true);
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;

    script.onload = () => {
      if (!window.botpress) return;

      const onWidgetReady = async () => {
        setIsLoaded(true);

        if (!document.getElementById('botpress-hide-default-fab')) {
          const style = document.createElement('style');
          style.id = 'botpress-hide-default-fab';
          style.textContent =
            '#bp-web-widget-container .bpw-floating-button, .bpFabWrapper { display: none !important; }';
          document.head.appendChild(style);
        }

        // Pre-create a clean conversation to avoid race conditions when users send the first message quickly.
        if (typeof window.botpress.restartConversation === 'function') {
          try {
            await window.botpress.restartConversation();
          } catch {
            // Ignore warmup errors; the widget can still open and create a conversation lazily.
          }
        }
      };

      window.botpress.on('webchat:initialized', onWidgetReady);
      window.botpress.on('webchat:ready', onWidgetReady);

      if (hasConfigScript) {
        const configScript = document.createElement('script');
        configScript.id = 'botpress-webchat-config-script';
        configScript.src = BOTPRESS_CONFIG_URL;
        configScript.defer = true;
        configScript.onerror = () => {
          console.error('Failed to load Botpress Webchat config script');
        };
        document.body.appendChild(configScript);
        return;
      }

      const initPayload: Record<string, unknown> = {
        botId: BOTPRESS_BOT_ID,
        clientId: BOTPRESS_CLIENT_ID,
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
      };

      const hasWebchatId =
        Boolean(BOTPRESS_WEBCHAT_ID) &&
        BOTPRESS_WEBCHAT_ID !== 'your_webchat_id_here' &&
        BOTPRESS_WEBCHAT_ID !== 'your_style_id_here';

      if (hasWebchatId) {
        initPayload.webchatId = BOTPRESS_WEBCHAT_ID;
        initPayload.webhookId = BOTPRESS_WEBCHAT_ID;
      }

      window.botpress.init(initPayload);
    };

    script.onerror = () => {
      console.error('Failed to load Botpress Web Chat');
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('botpress-webchat-script');
      if (existingScript) existingScript.remove();

      const configScript = document.getElementById('botpress-webchat-config-script');
      if (configScript) configScript.remove();

      const hideFabStyle = document.getElementById('botpress-hide-default-fab');
      if (hideFabStyle) hideFabStyle.remove();
    };
  }, [BOTPRESS_BOT_ID, BOTPRESS_CLIENT_ID, BOTPRESS_WEBCHAT_ID, BOTPRESS_CONFIG_URL]);

  const toggleChat = () => {
    // Treat any click as user interaction, hide teaser for this session immediately.
    markTeaserSeen();

    if (!isLoaded || !window.botpress) {
      console.warn('Botpress not loaded yet');
      return;
    }

    if (!isOpen) {
      setIsOpen(true);
      window.botpress.open();
    } else {
      setIsOpen(false);
      window.botpress.close();
    }
  };

  useEffect(() => {
    if (!isLoaded || !window.botpress) return;

    const handleOpen = () => {
      setIsOpen(true);
      markTeaserSeen();
    };

    const handleClose = () => {
      setIsOpen(false);
    };

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
      <motion.div
        id="msme-chat-launcher"
        className="fixed bottom-6 right-6 z-[60]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {!isOpen && showTeaser && !hasInteracted && (
          <motion.div
            className="absolute bottom-20 right-0 w-[220px] max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28 }}
          >
            <div className="relative rounded-2xl border border-[#b7c9f0] bg-white px-4 py-3 shadow-[0_12px_24px_rgba(37,99,235,0.14)]">
              <button
                type="button"
                onClick={markTeaserSeen}
                className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close chatbot teaser"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">
                AI Assistant
              </div>
              <p className="mt-2 text-base leading-tight font-semibold text-slate-800">Try our AI chatbot!</p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                Ask about loans, registration, or financial tips - available 24/7.
              </p>
              <div className="absolute -bottom-[7px] right-7 h-3.5 w-3.5 rotate-45 border-r border-b border-[#b7c9f0] bg-white" />
            </div>
          </motion.div>
        )}

        <motion.button
          onClick={toggleChat}
          className="group relative grid h-16 w-16 place-items-center rounded-full border-2 border-[#9ec5ff] bg-[#eaf3ff] shadow-[0_10px_24px_rgba(37,99,235,0.2)] transition-transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        >
          <span className="absolute inset-1 rounded-full border-2 border-dashed border-[#8bb9ff]" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
                className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-white"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
                className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm"
              >
                <MessageSquare className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <style>{`
        #bp-web-widget-container {
          z-index: 50 !important;
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
