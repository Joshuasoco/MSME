import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, APP_LINKS } from '@/lib/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons: Record<string, React.ElementType> = {
        Facebook,
        Instagram,
        Linkedin,
    };

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
                            <img src="/msmeLogo.png" alt="MSME Pathways Logo" className="w-14 h-14 rounded-lg object-contain" />
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
                                <a
                                    href="/privacy-policy"
                                    className="text-gray-400 hover:text-primary-yellow transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow rounded px-1 py-0.5"
                                    aria-label="View Privacy Policy"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms-of-service"
                                    className="text-gray-400 hover:text-primary-yellow transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow rounded px-1 py-0.5"
                                    aria-label="View Terms of Service"
                                >
                                    Terms of Service
                                </a>
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
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-yellow" />
                                <a
                                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
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
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-14 hover:opacity-80 transition-opacity"
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
                            © {currentYear} MSME Pathways. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms-of-service" className="text-gray-500 hover:text-gray-300 transition-colors">
                                Terms
                            </a>
                            <a href="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
