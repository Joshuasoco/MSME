import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '@/lib/constants';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="msme-section msme-section--muted" aria-labelledby="faq-heading">
            <div className="msme-container msme-faq-layout">
                <motion.header
                    className="msme-faq-intro"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                    <p className="msme-eyebrow">FAQ</p>
                    <h2 id="faq-heading">Mga karaniwang tanong</h2>
                    <p>Narito ang mga sagot sa mga madalas na tanong tungkol sa MSME Pathways.</p>
                    <a className="msme-button msme-button--text" href="mailto:msmepathways@gmail.com">
                        <MessageCircle size={16} aria-hidden="true" />
                        Contact support
                    </a>
                </motion.header>

                <div className="msme-faq-list">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={faq.question}
                                className={`msme-faq-item${isOpen ? ' is-open' : ''}`}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.22, delay: index * 0.025, ease: 'easeOut' }}
                            >
                                <button
                                    type="button"
                                    className="msme-faq-question"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span><small>0{index + 1}</small>{faq.question}</span>
                                    <ChevronDown size={18} aria-hidden="true" />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            className="msme-faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
