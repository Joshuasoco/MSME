import { motion } from 'framer-motion';
import { ArrowDown, Download, LockKeyhole } from 'lucide-react';
import { APP_LINKS } from '@/lib/constants';
import PhoneMockup from '@/components/common/PhoneMockup';

const HeroSection = () => {
    const scrollToFeatures = () => {
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="msme-hero">
            <div className="msme-container msme-hero__layout">
                <motion.div
                    className="msme-hero__copy"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                    <p className="msme-eyebrow">MSME Pathways</p>
                    <h1>Walang credit history? <span>Pwede ka pa rin.</span></h1>
                    <p className="msme-hero__lede">
                        Mas patas na access sa financing para sa sari-sari stores, vendors, at home-based sellers—gamit ang AI na tumitingin sa tunay na galaw ng negosyo mo.
                    </p>

                    <div className="msme-actions">
                        <a className="msme-button msme-button--primary" href={APP_LINKS.playStore} download="msme-pathways.apk">
                            <Download size={17} aria-hidden="true" />
                            Download free
                        </a>
                        <button type="button" className="msme-button msme-button--text" onClick={scrollToFeatures}>
                            Alamin pa
                            <ArrowDown size={16} aria-hidden="true" />
                        </button>
                    </div>

                    <div className="msme-hero__proof" aria-label="MSME Pathways highlights">
                        <div><strong>10K+</strong><span>MSME users</span></div>
                        <div><strong>PHP 50M+</strong><span>Financing enabled</span></div>
                        <div><strong>100%</strong><span>Secure</span></div>
                    </div>

                    <p className="msme-trust-note">
                        <LockKeyhole size={14} aria-hidden="true" />
                        Data Privacy Act compliant
                    </p>
                </motion.div>

                <motion.div
                    className="msme-hero__visual"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.24, delay: 0.05, ease: 'easeOut' }}
                >
                    <PhoneMockup
                        screenImageSrc="/iPhone%2016%20-%2027%20%281%29.png"
                        screenImageAlt="MSME Pathways pre-qualification screen"
                    />
                </motion.div>
            </div>

            <button type="button" className="msme-scroll-cue" onClick={scrollToFeatures} aria-label="Scroll to features">
                <span>Scroll to explore</span>
                <ArrowDown size={15} aria-hidden="true" />
            </button>
        </section>
    );
};

export default HeroSection;
