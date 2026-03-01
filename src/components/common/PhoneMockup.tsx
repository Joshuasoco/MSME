import { motion } from 'framer-motion';

interface PhoneMockupProps {
    animate?: boolean;
    screenImageSrc?: string;
    screenImageAlt?: string;
}

const PhoneMockup = ({
    animate = false,
    screenImageSrc = '/msmephone1revised.webp',
    screenImageAlt = 'MSME Pathways mobile app screen',
}: PhoneMockupProps) => {
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
                    <img
                        src={screenImageSrc}
                        alt={screenImageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={animate ? 'eager' : 'lazy'}
                        decoding="async"
                    />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
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
