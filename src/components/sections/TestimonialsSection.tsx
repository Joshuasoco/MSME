import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 45 : -45,
        }),
    };

    return (
        <section className="relative py-24 md:py-32 bg-dark-secondary overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }} />

                {/* Gradient Blobs */}
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-yellow/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
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
                        className="inline-flex items-center gap-2 px-5 py-2 bg-primary-yellow/20 text-primary-yellow text-sm font-semibold rounded-full mb-6 border border-primary-yellow/30"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Mga Testimonials
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ano ang Sabi ng mga{' '}
                        <span className="text-primary-yellow">Users</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Mga tunay na kwento mula sa mga negosyante na nakatulong ang MSME Pathways
                    </p>
                </motion.div>

                {/* Testimonial Carousel with 3D Stack Effect */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Large Decorative Quote */}
                    <motion.div
                        className="absolute -top-8 -left-8 z-0"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <Quote className="w-24 h-24 text-primary-yellow/20" />
                    </motion.div>

                    {/* Card Stack Container */}
                    <div className="relative h-[400px] md:h-[350px] perspective-1000">
                        {/* Background Stack Cards */}
                        {[2, 1].map((offset) => (
                            <div
                                key={offset}
                                className="absolute top-0 left-0 right-0 mx-auto w-[95%] h-full"
                                style={{
                                    transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.03}) rotateX(${offset * 2}deg)`,
                                    opacity: 0.3 - offset * 0.1,
                                    zIndex: -offset,
                                }}
                            >
                                <div className="w-full h-full bg-white/5 rounded-3xl border border-white/10" />
                            </div>
                        ))}

                        {/* Active Testimonial Card */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 },
                                    rotateY: { duration: 0.4 },
                                }}
                                className="absolute inset-0"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
                                    <div className="h-full flex flex-col">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <Star className="w-6 h-6 fill-primary-yellow text-primary-yellow" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="flex-1">
                                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                                                "{TESTIMONIALS[currentIndex].quote}"
                                            </p>
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                                            {/* Avatar */}
                                            <motion.div
                                                className="relative"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-blue-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                                    {TESTIMONIALS[currentIndex].name.charAt(0)}
                                                </div>
                                                {/* Online Status */}
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-dark-secondary" />
                                            </motion.div>

                                            <div>
                                                <p className="text-white font-bold text-lg">
                                                    {TESTIMONIALS[currentIndex].name}
                                                </p>
                                                <p className="text-gray-400">
                                                    {TESTIMONIALS[currentIndex].role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Progress Dots */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-primary-yellow'
                                            : 'w-2 bg-white/30 hover:bg-white/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        {/* Arrow Navigation */}
                        <div className="flex gap-3">
                            <motion.button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-primary-yellow hover:bg-primary-yellow-dark flex items-center justify-center text-dark transition-colors shadow-lg shadow-primary-yellow/30"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Trust Logos Marquee */}
                <motion.div
                    className="mt-20 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">
                        Trusted by entrepreneurs across the Philippines
                    </p>
                    <div className="flex gap-12 animate-marquee justify-center items-center opacity-50">
                        {['🏪 Sari-sari Stores', '🥡 Food Vendors', '👔 RTW Sellers', '🛒 Market Vendors', '🏠 Home Businesses', '🚗 Mobile Sellers'].map((item, i) => (
                            <span key={i} className="text-white/40 text-lg whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Wave Divider */}
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
