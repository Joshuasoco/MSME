import { motion } from 'framer-motion';

interface PhoneMockupProps {
    animate?: boolean;
}

const PhoneMockup = ({ animate = false }: PhoneMockupProps) => {
    const Container = animate ? motion.div : 'div';
    const animationProps = animate
        ? {
            animate: { y: [0, -10, 0] },
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
        }
        : {};

    return (
        <Container
            className="relative"
            {...(animationProps as any)}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-yellow/20 rounded-[3rem] blur-2xl scale-110" />

            {/* Phone Frame */}
            <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-gray-900/50">
                {/* Inner Bezel */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-primary-blue flex items-center justify-center z-10">
                        {/* Notch */}
                        <div className="w-24 h-6 bg-gray-900 rounded-b-2xl" />
                    </div>

                    {/* App Content */}
                    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white pt-12 px-4">
                        {/* App Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <img 
                                src="/msmeLogo.png" 
                                alt="MSME Pathways" 
                                className="w-10 h-10 rounded-xl object-contain"
                            />
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">MSME Pathways</p>
                                <p className="text-[10px] text-gray-500">Your Financial Journey</p>
                            </div>
                        </div>

                        {/* Welcome Card */}
                        <div className="bg-gradient-primary rounded-2xl p-4 mb-4 text-white">
                            <p className="text-xs opacity-80 mb-1">Magandang Araw!</p>
                            <p className="font-semibold text-lg">Start Your Journey</p>
                            <p className="text-xs opacity-80 mt-2">Pre-qualify for loans without affecting your credit score</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {[
                                { icon: '📋', label: 'Assessment' },
                                { icon: '📚', label: 'Learn' },
                                { icon: '💰', label: 'Lenders' },
                                { icon: '📊', label: 'Progress' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center"
                                    initial={animate ? { opacity: 0, y: 10 } : undefined}
                                    animate={animate ? { opacity: 1, y: 0 } : undefined}
                                    transition={animate ? { delay: 0.5 + index * 0.1 } : undefined}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <p className="text-xs text-gray-600 mt-1 font-medium">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Card */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-gray-800">Your Progress</p>
                                <span className="text-xs text-primary-blue font-semibold">75%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-primary rounded-full"
                                    initial={animate ? { width: 0 } : { width: '75%' }}
                                    animate={animate ? { width: '75%' } : undefined}
                                    transition={animate ? { delay: 1, duration: 1, ease: 'easeOut' } : undefined}
                                />
                            </div>
                            <p className="text-[10px] text-gray-500 mt-2">Almost ready for pre-qualification!</p>
                        </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-4">
                        {['🏠', '📖', '💬', '👤'].map((icon, index) => (
                            <div
                                key={index}
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-primary-blue/10' : ''
                                    }`}
                            >
                                <span className="text-lg">{icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            {animate && (
                <>
                    <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-primary-yellow rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-blue rounded-full"
                        animate={{ scale: [1.2, 1, 1.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </>
            )}
        </Container>
    );
};

export default PhoneMockup;
