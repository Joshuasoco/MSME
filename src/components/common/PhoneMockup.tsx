import { motion } from 'framer-motion';
import { Home, BookOpen, MessageCircle, User, ClipboardCheck, Wallet, LineChart, GraduationCap } from 'lucide-react';

interface PhoneMockupProps {
    animate?: boolean;
}

const quickActions = [
    { label: 'Assess', icon: ClipboardCheck },
    { label: 'Learn', icon: GraduationCap },
    { label: 'Loans', icon: Wallet },
    { label: 'Track', icon: LineChart },
];

const bottomNavIcons = [Home, BookOpen, MessageCircle, User];

const PhoneMockup = ({ animate = false }: PhoneMockupProps) => {
    const Container = animate ? motion.div : 'div';

    const animationProps = animate
        ? {
            animate: { y: [0, -10, 0] },
            transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const },
        }
        : {};

    return (
        <Container className="relative" {...(animationProps as Record<string, unknown>)}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/25 to-primary-yellow/20 rounded-[3rem] blur-2xl scale-105" />

            <div className="relative w-[220px] min-[375px]:w-[250px] sm:w-[280px] md:w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl shadow-black/35">
                <div className="relative w-full aspect-[9/19] bg-gradient-to-b from-primary-blue to-primary-blue-dark rounded-[2.5rem] overflow-hidden">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                    <div className="pt-10 px-4 pb-16">
                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src="/msmeLogo.png"
                                alt="MSME Pathways"
                                className="w-10 h-10 rounded-xl object-contain bg-white/20 backdrop-blur-sm p-1"
                                loading={animate ? 'eager' : 'lazy'}
                                decoding="async"
                            />
                            <div>
                                <p className="text-white font-semibold text-sm">MSME Pathways</p>
                                <p className="text-white/70 text-[10px]">Your Financial Guide</p>
                            </div>
                        </div>

                        <motion.div
                            className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10"
                            initial={animate ? { opacity: 0, y: 10 } : undefined}
                            animate={animate ? { opacity: 1, y: 0 } : undefined}
                            transition={animate ? { delay: 0.2 } : undefined}
                        >
                            <p className="text-white/75 text-xs mb-1">Magandang araw!</p>
                            <p className="text-white font-semibold text-sm">Ready ka na ba?</p>
                            <p className="text-white/70 text-xs mt-1">Pre-qualify without affecting credit</p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {quickActions.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                                    initial={animate ? { opacity: 0, scale: 0.95 } : undefined}
                                    animate={animate ? { opacity: 1, scale: 1 } : undefined}
                                    transition={animate ? { delay: 0.35 + (index * 0.08) } : undefined}
                                >
                                    <item.icon className="w-4 h-4 text-white/85" />
                                    <p className="text-white/85 text-xs mt-2">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="bg-white rounded-xl p-3"
                            initial={animate ? { opacity: 0 } : undefined}
                            animate={animate ? { opacity: 1 } : undefined}
                            transition={animate ? { delay: 0.7 } : undefined}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-xs text-gray-600">Progress</span>
                                <span className="text-xs font-bold text-primary-blue">75%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary-blue to-primary-yellow rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ delay: animate ? 0.8 : 0.1, duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-14 bg-white/10 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-2">
                        {bottomNavIcons.map((Icon, index) => (
                            <div key={index} className={`p-2 rounded-full ${index === 0 ? 'bg-white/20' : ''}`}>
                                <Icon className="w-4 h-4 text-white" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
