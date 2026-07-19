import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const HeroSection = () => (
    <section id="home" className="msme-hero msme-coming-hero">
        <div className="msme-container msme-coming-hero__layout">
            <motion.div
                className="msme-coming-hero__mark-wrap"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <div className="msme-coming-hero__mark" aria-label="MSME Pathways mark">
                    <img src="/msmeLogo.png" alt="MSME Pathways" />
                </div>
            </motion.div>

            <motion.div
                className="msme-coming-hero__copy"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">MSME Pathways · Coming soon</p>
                <h1>Better paths for small businesses.</h1>
                <p className="msme-coming-hero__lede">
                    A simpler way for Filipino microentrepreneurs to understand financing, build confidence, and move their business forward.
                </p>

                <div className="msme-coming-hero__action-row">
                    <a className="msme-coming-hero__action" href={`mailto:${CONTACT_INFO.email}?subject=MSME%20Pathways%20waitlist`}>
                        <Mail size={17} aria-hidden="true" />
                        Join the waitlist
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <span className="msme-coming-hero__note">Launching in 2026</span>
                </div>

                <motion.div
                    className="msme-store-badges"
                    aria-label="MSME Pathways app stores, coming soon"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
                >
                    <span className="msme-store-badges__label">Available soon on</span>
                    <div className="msme-store-badges__row">
                        <span className="msme-store-badge msme-store-badge--apple" aria-label="Download on the App Store — coming soon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.96-2.53 4.09ZM12.03 7.25C11.86 5.02 13.69 3.18 15.78 3c.29 2.58-2.34 4.51-3.75 4.25Z" />
                            </svg>
                            <span><small>Download on the</small>App Store</span>
                        </span>
                        <span className="msme-store-badge msme-store-badge--google" aria-label="Get it on Google Play — coming soon">
                            <img src="/google-play-badge.png" alt="" />
                        </span>
                    </div>
                </motion.div>

                <div className="msme-coming-hero__rule" aria-hidden="true" />
                <p className="msme-coming-hero__small-copy">
                    Built in the Philippines for sari-sari stores, vendors, and home-based sellers.
                </p>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;
