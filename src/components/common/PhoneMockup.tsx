import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PhoneMockupProps {
    animate?: boolean;
    screenImageSrc?: string;
    screenImageAlt?: string;
    screenImageFit?: 'cover' | 'contain';
    frameClassName?: string;
    showLoanBadge?: boolean;
    loanBadgeTitle?: string;
    loanBadgeAmount?: string;
    showApprovalBadge?: boolean;
    approvalBadgeText?: string;
}

const PhoneMockup = ({
    animate = false,
    screenImageSrc = '/msmephone1revised.webp',
    screenImageAlt = 'MSME Pathways mobile app screen',
    screenImageFit = 'cover',
    frameClassName = '',
    showLoanBadge = false,
    loanBadgeTitle = 'Loan Pre-Qualified!',
    loanBadgeAmount = 'PHP 25,000',
    showApprovalBadge = false,
    approvalBadgeText = 'Check: Your loan is already approved',
}: PhoneMockupProps) => {
    const Container = animate ? motion.div : 'div';

    const animationProps = animate
        ? {
            animate: { y: [0, -10, 0] },
            transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const },
        }
        : {};

    return (
        <Container className="relative mx-auto overflow-visible" {...(animationProps as Record<string, unknown>)}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/25 via-cyan-400/15 to-primary-yellow/20 rounded-[3.4rem] blur-3xl scale-110" />

            {showApprovalBadge && (
                <motion.div
                    className="pointer-events-none absolute right-2 sm:-right-10 md:-right-20 top-[32%] z-[70]"
                    animate={animate ? { y: [0, -4, 0], rotate: [-12, -4, -6] } : undefined}
                    transition={animate ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : undefined}
                >
                    <div className="min-w-[182px] flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_30px_rgba(15,23,42,0.26)] ring-1 ring-emerald-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <p className="whitespace-nowrap text-[11px] sm:text-xs font-semibold text-slate-700">{approvalBadgeText}</p>
                    </div>
                </motion.div>
            )}

            <div
                className={`relative w-[220px] min-[375px]:w-[250px] sm:w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3.2rem] bg-gradient-to-b from-slate-300 via-slate-500 to-slate-900 p-[5px] shadow-[0_30px_60px_rgba(2,6,23,0.45)] ${frameClassName}`}
            >
                <div className="absolute inset-[1px] rounded-[3.1rem] bg-gradient-to-r from-white/35 via-transparent to-white/20 pointer-events-none" />

                <div className="absolute -left-[2px] top-[19%] h-8 w-[3px] rounded-full bg-slate-500/85" />
                <div className="absolute -left-[2px] top-[27%] h-12 w-[3px] rounded-full bg-slate-500/85" />
                <div className="absolute -left-[2px] top-[37%] h-12 w-[3px] rounded-full bg-slate-500/85" />
                <div className="absolute -right-[2px] top-[31%] h-16 w-[3px] rounded-full bg-slate-500/85" />

                <div className="relative h-full w-full rounded-[2.95rem] bg-black p-[7px] shadow-[inset_0_0_0_1px_rgba(148,163,184,0.35)]">
                    <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-[#050912]">
                        <img
                            src={screenImageSrc}
                            alt={screenImageAlt}
                            className={`absolute inset-0 h-full w-full ${
                                screenImageFit === 'contain' ? 'object-contain bg-black' : 'object-cover'
                            }`}
                            loading={animate ? 'eager' : 'lazy'}
                            decoding="async"
                        />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_42%)] pointer-events-none" />
                        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.45)] pointer-events-none" />

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                            <div className="relative h-7 w-[124px] rounded-b-[1.05rem] bg-black shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
                                <div className="absolute left-1/2 top-[9px] h-[3px] w-12 -translate-x-1/2 rounded-full bg-slate-700/85" />
                                <div className="absolute right-[14px] top-[7px] h-[8px] w-[8px] rounded-full border border-slate-700/50 bg-slate-600/70" />
                            </div>
                        </div>

                        <div className="absolute bottom-2.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30 backdrop-blur-sm" />
                    </div>
                </div>
            </div>

            {showLoanBadge && (
                <motion.div
                    className="pointer-events-none absolute left-2 sm:-left-10 md:-left-14 bottom-[20%] z-[60] rotate-[-6deg]"
                    animate={animate ? { y: [0, -4, 0], rotate: [-6, -4, -6] } : undefined}
                    transition={animate ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : undefined}
                >
                    <div className="min-w-[182px] flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_30px_rgba(15,23,42,0.26)] ring-1 ring-slate-200">
                        <div className="flex -space-x-1.5">
                            <span className="h-4 w-4 rounded-full border border-white bg-blue-500 text-[8px] font-bold text-white grid place-items-center">J</span>
                            <span className="h-4 w-4 rounded-full border border-white bg-emerald-500 text-[8px] font-bold text-white grid place-items-center">M</span>
                            <span className="h-4 w-4 rounded-full border border-white bg-amber-500 text-[8px] font-bold text-white grid place-items-center">R</span>
                        </div>
                        <div className="leading-tight">
                            <p className="whitespace-nowrap text-[11px] font-semibold text-slate-700">{loanBadgeTitle}</p>
                            <p className="whitespace-nowrap text-[14px] font-extrabold text-blue-700 tracking-tight">{loanBadgeAmount}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {animate && (
                <>
                    <motion.div
                        className="absolute -top-3 -right-3 w-5 h-5 bg-primary-yellow rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-blue rounded-full"
                        animate={{ scale: [1.2, 1, 1.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </>
            )}
        </Container>
    );
};

export default PhoneMockup;
