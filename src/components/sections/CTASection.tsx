import { motion } from 'framer-motion';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';
import PhoneMockup from '@/components/common/PhoneMockup';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';
import { SparklesText } from '@/components/ui/sparkles-text';

const CTASection = () => {
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const allowAmbientMotion = !prefersReducedMotion && !isMobile;

    const benefits = [
        '100% Free Download',
        'No Credit Check Required',
        'Secure and Private',
        'AI-Powered Guidance',
    ];

    return (
        <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark to-dark-secondary" />
                <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-blue via-blue-600 to-indigo-800"
                    style={{
                        clipPath: 'polygon(100% 0, 100% 100%, 40% 100%, 60% 0)',
                    }}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-primary-yellow via-primary-yellow to-transparent"
                    style={{
                        clipPath: 'polygon(58% 0, 62% 0, 42% 100%, 38% 100%)',
                        opacity: 0.3,
                    }}
                />
            </div>

            {allowAmbientMotion && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-2 h-2 rounded-full bg-white/20"
                            style={{
                                left: `${18 + (index * 24)}%`,
                                top: `${24 + (index * 16)}%`,
                            }}
                            animate={{
                                y: [0, -26, 0],
                                opacity: [0.2, 0.7, 0.2],
                            }}
                            transition={{
                                duration: 3 + (index * 0.7),
                                repeat: Infinity,
                                delay: index * 0.4,
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Start Your{' '}
                            <SparklesText
                                as="span"
                                sparklesCount={6}
                                colors={{ first: '#FACC15', second: '#F59E0B' }}
                                className="inline text-primary-yellow"
                            >
                                Journey
                            </SparklesText>
                            ?
                        </h2>

                        <p className="text-xl text-white/75 mb-8 max-w-lg mx-auto lg:mx-0">
                            Join thousands of Filipinos transforming their financial future with MSME Pathways.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-10 max-w-md mx-auto lg:mx-0">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    className="flex items-center gap-2 text-white/85"
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

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="group relative rounded-full gap-3 text-lg px-10 py-8 bg-primary-yellow hover:bg-primary-yellow-dark text-dark font-bold shadow-2xl shadow-primary-yellow/30 transition-all duration-300 overflow-hidden"
                            >
                                <a href={APP_LINKS.playStore} download="msme-pathways.apk">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <Download className="w-6 h-6" />
                                    Download Now - It is Free
                                </a>
                            </Button>

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

                        <motion.div
                            className="mt-8 flex justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href={APP_LINKS.playStore} download="msme-pathways.apk">
                                <img
                                    src="/google-play-badge.png"
                                    alt="Get it on Google Play"
                                    className="h-16"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative origin-center">
                            <PhoneMockup
                                animate={allowAmbientMotion}
                                screenImageSrc="/iPhone%2016%20-%2029.png"
                                screenImageAlt="Analyzing application screen"
                                frameClassName="w-[240px] min-[375px]:w-[270px] sm:w-[300px] md:w-[340px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
