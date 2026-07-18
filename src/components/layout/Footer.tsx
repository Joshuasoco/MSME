import { useEffect, useState, type ElementType } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ScrollText, ShieldCheck, X } from 'lucide-react';
import { APP_LINKS, CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

type LegalKey = 'privacy' | 'terms' | 'cookies';

const legalContent: Record<LegalKey, { title: string; icon: ElementType; content: string[] }> = {
    privacy: {
        title: 'Privacy Policy',
        icon: ShieldCheck,
        content: [
            'MSME Pathways collects only the information required to provide loan education and matching support.',
            'Personal data is processed according to the Data Privacy Act of 2012 and used only for service delivery, support, and product improvement.',
            'You can request account, data access, or deletion support anytime via msmepathways@gmail.com.',
        ],
    },
    terms: {
        title: 'Terms of Service',
        icon: ScrollText,
        content: [
            'By using MSME Pathways, you agree to use the platform for lawful financial education and loan pre-qualification guidance.',
            'Loan approvals are made by partner institutions and are not guaranteed by MSME Pathways.',
            'Content is provided for guidance and may be updated as product features evolve.',
        ],
    },
    cookies: {
        title: 'Cookie Notice',
        icon: Cookie,
        content: [
            'We use essential cookies to keep the website functional and remember your consent preferences.',
            'Analytics cookies may be used to improve experience and understand feature usage patterns.',
            'You can manage your cookie consent at any time by clearing local browser storage.',
        ],
    },
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [activeLegal, setActiveLegal] = useState<LegalKey | null>(null);

    const socialIcons: Record<string, ElementType> = { Facebook, Instagram, Linkedin };
    useEffect(() => {
        const handleOpenLegal = (event: Event) => {
            const key = (event as CustomEvent<string>).detail as LegalKey;
            if (key in legalContent) setActiveLegal(key);
        };
        window.addEventListener('msme:open-legal', handleOpenLegal as EventListener);
        return () => window.removeEventListener('msme:open-legal', handleOpenLegal as EventListener);
    }, []);

    const selectedLegal = activeLegal ? legalContent[activeLegal] : null;
    const LegalIcon = selectedLegal?.icon;

    return (
        <footer className="msme-footer">
            <div className="msme-container">
                <div className="msme-footer__grid">
                    <div className="msme-footer__brand">
                        <div className="msme-footer__logo-row">
                            <img src="/msmeLogo.png" alt="MSME Pathways" loading="lazy" decoding="async" />
                            <strong>MSME Pathways</strong>
                        </div>
                        <p>Empowering Filipino microentrepreneurs with AI-powered financial guidance and inclusive lending solutions.</p>
                        <div className="msme-footer__socials">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = socialIcons[social.icon];
                                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}><Icon size={17} aria-hidden="true" /></a>;
                            })}
                        </div>
                    </div>

                    <div>
                        <h3>Quick links</h3>
                        <ul className="msme-footer__links">
                            {NAV_LINKS.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
                            <li><button type="button" onClick={() => setActiveLegal('privacy')}>Privacy Policy</button></li>
                            <li><button type="button" onClick={() => setActiveLegal('terms')}>Terms of Service</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact us</h3>
                        <ul className="msme-footer__contact">
                            <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
                            {CONTACT_INFO.phone && <li><Phone size={16} aria-hidden="true" /><a href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`}>{CONTACT_INFO.phone}</a></li>}
                            <li><MapPin size={16} aria-hidden="true" /><span>{CONTACT_INFO.address}</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Download app</h3>
                        <a href={APP_LINKS.playStore} download="msme-pathways.apk" className="msme-footer__download">Get it on Google Play <span>↗</span></a>
                    </div>
                </div>

                <div className="msme-footer__bottom">
                    <span>© {currentYear} MSME Pathways. All rights reserved.</span>
                    <div><button type="button" onClick={() => setActiveLegal('privacy')}>Privacy</button><button type="button" onClick={() => setActiveLegal('terms')}>Terms</button><button type="button" onClick={() => setActiveLegal('cookies')}>Cookies</button></div>
                </div>
            </div>

            <AnimatePresence>
                {selectedLegal && (
                    <motion.div className="msme-legal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveLegal(null)} role="dialog" aria-modal="true" aria-label={selectedLegal.title}>
                        <motion.div className="msme-legal-modal" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.2 }} onClick={(event) => event.stopPropagation()}>
                            <div className="msme-legal-modal__header">
                                <div>{LegalIcon && <LegalIcon size={18} aria-hidden="true" />}<h2>{selectedLegal.title}</h2></div>
                                <button type="button" onClick={() => setActiveLegal(null)} aria-label="Close"><X size={18} aria-hidden="true" /></button>
                            </div>
                            {selectedLegal.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
