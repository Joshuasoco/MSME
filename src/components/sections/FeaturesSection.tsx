import { motion } from 'framer-motion';
import { Bot, UserCheck, Shield, Zap, Heart, BookOpen, Lock } from 'lucide-react';

const features = [
    {
        icon: Bot,
        title: 'AI Personal Guide',
        description: 'Parang may personal financial advisor ka! I-eexplain sa\'yo ang bawat detail ng loan nang simple at easy to understand.',
        eyebrow: 'POWERED BY AI',
        size: 'large', // spans 2 columns
        mockupType: 'chat',
    },
    {
        icon: UserCheck,
        title: 'No Credit History? No Problem!',
        description: 'Alternative data assessment para sa fair at transparent na evaluation.',
        eyebrow: 'INCLUSIVE',
        size: 'tall',
        mockupType: 'profile',
    },
    {
        icon: Shield,
        title: 'Safe & Transparent',
        description: 'Walang hidden charges. 100% secure.',
        eyebrow: '100% SECURE',
        size: 'normal',
        mockupType: null,
    },
    {
        icon: BookOpen,
        title: 'Free Financial Education',
        description: 'Learn proper money management at smart borrowing tips.',
        eyebrow: 'FREE LEARNING',
        size: 'wide',
        mockupType: null,
    },
    {
        icon: Zap,
        title: 'Fast Pre-qualification',
        description: 'Quick at easy process. Hindi magtatagal.',
        eyebrow: 'INSTANT',
        size: 'normal',
        mockupType: null,
    },
    {
        icon: Heart,
        title: 'Built for Filipinos',
        description: 'Designed especially para sa mga Pinoy microentrepreneurs.',
        eyebrow: 'FILIPINO-FIRST',
        size: 'normal',
        mockupType: null,
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl" />
            </div>

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
                        <span className="text-dark">How We Can </span>
                        <span className="text-gradient-blue">Help You</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Advanced AI technology para gabayan ka sa bawat step ng loan application process.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Feature 1: Hero Card (2x2) - Only card with brand blue */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:col-span-2 lg:col-span-2 lg:row-span-2 relative bg-primary-blue rounded-2xl p-8 text-white overflow-hidden border border-[#0051D5]/20"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            {/* Eyebrow text - Apple style */}
                            <span className="text-white/70 text-[10px] font-medium tracking-[0.08em] uppercase mb-4">
                                {features[0].eyebrow}
                            </span>

                            {/* Content */}
                            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                                {features[0].title}
                            </h3>
                            <p className="text-white/80 text-base mb-8 max-w-md">
                                {features[0].description}
                            </p>

                            {/* Chat Mockup with distinct bubble colors */}
                            <div className="mt-auto relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <motion.div
                                        className="bg-white rounded-xl p-3 max-w-[80%] mb-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <p className="text-sm text-gray-900">Hi! I'm your AI Assistant. Paano kita matutulungan today?</p>
                                    </motion.div>
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-sm rounded-xl p-3 max-w-[70%] ml-auto"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <p className="text-sm text-white">Pwede ba mag-loan kahit walang credit history?</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Robot Icon Badge - restored to top-right corner */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Bot className="w-12 h-12 text-white/40" />
                        </motion.div>
                    </motion.div>

                    {/* Feature 2: Tall Card - Neutral surface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:row-span-2 lg:row-span-2 relative bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <div className="h-full flex flex-col">
                            {/* Icon - consistent style, brand blue only */}
                            <motion.div
                                className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                <UserCheck className="w-5 h-5 text-primary-blue" />
                            </motion.div>

                            {/* Eyebrow text - Apple style */}
                            <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-4">
                                {features[1].eyebrow}
                            </span>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {features[1].title}
                            </h3>
                            <p className="text-[#86868B] text-sm leading-relaxed mb-6">
                                {features[1].description}
                            </p>

                            {/* Minimal Profile Score Mockup */}
                            <div className="mt-auto bg-[#F5F5F7] rounded-xl p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-[#86868B]">Profile Score</span>
                                    <span className="text-lg font-semibold text-gray-900">85%</span>
                                </div>
                                <div className="h-1.5 bg-white rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary-blue rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <div className="bg-white rounded-lg p-2 text-center">
                                        <p className="text-lg font-semibold text-gray-900">3+</p>
                                        <p className="text-[10px] text-[#86868B]">Years Business</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-2 text-center">
                                        <p className="text-lg font-semibold text-gray-900">₱50K</p>
                                        <p className="text-[10px] text-[#86868B]">Monthly Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3: Normal Card - Neutral surface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <motion.div
                            className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Shield className="w-5 h-5 text-primary-blue" />
                        </motion.div>

                        <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-4 block">
                            {features[2].eyebrow}
                        </span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {features[2].title}
                        </h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            {features[2].description}
                        </p>
                    </motion.div>

                    {/* Feature 4: Security Card - Neutral surface */}
                    <motion.div
                        initial={false}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative lg:col-start-4 lg:row-start-2 bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <motion.div
                            className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Shield className="w-5 h-5 text-primary-blue" />
                        </motion.div>

                        <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-4 block">
                            JWT + 2FA
                        </span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Two-Factor Authentication
                        </h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            Ang bawat login ay may karagdagang verification layer. Ang iyong account at personal data ay protektado sa lahat ng oras.
                        </p>
                    </motion.div>

                    {/* Feature 5: Wide Card - Neutral surface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:col-span-2 lg:col-span-2 relative bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                <BookOpen className="w-5 h-5 text-primary-blue" />
                            </motion.div>

                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-2 block">
                                    {features[3].eyebrow}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {features[3].title}
                                </h3>
                                <p className="text-[#86868B] text-sm leading-relaxed">
                                    {features[3].description}
                                </p>
                            </div>

                            {/* Mini Course Cards - simplified */}
                            <div className="flex gap-2 flex-shrink-0">
                                {['📊', '💰', '📈'].map((emoji, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center text-2xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                    >
                                        {emoji}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 6: Normal Card - Neutral surface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <motion.div
                            className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Zap className="w-5 h-5 text-primary-blue" />
                        </motion.div>

                        <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-4 block">
                            {features[4].eyebrow}
                        </span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {features[4].title}
                        </h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            {features[4].description}
                        </p>
                    </motion.div>

                    {/* Feature 7: Normal Card - Neutral surface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-[#E5E5E5]"
                    >
                        <motion.div
                            className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Heart className="w-5 h-5 text-primary-blue" />
                        </motion.div>

                        <span className="text-[#86868B] text-[10px] font-medium tracking-[0.08em] uppercase mb-4 block">
                            {features[5].eyebrow}
                        </span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {features[5].title}
                        </h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            {features[5].description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
