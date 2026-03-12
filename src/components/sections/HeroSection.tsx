import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronDown, Sparkles, TrendingUp, Users, Shield, Lock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';
import { useRef } from 'react';
import PhoneMockup from '@/components/common/PhoneMockup';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';
import { NoiseBackground } from '@/components/ui/noise-background';
import { SparklesText } from '@/components/ui/sparkles-text';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const allowAmbientMotion = !prefersReducedMotion && !isMobile;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const phoneY = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

    const scrollToFeatures = () => {
        const element = document.querySelector('#features');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const floatingStats = [
        { icon: Users, value: '10K+', label: 'Users' },
        { icon: TrendingUp, value: 'PHP 50M+', label: 'Enabled' },
        { icon: Shield, value: '100%', label: 'Secure' },
    ];

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-yellow-50/30"
                style={allowAmbientMotion ? { y: bgY } : undefined}
            />

            <div className="absolute inset-0 dot-pattern opacity-45" />
            <div className="absolute inset-0 stripe-pattern" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(21,101,192,0.12) 0%, transparent 70%)',
                    }}
                    animate={allowAmbientMotion ? { scale: [1, 1.08, 1], rotate: [0, 8, 0] } : undefined}
                    transition={allowAmbientMotion ? { duration: 14, repeat: Infinity } : undefined}
                />
                <motion.div
                    className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,193,7,0.14) 0%, transparent 70%)',
                    }}
                    animate={allowAmbientMotion ? { scale: [1.06, 1, 1.06], x: [0, 20, 0] } : undefined}
                    transition={allowAmbientMotion ? { duration: 12, repeat: Infinity } : undefined}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-blue/20 text-primary-blue text-sm font-medium rounded-full mb-6 shadow-lg"
                            whileHover={{ scale: 1.03 }}
                        >
                            <Sparkles className="w-4 h-4 text-primary-yellow" />
                            AI-Powered Financial Inclusion
                        </motion.div>

                        <h1 className="font-display font-bold leading-tight tracking-tight mb-6">
                            <span className="block text-3xl sm:text-4xl md:text-5xl text-gray-600 font-medium">
                                Walang Credit History?
                            </span>
                            <SparklesText
                                as="span"
                                sparklesCount={7}
                                colors={{ first: '#60A5FA', second: '#38BDF8' }}
                                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                            >
                                <span className="text-gradient-blue">Pwede Ka</span>
                            </SparklesText>
                            <SparklesText
                                as="span"
                                sparklesCount={7}
                                colors={{ first: '#FACC15', second: '#F59E0B' }}
                                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-2"
                            >
                                <span className="text-gradient-gold">Pa Rin!</span>
                            </SparklesText>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Hindi kailangan ng credit history. May AI na tutulong sa iyo para sa safe at easy na pag-loan,
                            para sa sari-sari store owners, vendors, at home-based sellers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <a
                                href={APP_LINKS.playStore}
                                download="msme-pathways.apk"
                                aria-label="Download MSME Pathways app for free"
                                className="group relative inline-block rounded-full min-h-[44px] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
                            >
                                <NoiseBackground
                                    containerClassName="w-fit !rounded-full !p-[1px] !bg-transparent !shadow-none"
                                    className="!rounded-full"
                                    gradientColors={[
                                        'rgb(74, 222, 128)',
                                        'rgb(52, 211, 153)',
                                        'rgb(34, 197, 94)',
                                    ]}
                                    noiseIntensity={0.16}
                                    speed={0.012}
                                    animating={allowAmbientMotion}
                                >
                                    <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.28),0_1px_0_rgba(255,255,255,0.35)_inset] transition-all duration-300 group-hover:from-emerald-500 group-hover:to-green-400">
                                        <Download className="w-5 h-5" />
                                        Download Free
                                    </span>
                                </NoiseBackground>
                                <span className="absolute -top-2 -right-2 rounded-full bg-primary-yellow px-2 py-0.5 text-xs font-bold text-dark shadow-md" aria-hidden="true">
                                    FREE
                                </span>
                            </a>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full gap-2 text-lg px-8 py-7 border-2 border-gray-200 hover:border-primary-blue hover:bg-primary-blue/5 transition-all duration-300 min-h-[44px]"
                                onClick={scrollToFeatures}
                                aria-label="Learn more about features"
                            >
                                Alamin Pa
                                <ChevronDown className="w-5 h-5" />
                            </Button>
                        </div>

                        <motion.div
                            className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {floatingStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"
                                    whileHover={{ scale: 1.03, y: -2 }}
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

                        <motion.div
                            className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                        >
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 text-xs font-medium">Data Privacy Act Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
                                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                                <span className="text-blue-700 text-xs font-medium">BSP Registered Partners</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end"
                        style={allowAmbientMotion ? { y: phoneY } : undefined}
                    >
                        <div className="relative scale-[0.82] min-[375px]:scale-90 sm:scale-100 origin-center">
                            <PhoneMockup
                                animate={allowAmbientMotion}
                                screenImageSrc="/msmephonebelow.webp"
                                screenImageAlt="MSME Pathways app home screen preview"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {!prefersReducedMotion && (
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
                    animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
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
            )}
        </section>
    );
};

export default HeroSection;
