import { motion } from 'framer-motion';
import { CheckCircle, Gift, Heart, Lock, Sparkles, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: Gift, title: 'Free & Accessible', description: '100% free ang app—walang bayad.' },
    { icon: CheckCircle, title: 'No Credit Check', description: 'Hindi kailangan ng credit check.' },
    { icon: Heart, title: 'Filipino-First', description: 'Designed especially para sa mga Pinoy.' },
    { icon: Sparkles, title: 'AI-Powered', description: 'Smart matching sa right loan for you.' },
    { icon: Lock, title: 'Data Privacy', description: 'Secure at protected ang data mo.' },
    { icon: Users, title: 'Community Driven', description: 'Tumutulong sa kapwa entrepreneurs.' },
];

const BenefitsSection = () => (
    <section id="about" className="msme-section" aria-labelledby="benefits-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">Why MSME Pathways</p>
                <h2 id="benefits-heading">Built for the way you do business</h2>
                <p>Dine-design namin ang app para sa mga Pilipinong negosyante—simple, secure, at accessible.</p>
            </motion.header>

            <div className="msme-card-grid msme-card-grid--three">
                {benefits.map((benefit, index) => (
                    <motion.article
                        key={benefit.title}
                        className="msme-card msme-card--benefit"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                    >
                        <benefit.icon className="msme-card__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default BenefitsSection;
