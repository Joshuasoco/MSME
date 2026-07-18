import { motion } from 'framer-motion';

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
}: PhoneMockupProps) => {
    const Container = animate ? motion.div : 'div';

    return (
        <Container
            className="msme-phone-wrap"
            {...(animate
                ? { animate: { y: [0, -5, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const } }
                : {})}
        >
            <div className={`msme-phone ${frameClassName}`}>
                <div className="msme-phone__screen">
                    <img
                        src={screenImageSrc}
                        alt={screenImageAlt}
                        className={screenImageFit === 'contain' ? 'is-contain' : ''}
                        loading="eager"
                        decoding="async"
                    />
                    <div className="msme-phone__island" aria-hidden="true" />
                    <div className="msme-phone__home" aria-hidden="true" />
                </div>
            </div>
        </Container>
    );
};

export default PhoneMockup;
