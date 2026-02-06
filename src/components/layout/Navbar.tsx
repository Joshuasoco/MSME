import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DarkModeToggle from '@/components/common/DarkModeToggle';
import { cn } from '@/lib/utils';
import { NAV_LINKS, APP_LINKS } from '@/lib/constants';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
            )}
        >
            <nav className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                    }}
                >
                    <img src="/msmeLogo.png" alt="MSME Pathways Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-contain" />
                    <span className={cn(
                        'font-display font-bold text-lg md:text-xl transition-colors',
                        isScrolled ? 'text-dark' : 'text-dark'
                    )}>
                        MSME Pathways
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.nav
                    className="hidden md:flex items-center gap-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    aria-label="Main navigation"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.href);
                            }}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary-blue relative group',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded-md px-2 py-1',
                                isScrolled ? 'text-gray-700' : 'text-gray-700'
                            )}
                            aria-label={`Navigate to ${link.label}`}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all group-hover:w-full" />
                        </a>
                    ))}
                </motion.nav>

                {/* CTA Button & Dark Mode */}
                <motion.div
                    className="hidden md:flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <DarkModeToggle />
                    <Button asChild size="lg" className="gap-2 rounded-full">
                        <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4" />
                            Download App
                        </a>
                    </Button>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t shadow-lg overflow-hidden"
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {NAV_LINKS.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block py-3 px-2 text-gray-700 font-medium hover:text-primary-blue transition-colors min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-md"
                                    aria-label={`Navigate to ${link.label}`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.05 }}
                                className="pt-2"
                            >
                                <Button asChild className="w-full gap-2 rounded-full min-h-[44px]">
                                    <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                        <Download className="w-4 h-4" />
                                        Download App
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
