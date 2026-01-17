import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const ChatWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            text: 'Kumusta! Ako si Aling Nina, ang iyong AI assistant. 👋 Paano kita matutulungan today?',
        },
    ]);
    const [input, setInput] = useState('');

    // Show widget after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 10000);
        return () => clearTimeout(timer);
    }, []);

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { from: 'user', text: input }]);

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                'Salamat sa tanong mo! Para makakuha ng loan kahit walang credit history, gagamit tayo ng alternative data like utility bills at business receipts mo.',
                'Maganda yan! Ang MSME Pathways ay 100% free at secure. Hindi kami mangongolekta ng bayad.',
                'Para mag-apply, i-download mo lang ang app at sagutan ang short questionnaire. 3-5 minutes lang!',
                'Good question! Ang interest rates ng mga partner lenders namin ay nasa 2-4% per month, mas mababa kaysa sa 5-6.',
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setMessages((prev) => [...prev, { from: 'bot', text: randomResponse }]);
        }, 1000);

        setInput('');
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
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-blue-700 shadow-lg shadow-primary-blue/30 flex items-center justify-center hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full bg-primary-blue animate-ping opacity-25" />

                        {/* Bot avatar */}
                        <div className="relative w-12 h-12 rounded-full bg-primary-yellow flex items-center justify-center text-2xl">
                            🤖
                        </div>

                        {/* Notification badge */}
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            1
                        </span>
                    </motion.button>
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

                            {/* Quick Questions (only show after first message) */}
                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {quickQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setInput(q);
                                                handleSend();
                                            }}
                                            className="px-3 py-1.5 bg-white border border-primary-blue/30 text-primary-blue text-xs rounded-full hover:bg-primary-blue hover:text-white transition-colors"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center hover:bg-primary-blue-dark transition-colors"
                                >
                                    <Send className="w-4 h-4" />
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
