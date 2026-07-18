import { motion } from 'framer-motion';
import { Bot, Shield, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; eyebrow: string; title: string; description: string }[] = [
    {
        icon: Bot,
        eyebrow: 'Powered by AI',
        title: 'AI Personal Guide',
        description: 'I-eexplain sa’yo ang bawat detail ng loan nang simple at easy to understand. Parang may personal financial advisor ka.',
    },
    {
        icon: UserCheck,
        eyebrow: 'Inclusive lending',
        title: 'No Credit History? No Problem!',
        description: 'Gumagamit kami ng alternative data para i-assess ang iyong capability. Fair at transparent para sa lahat.',
    },
    {
        icon: Shield,
        eyebrow: 'Safe and transparent',
        title: 'Safe, Transparent, at Para Sa’yo',
        description: 'Walang hidden charges. Walang pressure. Tuturuan ka lang at gagabayan sa tamang process.',
    },
];

const FeaturesSection = () => (
    <section id="features" className="msme-section" aria-labelledby="features-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">A clearer way forward</p>
                <h2 id="features-heading">How we can help you</h2>
                <p>Advanced AI technology para gabayan ka sa bawat step ng loan application process.</p>
            </motion.header>

            <div className="msme-card-grid msme-card-grid--three">
                {features.map((feature, index) => (
                    <motion.article
                        key={feature.title}
                        className="msme-card msme-card--feature"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                    >
                        <feature.icon className="msme-card__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                        <span className="msme-card__eyebrow">{feature.eyebrow}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturesSection;
