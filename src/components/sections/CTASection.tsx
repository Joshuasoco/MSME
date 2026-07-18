import { motion } from 'framer-motion';
import { Download, ArrowRight, BadgeCheck, LockKeyhole, WalletCards } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';
import PhoneMockup from '@/components/common/PhoneMockup';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

const CTASection = () => {
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const allowAmbientMotion = !prefersReducedMotion && !isMobile;

    const benefits = [
        { label: 'Free to download', icon: Download },
        { label: 'No credit check', icon: WalletCards },
        { label: 'Secure & private', icon: LockKeyhole },
    ];

    return (
        <section id="cta" className="relative overflow-hidden bg-[#0B0B0D] py-24 md:py-32">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(21,101,192,0.28),transparent_48%),radial-gradient(ellipse_at_18%_8%,rgba(255,193,7,0.06),transparent_40%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_30%,rgba(0,0,0,0.18))]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                            MSME Pathways
                        </p>

                        <h2 className="mb-6 max-w-xl font-body text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.25rem]">
                            Ready for your next move?
                        </h2>

                        <p className="mb-9 max-w-lg text-base font-normal leading-7 text-[#A1A1A6] sm:text-lg sm:leading-8 mx-auto lg:mx-0">
                            A clearer, more confident way to find financing for the business you are building.
                        </p>

                        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[#A1A1A6] lg:justify-start">
                            {benefits.map((benefit) => (
                                <motion.div
                                    key={benefit.label}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <benefit.icon className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.5} />
                                    <span className="text-sm tracking-[-0.01em]">{benefit.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="group rounded-full gap-2 border-0 bg-primary-yellow px-8 py-6 text-base font-semibold text-slate-950 transition-colors duration-300 hover:bg-[#FFD54A] focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D]"
                            >
                                <a href={APP_LINKS.playStore} download="msme-pathways.apk">
                                    <Download className="h-4 w-4" strokeWidth={2} />
                                    Download
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full gap-2 border border-white/25 bg-transparent px-8 py-6 text-base font-medium text-white hover:border-white/60 hover:bg-white/5 transition-colors duration-300"
                            >
                                <a href="#features">
                                    Learn more
                                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                                </a>
                            </Button>
                        </div>

                        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-white/40 lg:justify-start">
                            <BadgeCheck className="h-4 w-4" strokeWidth={1.5} />
                            <span>Designed for Filipino entrepreneurs</span>
                        </div>
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
