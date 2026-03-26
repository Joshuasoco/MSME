import { motion } from 'framer-motion';
import { Gift, CheckCircle, Heart, Sparkles, Lock, Users } from 'lucide-react';
import { Pointer } from '@/components/ui/pointer';

const benefits = [
    {
        icon: Gift,
        title: 'Free & Accessible',
        description: '100% free ang app — walang bayad!',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        icon: CheckCircle,
        title: 'No Credit Check',
        description: 'Hindi kailangan ng credit check',
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-50',
    },
    {
        icon: Heart,
        title: 'Filipino-First',
        description: 'Designed especially para sa mga Pinoy',
        color: 'from-rose-500 to-rose-600',
        bgColor: 'bg-rose-50',
    },
    {
        icon: Sparkles,
        title: 'AI-Powered',
        description: 'Smart matching sa right loan for you',
        color: 'from-violet-500 to-violet-600',
        bgColor: 'bg-violet-50',
    },
    {
        icon: Lock,
        title: 'Data Privacy',
        description: 'Secure at protected ang data mo',
        color: 'from-amber-500 to-amber-600',
        bgColor: 'bg-amber-50',
    },
    {
        icon: Users,
        title: 'Community Driven',
        description: 'Tumutulong sa kapwa entrepreneurs',
        color: 'from-cyan-500 to-cyan-600',
        bgColor: 'bg-cyan-50',
    },
];

const BenefitsSection = () => {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-light overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(21, 101, 192, 0.03) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Decorative Blobs */}
            <motion.div
                className="absolute top-20 right-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-80 h-80 bg-primary-yellow/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-5 py-2 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        💎 Tons of Benefits
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-dark">Bakit </span>
                        <span className="relative inline-block">
                            <span className="text-gradient-blue">MSME Pathways</span>
                            <motion.div
                                className="absolute -bottom-2 left-0 h-3 w-full bg-primary-yellow/30 -z-10"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                        </span>
                        <span className="text-dark">?</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dine-design namin ang app para sa mga Pilipinong negosyante - simple, secure, at accessible.
                    </p>
                </motion.div>

                {/* Benefits Grid - Hexagonal-inspired Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group"
                        >
                            <div className={`relative ${benefit.bgColor} rounded-3xl p-6 h-full border border-transparent hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl`}>
                                <Pointer>
                                    <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${benefit.color} shadow-lg`}>
                                        <benefit.icon className="h-4 w-4 text-white" />
                                    </div>
                                </Pointer>

                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon */}
                                <motion.div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5`}
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <benefit.icon className="w-7 h-7 text-white" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Decorative corner */}
                                <div className="pointer-events-none absolute top-3 right-3">
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${benefit.color} blur-md opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
                                    <div className="relative h-10 w-10 rounded-full bg-white/55 border border-white/70 shadow-inner">
                                        <div className={`absolute inset-[5px] rounded-full bg-gradient-to-br ${benefit.color} opacity-15 group-hover:opacity-30 transition-opacity duration-300`} />
                                        <div className={`absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-gradient-to-br ${benefit.color} opacity-45 group-hover:opacity-70 transition-opacity duration-300`} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Highlight */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100">
                        <div className="flex -space-x-2">
                            {['🧑‍💼', '👩‍💼', '🧑‍🍳', '👩‍🔧'].map((emoji, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm border-2 border-white">
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-gray-600">
                            <strong className="text-dark"></strong> Para sa bawat negosyanteng walang credit history
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
