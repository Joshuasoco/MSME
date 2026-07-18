import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, TrendingUp, Users, ShieldCheck, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';
import { useRef } from 'react';
import PhoneMockup from '@/components/common/PhoneMockup';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

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
        { icon: Users, value: '10K+', label: 'MSME users' },
        { icon: TrendingUp, value: 'PHP 50M+', label: 'Financing enabled' },
        { icon: ShieldCheck, value: '100%', label: 'Secure' },
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
                        className="lg:col-span-7 text-center lg:text-left lg:pr-8 xl:pr-16"
                    >
                        <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                            <span className="h-px w-8 bg-primary-blue/50" aria-hidden="true" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-blue sm:text-xs">
                                Puhunan para sa masisipag
                            </span>
                        </div>

                        <h1 className="mx-auto mb-6 max-w-[700px] font-body text-[clamp(3.15rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 lg:mx-0">
                            Walang credit history?
                            <span className="mt-2 block text-primary-blue">Pwede ka pa rin.</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-[600px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
                            Mas patas na access sa financing para sa sari-sari stores, vendors, at home-based sellers—
                            gamit ang AI na tumitingin sa tunay na galaw ng negosyo mo.
                        </p>

                        <div className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                            <a
                                href={APP_LINKS.playStore}
                                download="msme-pathways.apk"
                                aria-label="Download MSME Pathways app for free"
                                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-slate-950 px-7 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-blue hover:shadow-[0_16px_34px_rgba(21,101,192,0.24)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
                            >
                                <Download className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
                                Download free
                            </a>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="group min-h-14 rounded-full px-6 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-primary-blue"
                                onClick={scrollToFeatures}
                                aria-label="Learn more about features"
                            >
                                Alamin pa
                                <ArrowDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                            </Button>
                        </div>

                        <motion.div
                            className="mx-auto grid max-w-[620px] grid-cols-3 divide-x divide-slate-200/80 border-y border-slate-200/80 py-5 lg:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {floatingStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex min-w-0 items-center justify-center gap-2 px-2 sm:gap-3 sm:px-5 lg:first:justify-start lg:last:justify-end"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 sm:flex">
                                        <stat.icon className="h-4 w-4 text-primary-blue" />
                                    </div>
                                    <div className="min-w-0 text-left leading-tight">
                                        <span className="block text-sm font-bold tracking-[-0.02em] text-slate-900 sm:text-[15px]">{stat.value}</span>
                                        <span className="mt-1 block truncate text-[10px] text-slate-500 sm:text-xs">{stat.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                        >
                            <LockKeyhole className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Data Privacy Act compliant</span>
                            <span className="text-slate-300" aria-hidden="true">•</span>
                            <ShieldCheck className="h-3.5 w-3.5 text-primary-blue" />
                            <span>Secure by design</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end"
                        style={allowAmbientMotion ? { y: phoneY } : undefined}
                    >
                        <div className="relative scale-[0.82] min-[375px]:scale-90 sm:scale-[0.96] lg:scale-[0.92] xl:scale-[0.95] origin-center lg:-translate-x-5">
                            <PhoneMockup
                                animate={allowAmbientMotion}
                                screenImageSrc="/iPhone%2016%20-%2027%20%281%29.png"
                                screenImageAlt="You're pre-qualified screen"
                                showLoanBadge
                                loanBadgeTitle="Loan Pre-Qualified!"
                                loanBadgeAmount="PHP 25,000"
                                showApprovalBadge
                                approvalBadgeText="Check: Your loan is already approved"
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
