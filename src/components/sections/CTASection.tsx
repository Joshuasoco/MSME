import { motion } from 'framer-motion';
import { Download, ArrowRight, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';

const CTASection = () => {
    const benefits = [
        '100% Free Download',
        'No Credit Check Required',
        'Secure & Private',
        'AI-Powered Guidance',
    ];

    return (
        <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
            {/* Split Diagonal Background */}
            <div className="absolute inset-0">
                {/* Dark Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark to-dark-secondary" />

                {/* Gradient Accent Side (Diagonal) */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-blue via-blue-600 to-indigo-800"
                    style={{
                        clipPath: 'polygon(100% 0, 100% 100%, 40% 100%, 60% 0)',
                    }}
                />

                {/* Yellow Accent Line */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-primary-yellow via-primary-yellow to-transparent"
                    style={{
                        clipPath: 'polygon(58% 0, 62% 0, 42% 100%, 38% 100%)',
                        opacity: 0.3,
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                    animate={{ y: [0, 80] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/20"
                            whileHover={{ scale: 1.05 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 text-primary-yellow" />
                            Free to Download
                        </motion.span>

                        {/* Headline */}
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Start Your{' '}
                            <span className="relative inline-block">
                                <span className="text-primary-yellow">Journey</span>
                                <motion.svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 200 12"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <motion.path
                                        d="M2 10C50 2 150 2 198 10"
                                        stroke="#FFC107"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </motion.svg>
                            </span>
                            ?
                        </h2>

                        <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0">
                            Join thousands of Filipinos who transformed their financial future with MSME Pathways
                        </p>

                        {/* Benefits List */}
                        <div className="grid grid-cols-2 gap-3 mb-10 max-w-md mx-auto lg:mx-0">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 text-white/80"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="group relative rounded-full gap-3 text-lg px-10 py-8 bg-primary-yellow hover:bg-primary-yellow-dark text-dark font-bold shadow-2xl shadow-primary-yellow/30 transition-all duration-300 overflow-hidden"
                                >
                                    <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <Download className="w-6 h-6" />
                                        Download Now - It's Free!
                                    </a>
                                </Button>
                            </motion.div>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full gap-2 text-lg px-8 py-7 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                            >
                                <a href="#features">
                                    Learn More
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>

                        {/* Google Play Badge */}
                        <motion.div
                            className="mt-8 flex justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                <motion.img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-16"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-radial from-primary-blue/30 via-primary-yellow/20 to-transparent blur-3xl scale-150"
                                animate={{ scale: [1.5, 1.7, 1.5], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            {/* Phone Container */}
                            <motion.div
                                className="relative"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* 3D Tilted Phone */}
                                <div
                                    className="relative w-[260px] md:w-[300px]"
                                    style={{
                                        transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                                    }}
                                >
                                    <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl">
                                        {/* Notch */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />

                                        {/* Screen */}
                                        <div className="relative w-full aspect-[9/19] bg-gradient-to-b from-primary-blue via-blue-600 to-primary-blue-dark rounded-[2.5rem] overflow-hidden">
                                            {/* Success Screen */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                                <motion.div
                                                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6"
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <Zap className="w-12 h-12 text-primary-yellow" />
                                                </motion.div>
                                                <p className="text-2xl font-bold mb-2">Ready ka na!</p>
                                                <p className="text-white/70 text-center text-sm">
                                                    Start your journey to financial success
                                                </p>

                                                {/* Animated Button */}
                                                <motion.div
                                                    className="mt-8 px-6 py-3 bg-primary-yellow rounded-full text-dark font-bold"
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    Get Started
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-yellow to-amber-500 rounded-2xl shadow-lg flex items-center justify-center"
                                    animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <span className="text-3xl">🚀</span>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-2 -left-6 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center"
                                    animate={{ rotate: [0, -10, 0], y: [0, 8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                >
                                    <CheckCircle className="w-7 h-7 text-white" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Curved Top Edge (inverted) */}
            <div className="absolute top-0 left-0 right-0 transform rotate-180">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 60V30C360 60 720 0 1080 30C1260 45 1360 15 1440 30V60H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default CTASection;
