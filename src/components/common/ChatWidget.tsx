import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, MessageSquare } from 'lucide-react';

interface Message {
    from: 'user' | 'bot';
    text: string;
}

const ChatWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            from: 'bot',
            text: 'Kumusta! Ako si Aling Nina, ang iyong AI assistant. 👋 Paano kita matutulungan today?',
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Show widget after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 10000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const getAIResponse = async (userMessage: string): Promise<string> => {
        try {
            // Using intelligent pattern matching for chat responses
            // Context: Aling Nina is a helpful Filipino AI assistant for MSME Pathways
            const lowerMessage = userMessage.toLowerCase();

            // Pattern-based responses
            if (lowerMessage.includes('apply') || lowerMessage.includes('mag-apply') || lowerMessage.includes('paano')) {
                return 'Para mag-apply, i-download mo lang ang MSME Pathways app sa Play Store or App Store. Sagutan ang short questionnaire tungkol sa business mo (3-5 minutes lang!), at submit mo ang alternative documents like utility bills o business receipts. 📱✨';
            }
            
            if (lowerMessage.includes('magkano') || lowerMessage.includes('how much') || lowerMessage.includes('amount')) {
                return 'Ang loan amount ay depende sa iyong business income at alternative data. Usually, pwede ka makakuha ng ₱5,000 to ₱50,000 for first-time borrowers. As you build your track record, mas tataas pa yan! 💰';
            }
            
            if (lowerMessage.includes('free') || lowerMessage.includes('bayad') || lowerMessage.includes('fee')) {
                return 'Oo, 100% free ang MSME Pathways platform! Walang application fee, walang processing fee. Ang babayaran mo lang ay yung loan principal plus interest from the lender. We\'re here to help, not to charge! 🎉';
            }
            
            if (lowerMessage.includes('secure') || lowerMessage.includes('safe') || lowerMessage.includes('data') || lowerMessage.includes('privacy')) {
                return 'Super secure ang data mo sa amin! We use bank-level encryption at comply kami sa Data Privacy Act of 2012. Your information is only used to help you get approved for loans. Hindi namin ito ibebenta or ishare without your permission. 🔒';
            }
            
            if (lowerMessage.includes('interest') || lowerMessage.includes('rate') || lowerMessage.includes('hulog')) {
                return 'Ang interest rates ng partner lenders namin ay 2-4% per month lang, mas mababa sa 5-6 na 5-20% per month! Plus, transparent ang terms - no hidden fees. Flexible din ang payment terms depending on your business cycle. 📊';
            }
            
            if (lowerMessage.includes('credit') || lowerMessage.includes('history') || lowerMessage.includes('score')) {
                return 'Good news! Hindi mo kailangan ng credit history or credit score! We use alternative data like your utility bills, business receipts, remittance history, at e-wallet transactions. Perfect para sa mga first-time borrowers! 🌟';
            }
            
            if (lowerMessage.includes('document') || lowerMessage.includes('requirement') || lowerMessage.includes('kailangan')) {
                return 'Simple lang ang requirements! Valid ID, proof of business (kahit receipt or photos lang), at alternative data like utility bills or transaction history. No collateral needed! Pwede kang mag-submit online through the app. 📄';
            }
            
            if (lowerMessage.includes('approve') || lowerMessage.includes('approval') || lowerMessage.includes('gaano katagal')) {
                return 'Ang approval process usually 24-48 hours lang! Once approved, ma-receive mo na ang funds within 1-3 business days. Sobrang bilis compared sa traditional banks na weeks to months! ⚡';
            }

            // Default intelligent response
            return 'Salamat sa tanong mo! Ako si Aling Nina at nandito ako para tulungan ka. Pwede mo akong tanungin about loan application process, requirements, interest rates, or kahit ano related sa MSME Pathways. Just ask away! 😊';

        } catch (error) {
            console.error('Error getting AI response:', error);
            return 'Sorry, may technical issue. Please try again or contact our support team. 🙏';
        }
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');

        // Add user message
        setMessages((prev) => [...prev, { from: 'user', text: userMessage }]);
        setIsLoading(true);

        // Get AI response
        const response = await getAIResponse(userMessage);
        
        // Add bot response with typing delay
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: 'bot', text: response }]);
            setIsLoading(false);
        }, 800);
    };

    const quickQuestions = [
        'Paano mag-apply?',
        'Magkano pwedeng loan?',
        'Free ba ito?',
        'Secure ba data ko?',
    ];

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
                {!isOpen && (
                    <>
                        <motion.div
                            className="absolute bottom-20 right-0 w-[220px] max-w-[calc(100vw-3rem)]"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.28 }}
                        >
                            <div className="relative rounded-2xl border border-[#b7c9f0] bg-white px-4 py-3 shadow-[0_12px_24px_rgba(37,99,235,0.14)]">
                                <div className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">
                                    AI Assistant
                                </div>
                                <p className="mt-2 text-[23px] leading-tight font-semibold text-slate-800">Try our AI chatbot!</p>
                                <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                    Ask about loans, registration, or financial tips - available 24/7.
                                </p>
                                <div className="absolute -bottom-[7px] right-7 h-3.5 w-3.5 rotate-45 border-r border-b border-[#b7c9f0] bg-white" />
                            </div>
                        </motion.div>

                        <motion.button
                            onClick={() => setIsOpen(true)}
                            className="group relative grid h-16 w-16 place-items-center rounded-full border-2 border-[#9ec5ff] bg-[#eaf3ff] shadow-[0_10px_24px_rgba(37,99,235,0.2)] transition-transform hover:scale-105"
                            whileTap={{ scale: 0.95 }}
                            aria-label="Open chat assistant"
                        >
                            <span className="absolute inset-1 rounded-full border-2 border-dashed border-[#8bb9ff]" />
                            <div className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                        </motion.button>
                    </>
                )}
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-blue to-blue-700 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-yellow flex items-center justify-center text-xl">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Aling Nina</p>
                                    <p className="text-white/70 text-xs">AI Assistant • Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.from === 'user'
                                                ? 'bg-primary-blue text-white rounded-br-md'
                                                : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Loading indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="max-w-[80%] px-4 py-3 rounded-2xl text-sm bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Typing...</span>
                                    </div>
                                </motion.div>
                            )}

                            {/* Quick Questions (only show after first message) */}
                            {messages.length === 1 && !isLoading && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {quickQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setInput(q);
                                                setTimeout(handleSend, 100);
                                            }}
                                            className="px-3 py-1.5 bg-white border border-primary-blue/30 text-primary-blue text-xs rounded-full hover:bg-primary-blue hover:text-white transition-colors"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Auto-scroll anchor */}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                                    placeholder="Type your message..."
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center hover:bg-primary-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Send className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            <p className="text-center text-[10px] text-gray-400 mt-2">
                                Powered by MSME Pathways AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
