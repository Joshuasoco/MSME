import { motion } from 'framer-motion';
import { ArrowRight, Download, LockKeyhole, WalletCards } from 'lucide-react';
import { APP_LINKS } from '@/lib/constants';
import PhoneMockup from '@/components/common/PhoneMockup';

const CTASection = () => (
    <section id="cta" className="msme-cta" aria-labelledby="cta-heading">
        <div className="msme-container msme-cta__layout">
            <motion.div
                className="msme-cta__copy"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">Take the next step</p>
                <h2 id="cta-heading">Ready for your next move?</h2>
                <p>A clearer, more confident way to find financing for the business you are building.</p>
                <div className="msme-cta__details">
                    <span><Download size={15} aria-hidden="true" />Free to download</span>
                    <span><WalletCards size={15} aria-hidden="true" />No credit check</span>
                    <span><LockKeyhole size={15} aria-hidden="true" />Secure & private</span>
                </div>
                <div className="msme-actions">
                    <a className="msme-button msme-button--primary" href={APP_LINKS.playStore} download="msme-pathways.apk">
                        <Download size={17} aria-hidden="true" />
                        Download free
                    </a>
                    <a className="msme-button msme-button--text" href="#features">
                        Learn more <ArrowRight size={16} aria-hidden="true" />
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="msme-cta__visual"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, delay: 0.05, ease: 'easeOut' }}
            >
                <PhoneMockup
                    screenImageSrc="/iPhone%2016%20-%2029.png"
                    screenImageAlt="MSME Pathways application screen"
                    frameClassName="msme-phone--small"
                />
            </motion.div>
        </div>
    </section>
);

export default CTASection;
