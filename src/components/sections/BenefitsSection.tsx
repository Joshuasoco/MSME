import { motion } from 'framer-motion';
import { Gift, CheckCircle, Heart, Sparkles, Lock, Users } from 'lucide-react';

const benefits = [
    {
        icon: Gift,
        title: 'Free & Accessible',
        description: '100% free ang app — walang bayad!',
    },
    {
        icon: CheckCircle,
        title: 'No Credit Check',
        description: 'Hindi kailangan ng credit check',
    },
    {
        icon: Heart,
        title: 'Filipino-First',
        description: 'Designed especially para sa mga Pinoy',
    },
    {
        icon: Sparkles,
        title: 'AI-Powered',
        description: 'Smart matching sa right loan for you',
    },
    {
        icon: Lock,
        title: 'Data Privacy',
        description: 'Secure at protected ang data mo',
    },
    {
        icon: Users,
        title: 'Community Driven',
        description: 'Tumutulong sa kapwa entrepreneurs',
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

                {/* Benefits Grid - Apple-inspired neutral design */}
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
                            <div className="relative bg-white rounded-2xl p-6 h-full border border-[#E5E5E5] transition-all duration-300">
                                {/* Consistent icon treatment - brand blue only */}
                                <motion.div
                                    className="w-10 h-10 rounded-lg bg-[#F5F5F7] flex items-center justify-center mb-5"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <benefit.icon className="w-5 h-5 text-primary-blue" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#86868B] text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
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
                    <div className="inline-flex items-center gap-3 rounded-full border border-[#DDE2E8] bg-gradient-to-b from-white to-[#FAFAFB] px-6 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.07),0_1px_0_rgba(255,255,255,0.9)_inset]">
                        <div className="flex -space-x-2" aria-label="Filipino MSME entrepreneurs">
                            {[
                                { position: 'left center', alt: 'Filipina sari-sari store owner' },
                                { position: 'center center', alt: 'Filipino market vendor' },
                                { position: 'right center', alt: 'Filipina home-based food entrepreneur' },
                            ].map((avatar) => (
                                <img
                                    key={avatar.position}
                                    src="/filipino-entrepreneur-avatars.webp"
                                    alt={avatar.alt}
                                    className="h-7 w-7 rounded-full border-2 border-white bg-slate-100 object-cover shadow-[0_2px_6px_rgba(15,23,42,0.16)] ring-1 ring-slate-900/5"
                                    style={{ objectPosition: avatar.position }}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium tracking-[-0.01em] text-[#4A5565]">
                            Para sa bawat negosyanteng walang credit history
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
