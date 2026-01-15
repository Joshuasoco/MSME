import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronDown, Sparkles, TrendingUp, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';
import { useRef } from 'react';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    const scrollToFeatures = () => {
        const element = document.querySelector('#features');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const floatingStats = [
        { icon: Users, value: '10K+', label: 'Users', delay: 0 },
        { icon: TrendingUp, value: '₱50M+', label: 'Enabled', delay: 0.1 },
        { icon: Shield, value: '100%', label: 'Secure', delay: 0.2 },
    ];

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            {/* Background with Patterns */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-yellow-50/30"
                style={{ y: bgY }}
            />

            {/* Animated Dot Pattern */}
            <div className="absolute inset-0 dot-pattern opacity-50" />

            {/* Diagonal Stripe Accent */}
            <div className="absolute inset-0 stripe-pattern" />

            {/* Large Decorative Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(21,101,192,0.08) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-${2 + i % 3} h-${2 + i % 3} rounded-full ${i % 2 === 0 ? 'bg-primary-blue/30' : 'bg-primary-yellow/40'}`}
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + i * 12}%`,
                            width: 8 + i * 2,
                            height: 8 + i * 2,
                        }}
                        animate={{
                            y: [0, -30 - i * 10, 0],
                            x: [0, (i % 2 ? 15 : -15), 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
                    {/* Left Content - Spans 7 columns */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        {/* Floating Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-blue/20 text-primary-blue text-sm font-medium rounded-full mb-6 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-4 h-4 text-primary-yellow" />
                            AI-Powered Financial Inclusion
                            <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-yellow opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-yellow"></span>
                            </span>
                        </motion.div>

                        {/* Main Headline - Dramatic Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mb-6"
                        >
                            <h1 className="font-display font-bold leading-[0.95] tracking-tight">
                                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-600 font-medium mb-1">
                                    Simulan ang iyong
                                </span>
                                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient-blue">
                                    Pangarap na
                                </span>
                                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl relative">
                                    <span className="text-gradient-gold">Negosyo</span>
                                    <motion.span
                                        className="absolute -right-2 -top-2 text-3xl"
                                        animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ✨
                                    </motion.span>
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Your AI-powered guide para sa{' '}
                            <span className="font-semibold text-primary-blue">safe</span> at{' '}
                            <span className="font-semibold text-primary-blue">easy</span> loan application.
                            Para sa mga sari-sari store owners, vendors, at microentrepreneurs.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="group relative rounded-full gap-3 text-lg px-8 py-7 bg-gradient-to-r from-primary-blue to-primary-blue-dark hover:from-primary-blue-dark hover:to-primary-blue shadow-xl shadow-primary-blue/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                                    Download Free
                                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary-yellow text-dark text-xs font-bold rounded-full shadow-lg">
                                        FREE
                                    </span>
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full gap-2 text-lg px-8 py-7 border-2 border-gray-200 hover:border-primary-blue hover:bg-primary-blue/5 transition-all duration-300"
                                onClick={scrollToFeatures}
                            >
                                Alamin Pa
                                <ChevronDown className="w-5 h-5" />
                            </Button>
                        </motion.div>

                        {/* Floating Stats Row */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {floatingStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + stat.delay }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className="p-1.5 bg-primary-blue/10 rounded-full">
                                        <stat.icon className="w-4 h-4 text-primary-blue" />
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-bold text-dark">{stat.value}</span>
                                        <span className="text-gray-500 ml-1">{stat.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Phone Mockup with 3D Tilt */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end relative"
                        style={{ y: phoneY }}
                    >
                        <div className="relative">
                            {/* Glow Effect Behind Phone */}
                            <div className="absolute inset-0 scale-110">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-radial from-primary-blue/20 via-primary-yellow/10 to-transparent blur-3xl"
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                            </div>

                            {/* Phone Container with Tilt */}
                            <motion.div
                                className="relative transform-gpu"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px'
                                }}
                                animate={{
                                    y: [0, -15, 0],
                                    rotateY: [0, 3, 0],
                                    rotateX: [0, -2, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Phone Frame */}
                                <div
                                    className="relative w-[280px] md:w-[320px] transform rotate-3 hover:rotate-0 transition-transform duration-500"
                                    style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}
                                >
                                    <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl shadow-black/30">
                                        {/* Phone Notch */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />

                                        {/* Phone Screen */}
                                        <div className="relative w-full aspect-[9/19] bg-gradient-to-b from-primary-blue to-primary-blue-dark rounded-[2.5rem] overflow-hidden">
                                            {/* App Content */}
                                            <div className="p-4 pt-10">
                                                {/* Header */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                        <span className="text-white font-bold text-lg">M</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">MSME Pathways</p>
                                                        <p className="text-white/60 text-[10px]">Your Financial Guide</p>
                                                    </div>
                                                </div>

                                                {/* Welcome Card */}
                                                <motion.div
                                                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1 }}
                                                >
                                                    <p className="text-white/70 text-xs mb-1">Magandang Araw! 👋</p>
                                                    <p className="text-white font-semibold">Ready ka na ba?</p>
                                                    <p className="text-white/60 text-xs mt-1">Pre-qualify without affecting credit</p>
                                                </motion.div>

                                                {/* Quick Actions */}
                                                <div className="grid grid-cols-2 gap-2 mb-4">
                                                    {['📋 Assess', '📚 Learn', '💰 Loans', '📊 Track'].map((item, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/5 hover:bg-white/20 transition-colors cursor-pointer"
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 1.2 + i * 0.1 }}
                                                        >
                                                            <span className="text-lg">{item.split(' ')[0]}</span>
                                                            <p className="text-white/80 text-xs mt-1">{item.split(' ')[1]}</p>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Progress */}
                                                <motion.div
                                                    className="bg-white rounded-xl p-3"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 1.6 }}
                                                >
                                                    <div className="flex justify-between mb-2">
                                                        <span className="text-xs text-gray-600">Your Progress</span>
                                                        <span className="text-xs font-bold text-primary-blue">75%</span>
                                                    </div>
                                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-primary-blue to-primary-yellow rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: '75%' }}
                                                            transition={{ delay: 1.8, duration: 1 }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Bottom Nav */}
                                            <div className="absolute bottom-0 inset-x-0 h-14 bg-white/10 backdrop-blur-md border-t border-white/10 flex items-center justify-around">
                                                {['🏠', '📖', '💬', '👤'].map((icon, i) => (
                                                    <div key={i} className={`p-2 ${i === 0 ? 'bg-white/20 rounded-full' : ''}`}>
                                                        <span className="text-lg">{icon}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-yellow-dark rounded-2xl shadow-lg shadow-primary-yellow/30 flex items-center justify-center"
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl shadow-lg shadow-primary-blue/30 flex items-center justify-center"
                                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            >
                                <span className="text-2xl">💡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={scrollToFeatures}
            >
                <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll to explore</span>
                <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary-blue rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Curved Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 100V60C240 80 480 100 720 90C960 80 1200 40 1440 60V100H0Z"
                        fill="#f9fafb"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
