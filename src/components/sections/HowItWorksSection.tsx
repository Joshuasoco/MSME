import { motion } from 'framer-motion';
import { FileCheck, GraduationCap, Smartphone, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const steps: { number: string; icon: LucideIcon; title: string; description: string }[] = [
    { number: '01', icon: Smartphone, title: 'Download ang App', description: 'I-download from Google Play Store—100% free.' },
    { number: '02', icon: GraduationCap, title: 'Learn About Loans', description: 'Free financial education mula sa AI chatbot namin.' },
    { number: '03', icon: FileCheck, title: 'Apply for Pre-qualification', description: 'Answer a simple questionnaire—quick at easy lang.' },
    { number: '04', icon: TrendingUp, title: 'Get Your Loan Options', description: 'Makita ang mga loan na fit para sa iyo.' },
];

const HowItWorksSection = () => (
    <section id="how-it-works" className="msme-section msme-section--muted" aria-labelledby="how-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">Simple by design</p>
                <h2 id="how-heading">From download to next step</h2>
                <p>Four clear steps para mas confident ka sa paghanap ng financing.</p>
            </motion.header>

            <div className="msme-steps">
                {steps.map((step, index) => (
                    <motion.article
                        key={step.number}
                        className="msme-step"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                    >
                        <step.icon className="msme-step__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                        <div>
                            <p className="msme-step__title"><span>{step.number}</span>{step.title}</p>
                            <p>{step.description}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorksSection;
