import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '@/lib/constants';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-64 h-64 bg-primary-yellow/5 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* Large Decorative Text */}
            <div className="absolute top-32 right-0 pointer-events-none overflow-hidden">
                <span className="text-[180px] md:text-[250px] font-black text-gray-50 leading-none select-none">
                    FAQ
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Header (Sticky) */}
                    <motion.div
                        className="lg:col-span-5 lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <HelpCircle className="w-4 h-4" />
                            FAQ
                        </motion.span>

                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-dark">Mga Karaniwang</span>
                            <br />
                            <span className="text-gradient-blue">Tanong</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8">
                            Narito ang mga sagot sa mga madalas na tanong tungkol sa MSME Pathways
                        </p>

                        {/* Contact Card */}
                        <motion.div
                            className="bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl p-6 text-white"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">May tanong pa?</p>
                                    <p className="text-white/70 text-sm">We're here to help!</p>
                                </div>
                            </div>
                            <a
                                href="mailto:support@msmepathways.ph"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
                            >
                                Contact Support
                                <span>→</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {FAQS.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <div
                                        className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                                ? 'bg-white border-primary-blue/20 shadow-lg'
                                                : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:bg-white'
                                            }`}
                                    >
                                        {/* Question */}
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="flex items-center justify-between w-full p-6 text-left"
                                        >
                                            <span className="flex items-center gap-4">
                                                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${openIndex === index
                                                        ? 'bg-primary-blue text-white'
                                                        : 'bg-gray-200 text-gray-600 group-hover:bg-primary-blue/10 group-hover:text-primary-blue'
                                                    }`}>
                                                    {index + 1}
                                                </span>
                                                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary-blue' : 'text-gray-900'
                                                    }`}>
                                                    {faq.question}
                                                </span>
                                            </span>
                                            <motion.div
                                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                                        ? 'bg-primary-blue text-white'
                                                        : 'bg-gray-100 text-gray-600'
                                                    }`}
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </motion.div>
                                        </button>

                                        {/* Answer */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openIndex === index ? 'auto' : 0,
                                                opacity: openIndex === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pl-[4.5rem]">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider to CTA */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 60V30C360 60 720 10 1080 40C1260 55 1380 25 1440 40V60H0Z"
                        fill="#0A0A0A"
                    />
                </svg>
            </div>
        </section>
    );
};

export default FAQSection;
