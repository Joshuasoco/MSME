import { motion } from 'framer-motion';
import { Bot, UserCheck, Shield, Zap, Heart, BookOpen, Lock } from 'lucide-react';

const features = [
    {
        icon: Bot,
        title: 'AI Personal Guide',
        description: 'Parang may personal financial advisor ka! I-eexplain sa\'yo ang bawat detail ng loan nang simple at easy to understand.',
        badge: 'Powered by AI',
        gradient: 'from-blue-500 to-indigo-600',
        size: 'large', // spans 2 columns
        mockupType: 'chat',
    },
    {
        icon: UserCheck,
        title: 'No Credit History? No Problem!',
        description: 'Alternative data assessment para sa fair at transparent na evaluation.',
        badge: 'Inclusive',
        gradient: 'from-emerald-500 to-teal-600',
        size: 'tall',
        mockupType: 'profile',
    },
    {
        icon: Shield,
        title: 'Safe & Transparent',
        description: 'Walang hidden charges. 100% secure.',
        badge: '100% Secure',
        gradient: 'from-violet-500 to-purple-600',
        size: 'normal',
        mockupType: null,
    },
    {
        icon: BookOpen,
        title: 'Free Financial Education',
        description: 'Learn proper money management at smart borrowing tips.',
        badge: 'Free Learning',
        gradient: 'from-amber-500 to-orange-600',
        size: 'wide',
        mockupType: null,
    },
    {
        icon: Zap,
        title: 'Fast Pre-qualification',
        description: 'Quick at easy process. Hindi magtatagal.',
        badge: 'Instant',
        gradient: 'from-pink-500 to-rose-600',
        size: 'normal',
        mockupType: null,
    },
    {
        icon: Heart,
        title: 'Built for Filipinos',
        description: 'Designed especially para sa mga Pinoy microentrepreneurs.',
        badge: 'Filipino-First',
        gradient: 'from-cyan-500 to-blue-600',
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
                    <motion.span
                        className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-blue/10 to-primary-yellow/10 text-primary-blue text-sm font-semibold rounded-full mb-6 border border-primary-blue/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Zap className="w-4 h-4" />
                        Mga Features
                    </motion.span>

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
                    {/* Feature 1: Large Card (2x2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:col-span-2 lg:col-span-2 lg:row-span-2 relative bg-gradient-to-br from-primary-blue via-blue-600 to-indigo-700 rounded-3xl p-8 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: '32px 32px'
                                }}
                                animate={{ y: [0, -32], x: [0, -32] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full w-fit mb-6">
                                <Bot className="w-3 h-3" />
                                {features[0].badge}
                            </span>

                            {/* Content */}
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                {features[0].title}
                            </h3>
                            <p className="text-white/80 text-lg mb-8 max-w-md">
                                {features[0].description}
                            </p>

                            {/* Chat Mockup */}
                            <div className="mt-auto relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <motion.div
                                        className="bg-primary-yellow rounded-xl rounded-bl-sm p-3 max-w-[80%] mb-3 shadow-lg"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <p className="text-sm text-dark font-medium">Hi! I'm your AI Assistant. Paano kita matutulungan today?</p>
                                    </motion.div>
                                    <motion.div
                                        className="bg-white/20 rounded-xl rounded-br-sm p-3 max-w-[70%] ml-auto"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <p className="text-sm text-white">Pwede ba mag-loan kahit walang credit history?</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Icon */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Bot className="w-12 h-12 text-white/40" />
                        </motion.div>
                    </motion.div>

                    {/* Feature 2: Tall Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:row-span-2 lg:row-span-2 relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
                    >
                        <div className="h-full flex flex-col">
                            {/* Icon */}
                            <motion.div
                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg mb-4"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >
                                <UserCheck className="w-7 h-7 text-white" />
                            </motion.div>

                            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full w-fit mb-4">
                                {features[1].badge}
                            </span>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {features[1].title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {features[1].description}
                            </p>

                            {/* Profile Score Mockup */}
                            <div className="mt-auto bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-gray-500">Profile Score</span>
                                    <span className="text-lg font-bold text-emerald-600">85%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <div className="bg-emerald-50 rounded-lg p-2 text-center">
                                        <p className="text-lg font-bold text-emerald-700">3+</p>
                                        <p className="text-[10px] text-gray-500">Years Business</p>
                                    </div>
                                    <div className="bg-emerald-50 rounded-lg p-2 text-center">
                                        <p className="text-lg font-bold text-emerald-700">₱50K</p>
                                        <p className="text-[10px] text-gray-500">Monthly Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3: Normal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -8, rotate: 2, transition: { duration: 0.3 } }}
                        className="group relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100"
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg mb-4"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <Shield className="w-6 h-6 text-white" />
                        </motion.div>

                        <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-4">
                            {features[2].badge}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {features[2].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {features[2].description}
                        </p>

                        {/* Lock Icon Animation */}
                        <motion.div
                            className="absolute -bottom-2 -right-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🔒
                        </motion.div>
                    </motion.div>

                    {/* Feature 4: Security Card */}
                    <motion.div
                        initial={false}
                        whileHover={{ y: -8, rotate: -2, transition: { duration: 0.3 } }}
                        className="group relative lg:col-start-4 lg:row-start-2 bg-[#ece5ff] rounded-3xl p-6 overflow-hidden shadow-lg transition-all duration-300 border border-violet-200"
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg mb-4"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <Shield className="w-6 h-6 text-white" />
                        </motion.div>

                        <span className="inline-block w-fit px-3 py-1 bg-violet-200 text-violet-800 text-xs font-semibold rounded-full mb-4 border border-violet-300">
                            JWT + 2FA
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            Two-Factor Authentication
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Ang bawat login ay may karagdagang verification layer. Ang iyong account at personal data ay protektado sa lahat ng oras.
                        </p>

                        {/* OTP Lock Accent */}
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 opacity-95 pointer-events-none">
                            <div className="px-2.5 py-1 rounded-lg bg-white border border-violet-300 text-[10px] font-bold text-violet-700 tracking-[0.18em] shadow-sm">
                                OTP 927 441
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-violet-100 border border-violet-300 flex items-center justify-center shadow-sm">
                                <Lock className="w-4 h-4 text-violet-700" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 5: Wide Card (spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group md:col-span-2 lg:col-span-2 relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <motion.div
                                className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >
                                <BookOpen className="w-7 h-7 text-white" />
                            </motion.div>

                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-2">
                                    {features[3].badge}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {features[3].title}
                                </h3>
                                <p className="text-gray-600">
                                    {features[3].description}
                                </p>
                            </div>

                            {/* Mini Course Cards */}
                            <div className="flex gap-2 flex-shrink-0">
                                {['📊', '💰', '📈'].map((emoji, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        whileHover={{ y: -4, scale: 1.1 }}
                                    >
                                        {emoji}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -8, rotate: -2, transition: { duration: 0.3 } }}
                        className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg mb-4"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <Zap className="w-6 h-6 text-white" />
                        </motion.div>

                        <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full mb-4">
                            {features[4].badge}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {features[4].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {features[4].description}
                        </p>

                        <motion.span
                            className="absolute -bottom-2 -right-2 text-6xl opacity-10 group-hover:opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ⚡
                        </motion.span>
                    </motion.div>

                    {/* Feature 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100"
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mb-4"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <Heart className="w-6 h-6 text-white" />
                        </motion.div>

                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full mb-4">
                            {features[5].badge}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {features[5].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {features[5].description}
                        </p>

                        {/* Philippine Flag Colors */}
                        <div className="absolute bottom-4 right-4 flex gap-1">
                            <div className="w-2 h-6 bg-blue-600 rounded-full opacity-30" />
                            <div className="w-2 h-6 bg-red-600 rounded-full opacity-30" />
                            <div className="w-2 h-6 bg-yellow-500 rounded-full opacity-30" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
