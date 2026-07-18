import { motion } from 'framer-motion';
import { Building2, CircleX, FileQuestion } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PROBLEMS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = { CircleX, FileQuestion, Building2 };

const ProblemSection = () => (
    <section id="problem" className="msme-section msme-section--muted" aria-labelledby="problem-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">The current reality</p>
                <h2 id="problem-heading">Bakit mahirap kumuha ng loan?</h2>
                <p>Common na problema ng micro-entrepreneurs at freelancers sa Pilipinas.</p>
            </motion.header>

            <div className="msme-card-grid msme-card-grid--three">
                {PROBLEMS.map((problem, index) => {
                    const Icon = iconMap[problem.icon];
                    return (
                        <motion.article
                            key={problem.title}
                            className="msme-card msme-card--problem"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                        >
                            <Icon className="msme-card__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                            <span className="msme-card__number">0{index + 1}</span>
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ProblemSection;
