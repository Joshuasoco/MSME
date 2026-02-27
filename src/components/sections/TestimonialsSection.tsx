import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const AUTO_PLAY_INTERVAL_MS = 5000;

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const nextTestimonial = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prevTestimonial = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || isPaused) {
            return;
        }

        const interval = window.setInterval(() => {
            nextTestimonial();
        }, AUTO_PLAY_INTERVAL_MS);

        return () => window.clearInterval(interval);
    }, [prefersReducedMotion, isPaused, nextTestimonial]);

    const variants = {
        enter: (slideDirection: number) => ({
            x: slideDirection > 0 ? 280 : -280,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (slideDirection: number) => ({
            x: slideDirection < 0 ? 280 : -280,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
        if (Math.abs(info.offset.x) < 70) {
            return;
        }

        if (info.offset.x < 0) {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
    };

    return (
        <section className="relative py-24 md:py-32 bg-dark-secondary overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '48px 48px',
                    }}
                />

                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-yellow/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-5 py-2 bg-primary-yellow/20 text-primary-yellow text-sm font-semibold rounded-full mb-6 border border-primary-yellow/30"
                        whileHover={{ scale: 1.03 }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Mga Testimonials
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ano ang sabi ng mga <span className="text-primary-yellow">users</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Mga tunay na kwento mula sa mga negosyante na natulungan ng MSME Pathways.
                    </p>
                </motion.div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >
                    <div className="absolute -top-8 -left-8 z-0">
                        <Quote className="w-24 h-24 text-primary-yellow/20" />
                    </div>

                    <div className="relative h-[430px] md:h-[360px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 280, damping: 30 },
                                    opacity: { duration: 0.25 },
                                    scale: { duration: 0.25 },
                                }}
                                className="absolute inset-0"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.12}
                                onDragEnd={onDragEnd}
                            >
                                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
                                    <div className="h-full flex flex-col">
                                        <div className="flex gap-1 mb-6">
                                            {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                                                <Star key={i} className="w-6 h-6 fill-primary-yellow text-primary-yellow" />
                                            ))}
                                        </div>

                                        <blockquote className="flex-1">
                                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                                                "{TESTIMONIALS[currentIndex].quote}"
                                            </p>
                                        </blockquote>

                                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-blue-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                                {TESTIMONIALS[currentIndex].name.charAt(0)}
                                            </div>

                                            <div>
                                                <p className="text-white font-bold text-lg">{TESTIMONIALS[currentIndex].name}</p>
                                                <p className="text-gray-400">{TESTIMONIALS[currentIndex].role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'w-8 bg-primary-yellow' : 'w-2 bg-white/30 hover:bg-white/50'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <motion.button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-primary-yellow hover:bg-primary-yellow-dark flex items-center justify-center text-dark transition-colors shadow-lg shadow-primary-yellow/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">
                        Trusted by entrepreneurs across the Philippines
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4 opacity-70">
                        {['Sari-sari Stores', 'Food Vendors', 'RTW Sellers', 'Market Vendors', 'Home Businesses', 'Mobile Sellers'].map((item) => (
                            <span key={item} className="px-3 py-1 rounded-full border border-white/20 text-white/60 text-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 80V50C480 10 960 70 1440 40V80H0Z"
                        fill="#F5F5F5"
                    />
                </svg>
            </div>
        </section>
    );
};

export default TestimonialsSection;
