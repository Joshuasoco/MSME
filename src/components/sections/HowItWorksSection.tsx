import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, GraduationCap, FileCheck, TrendingUp, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        number: '01',
        icon: Smartphone,
        title: 'Download ang App',
        description: 'I-download from Google Play Store - 100% free!',
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
        description: 'Answer a simple questionnaire - quick at easy lang!',
        color: 'from-violet-500 to-violet-600',
    },
    {
        number: '04',
        icon: TrendingUp,
        title: 'Get Your Loan Options',
        description: 'Makita ang mga loan na perfect fit para sa\'yo.',
        color: 'from-amber-500 to-amber-600',
    },
];

const HowItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="how-it-works"
            className="relative py-24 md:py-32 bg-gradient-to-br from-primary-blue via-blue-700 to-indigo-900 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        🎯 Super Easy
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        How It{' '}
                        <span className="text-primary-yellow">Works</span>
                    </h2>

                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Just 4 simple steps para makapagsimula ka
                    </p>
                </motion.div>

                {/* Diagonal Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Diagonal Line - SVG Path */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
                        viewBox="0 0 800 600"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 100 50 L 250 180 L 550 180 L 700 310 L 400 310 L 250 440 L 550 440 L 700 570"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="1000"
                            style={{
                                strokeDashoffset: useTransform(lineProgress, [0, 1], [1000, 0])
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

                    {/* Steps */}
                    <div className="space-y-8 lg:space-y-0">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-center gap-6 lg:gap-12 ${isEven ? 'lg:justify-start' : 'lg:justify-end'
                                        }`}
                                    style={{
                                        marginTop: index > 0 ? (index % 2 === 0 ? '-2rem' : '0') : '0',
                                    }}
                                >
                                    {/* Step Card */}
                                    <motion.div
                                        className={`group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 max-w-md w-full hover:bg-white/15 transition-all duration-300 ${isEven ? '' : 'lg:order-2'
                                            }`}
                                        whileHover={{
                                            scale: 1.02,
                                            y: -5,
                                        }}
                                    >
                                        {/* Large Step Number Background */}
                                        <div className="absolute top-4 right-4 text-[80px] font-black text-white/5 leading-none select-none group-hover:text-white/10 transition-colors">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                            >
                                                <step.icon className="w-8 h-8 text-white" />
                                            </motion.div>

                                            {/* Step Label */}
                                            <span className="text-primary-yellow font-bold text-sm tracking-wider uppercase mb-2 block">
                                                Step {step.number}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-yellow transition-colors">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/70 text-lg leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-yellow/0 via-primary-yellow/5 to-primary-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>

                                    {/* Connector for Mobile */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2"
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowDown className="w-6 h-6 text-primary-yellow" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-yellow hover:bg-primary-yellow-dark text-dark font-bold text-lg rounded-full shadow-lg shadow-primary-yellow/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Your Journey
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Curved Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 80V50C360 10 720 70 1080 40C1260 25 1380 45 1440 50V80H0Z"
                        fill="#F5F5F5"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HowItWorksSection;
