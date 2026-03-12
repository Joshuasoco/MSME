import { useState, useEffect, type ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck, ScrollText, Cookie } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, APP_LINKS } from '@/lib/constants';

type LegalKey = 'privacy' | 'terms' | 'cookies';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [activeLegal, setActiveLegal] = useState<LegalKey | null>(null);

    const socialIcons: Record<string, ElementType> = {
        Facebook,
        Instagram,
        Linkedin,
    };

    const legalContent: Record<LegalKey, { title: string; icon: ElementType; content: string[] }> = {
        privacy: {
            title: 'Privacy Policy',
            icon: ShieldCheck,
            content: [
                'MSME Pathways collects only the information required to provide loan education and matching support.',
                'Personal data is processed according to the Data Privacy Act of 2012 and used only for service delivery, support, and product improvement.',
                'You can request account, data access, or deletion support anytime via support@msmepathways.ph.',
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

    const selectedLegal = activeLegal ? legalContent[activeLegal] : null;
    const LegalIcon = selectedLegal?.icon;

    useEffect(() => {
        const legalKeys = new Set<LegalKey>(['privacy', 'terms', 'cookies']);
        const handleOpenLegal = (event: Event) => {
            const customEvent = event as CustomEvent<string>;
            if (customEvent.detail && legalKeys.has(customEvent.detail as LegalKey)) {
                setActiveLegal(customEvent.detail as LegalKey);
            }
        };

        window.addEventListener('msme:open-legal', handleOpenLegal as EventListener);
        return () => {
            window.removeEventListener('msme:open-legal', handleOpenLegal as EventListener);
        };
    }, []);

    return (
        <footer className="bg-dark-secondary text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/msmeLogo.png"
                                alt="MSME Pathways Logo"
                                className="w-14 h-14 rounded-lg object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                            <span className="font-display font-bold text-lg">MSME Pathways</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Empowering Filipino Microentrepreneurs with AI-powered financial guidance and inclusive lending solutions.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = socialIcons[social.icon];
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-blue transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-yellow transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow rounded px-1 py-0.5"
                                        aria-label={`Navigate to ${link.label}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegal('privacy')}
                                    className="text-gray-400 hover:text-primary-yellow transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow rounded px-1 py-0.5"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegal('terms')}
                                    className="text-gray-400 hover:text-primary-yellow transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow rounded px-1 py-0.5"
                                >
                                    Terms of Service
                                </button>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-yellow" />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            {CONTACT_INFO.phone && (
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary-yellow" />
                                    <a
                                        href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {CONTACT_INFO.phone}
                                    </a>
                                </li>
                            )}
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-yellow flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Download Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="font-display font-semibold text-lg mb-4">Download App</h3>
                        <div className="space-y-4">
                            <a
                                href={APP_LINKS.playStore}
                                download="msme-pathways.apk"
                                className="block"
                            >
                                <img
                                    src="/google-play-badge.png"
                                    alt="Get it on Google Play"
                                    className="h-14 hover:opacity-80 transition-opacity"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                            <div className="relative">
                                <div className="h-14 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 opacity-60">
                                    <span className="text-sm text-gray-400">iOS - Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            &copy; {currentYear} MSME Pathways. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <button type="button" onClick={() => setActiveLegal('privacy')} className="text-gray-500 hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </button>
                            <button type="button" onClick={() => setActiveLegal('terms')} className="text-gray-500 hover:text-gray-300 transition-colors">
                                Terms
                            </button>
                            <button type="button" onClick={() => setActiveLegal('cookies')} className="text-gray-500 hover:text-gray-300 transition-colors">
                                Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedLegal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedLegal.title}
                        onClick={() => setActiveLegal(null)}
                    >
                        <motion.div
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 24, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    {LegalIcon ? <LegalIcon className="w-5 h-5 text-primary-blue" /> : null}
                                    <h4 className="font-display font-bold text-2xl">{selectedLegal.title}</h4>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegal(null)}
                                    className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                {selectedLegal.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
