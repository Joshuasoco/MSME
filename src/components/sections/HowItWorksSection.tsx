import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, GraduationCap, FileCheck, TrendingUp, ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

const steps = [
    {
        number: '01',
        icon: Smartphone,
        title: 'Download ang App',
        description: 'I-download from Google Play Store - 100% free.',
        color: 'from-blue-500 to-blue-600',
    },
    {
        number: '02',
        icon: GraduationCap,
        title: 'Learn About Loans',
        description: 'Free financial education mula sa AI chatbot namin.',
        color: 'from-emerald-500 to-emerald-600',
    },
    {
        number: '03',
        icon: FileCheck,
        title: 'Apply for Pre-qualification',
        description: 'Answer a simple questionnaire - quick at easy lang.',
        color: 'from-violet-500 to-violet-600',
    },
    {
        number: '04',
        icon: TrendingUp,
        title: 'Get Your Loan Options',
        description: 'Makita ang mga loan na fit para sa iyo.',
        color: 'from-amber-500 to-amber-600',
    },
];

const HowItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const allowAmbientMotion = !prefersReducedMotion && !isMobile;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="how-it-works"
            className="relative py-24 md:py-32 bg-gradient-to-br from-primary-blue via-blue-700 to-indigo-900 overflow-hidden"
        >
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                    animate={allowAmbientMotion ? { scale: [1, 1.15, 1], x: [0, 20, 0] } : undefined}
                    transition={allowAmbientMotion ? { duration: 8, repeat: Infinity } : undefined}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-80 h-80 bg-primary-yellow/10 rounded-full blur-3xl"
                    animate={allowAmbientMotion ? { scale: [1.1, 1, 1.1], y: [0, -25, 0] } : undefined}
                    transition={allowAmbientMotion ? { duration: 10, repeat: Infinity } : undefined}
                />

                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold mb-4"
                        whileHover={{ scale: 1.04 }}
                    >
                        Super Easy
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        How It <span className="text-primary-yellow">Works</span>
                    </h2>

                    <p className="text-xl text-white/75 max-w-2xl mx-auto">
                        Just 4 simple steps para makapagsimula ka.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
                        viewBox="0 0 800 600"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <motion.path
                            d="M 100 50 L 250 180 L 550 180 L 700 310 L 400 310 L 250 440 L 550 440 L 700 570"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="1000"
                            style={{
                                strokeDashoffset: useTransform(lineProgress, [0, 1], [1000, 0]),
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFC107" />
                                <stop offset="50%" stopColor="#FFCA28" />
                                <stop offset="100%" stopColor="#FFC107" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="space-y-8 lg:space-y-0">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.55, delay: index * 0.12 }}
                                    className={`relative flex items-center gap-6 lg:gap-12 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}
                                    style={{
                                        marginTop: index > 0 && index % 2 === 0 ? '-1rem' : '0',
                                    }}
                                >
                                    <motion.div
                                        className={`group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 max-w-md w-full hover:bg-white/15 transition-all duration-300 ${isEven ? '' : 'lg:order-2'}`}
                                        whileHover={allowAmbientMotion ? { scale: 1.02, y: -4 } : undefined}
                                    >
                                        <div className="absolute top-4 right-4 text-[80px] font-black text-white/5 leading-none select-none group-hover:text-white/10 transition-colors">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <motion.div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}
                                                whileHover={{ scale: 1.08, rotate: -4 }}
                                            >
                                                <step.icon className="w-8 h-8 text-white" />
                                            </motion.div>

                                            <span className="text-primary-yellow font-bold text-sm tracking-wider uppercase mb-2 block">
                                                Step {step.number}
                                            </span>

                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-yellow transition-colors">
                                                {step.title}
                                            </h3>

                                            <p className="text-white/75 text-lg leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2"
                                            animate={allowAmbientMotion ? { y: [0, 5, 0] } : undefined}
                                            transition={allowAmbientMotion ? { duration: 1.5, repeat: Infinity } : undefined}
                                        >
                                            <ArrowDown className="w-6 h-6 text-primary-yellow" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="#cta"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-yellow hover:bg-primary-yellow-dark text-dark font-bold text-lg rounded-full shadow-lg shadow-primary-yellow/30 transition-all duration-300"
                        >
                            Start Your Journey
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
