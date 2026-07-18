import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

const TEASER_SESSION_KEY = 'msme_chat_teaser_seen';
const TEASER_FALLBACK_KEY = 'msme_chat_teaser_seen_fallback';

declare global {
  interface Window {
    botpress?: {
      open: () => void;
      close: () => void;
      init: (payload: Record<string, unknown>) => void;
      on: (event: string, handler: () => void) => void;
      off: (event: string, handler: () => void) => void;
      restartConversation?: () => Promise<void>;
    };
  }
}

const hasSeenTeaser = () => {
  try {
    return sessionStorage.getItem(TEASER_SESSION_KEY) === '1' || localStorage.getItem(TEASER_FALLBACK_KEY) === '1';
  } catch {
    return false;
  }
};

const BotpressChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTeaser, setShowTeaser] = useState(() => !hasSeenTeaser());
  const [hasInteracted, setHasInteracted] = useState(hasSeenTeaser);

  const BOTPRESS_BOT_ID = import.meta.env.VITE_BOTPRESS_BOT_ID;
  const BOTPRESS_CLIENT_ID = import.meta.env.VITE_BOTPRESS_CLIENT_ID;
  const BOTPRESS_WEBCHAT_ID =
    import.meta.env.VITE_BOTPRESS_WEBCHAT_ID || import.meta.env.VITE_BOTPRESS_STYLE_ID;
  const BOTPRESS_CONFIG_URL = import.meta.env.VITE_BOTPRESS_CONFIG_URL;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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
      return;
    }

    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;

    script.onload = () => {
      if (!window.botpress) return;
      const botpress = window.botpress;

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
        if (typeof botpress.restartConversation === 'function') {
          try {
            await botpress.restartConversation();
          } catch {
            // Ignore warmup errors; the widget can still open and create a conversation lazily.
          }
        }
      };

      botpress.on('webchat:initialized', onWidgetReady);
      botpress.on('webchat:ready', onWidgetReady);

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
    const botpress = window.botpress;

    const handleOpen = () => {
      setIsOpen(true);
      markTeaserSeen();
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    botpress.on('webchat:opened', handleOpen);
    botpress.on('webchat:closed', handleClose);

    return () => {
      botpress.off('webchat:opened', handleOpen);
      botpress.off('webchat:closed', handleClose);
    };
  }, [isLoaded]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        id="msme-chat-launcher"
        className="msme-chat-launcher"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {!isOpen && showTeaser && !hasInteracted && (
          <motion.div
            className="msme-chat-teaser"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="msme-chat-teaser__bubble">
              <button
                type="button"
                onClick={markTeaserSeen}
                className="msme-chat-close"
                aria-label="Close chatbot teaser"
              >
                <X size={14} />
              </button>
              <p className="msme-chat-teaser__title">Need a hand?</p>
              <p className="msme-chat-teaser__copy">Ask about loans, registration, or financial tips.</p>
            </div>
          </motion.div>
        )}

        <motion.button
          onClick={toggleChat}
          className="msme-chat-button"
          aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
                className="msme-chat-button__icon"
              >
                <X size={19} />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
                className="msme-chat-button__icon"
              >
                <MessageSquare size={19} />
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
