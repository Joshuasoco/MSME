import { motion } from 'framer-motion';
import { ArrowRight, FileText, Tag, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const proofPoints: { icon: LucideIcon; title: string; description: string; href: string }[] = [
    { icon: FileText, title: 'Alternative data assessment', description: 'Build a clearer picture of your business beyond a traditional credit score.', href: '#features' },
    { icon: Zap, title: 'Fast and easy application', description: 'Apply in minutes from your phone—no lines, no unnecessary paperwork.', href: '#eligibility' },
    { icon: Tag, title: 'Zero hidden fees', description: 'Transparency is our promise. Know what you are signing up for.', href: '#faq' },
];

const StatsSection = () => (
    <section id="stats" className="msme-section msme-section--muted" aria-labelledby="stats-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header msme-section-header--compact"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">Designed around your reality</p>
                <h2 id="stats-heading">The details matter</h2>
            </motion.header>

            <div className="msme-card-grid msme-card-grid--three">
                {proofPoints.map((point, index) => (
                    <motion.article
                        key={point.title}
                        className="msme-card msme-card--proof"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                    >
                        <point.icon className="msme-card__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                        <a className="msme-inline-link" href={point.href}>
                            Learn more <ArrowRight size={15} aria-hidden="true" />
                        </a>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;
