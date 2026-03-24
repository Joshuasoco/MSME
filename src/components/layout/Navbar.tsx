import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        <header className="fixed top-0 left-0 right-0 z-50">
            <motion.nav
                animate={{ scale: isScrolled ? 0.96 : 1, y: isScrolled ? -1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(
                    'mx-auto mt-2 md:mt-3 rounded-full border flex items-center justify-between relative origin-top transition-all duration-300',
                    isScrolled
                        ? 'w-[calc(100%-1.25rem)] md:w-[calc(100%-2.75rem)] max-w-[1100px] h-14 md:h-[60px] px-3 md:px-4 bg-[#edf5ed]/95 border-white/70 backdrop-blur-xl shadow-[0_12px_28px_rgba(15,23,42,0.14)]'
                        : 'w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-2.75rem)] xl:w-[calc(100%-3.5rem)] max-w-[1180px] lg:max-w-[1220px] 2xl:max-w-[1260px] h-16 md:h-[70px] lg:h-[72px] px-4 md:px-5 bg-[#edf5ed]/88 border-white/75 backdrop-blur-md shadow-[0_8px_24px_rgba(148,163,184,0.18)]'
                )}
            >
                {/* Logo */}
                <motion.a
                    href="#home"
                    className={cn(
                        'flex items-center transition-all duration-300',
                        isScrolled ? 'gap-1.5 pl-1' : 'gap-2 pl-1 md:pl-2'
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                    }}
                >
                    <img
                        src="/msmeLogo.png"
                        alt="MSME Pathways Logo"
                        className={cn(
                            'rounded-full object-contain bg-white/60 transition-all duration-300',
                            isScrolled ? 'w-9 h-9 md:w-10 md:h-10 p-0.5' : 'w-10 h-10 md:w-[44px] md:h-[44px] p-1'
                        )}
                    />
                    <span className={cn(
                        'font-display font-bold transition-all duration-300',
                        isScrolled ? 'text-[0.95rem] md:text-[1.12rem]' : 'text-base md:text-[1.3rem]',
                        isScrolled ? 'text-[#203a2b]' : 'text-[#234332]'
                    )}>
                        MSME Pathways
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.nav
                    className={cn(
                        'hidden md:flex absolute left-1/2 -translate-x-1/2 items-center transition-all duration-300',
                        isScrolled ? 'gap-7' : 'gap-8'
                    )}
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
                                'text-sm font-semibold transition-colors relative group',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md px-2 py-1',
                                isScrolled ? 'text-[#3f5f4c]' : 'text-[#3a5a48]'
                            )}
                            aria-label={`Navigate to ${link.label}`}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </motion.nav>

                {/* CTA Button */}
                <motion.div
                    className={cn(
                        'hidden md:flex items-center gap-3 transition-all duration-300',
                        isScrolled ? 'pr-1' : 'pr-1 md:pr-2'
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button
                        asChild
                        className={cn(
                            'gap-2 rounded-full bg-slate-900 hover:bg-black text-white transition-all duration-300',
                            isScrolled ? 'h-10 px-5 text-sm' : 'h-11 px-6 text-base'
                        )}
                    >
                        <a href={APP_LINKS.playStore} download="msme-pathways.apk">
                            <Download className="w-4 h-4" />
                            Download App
                        </a>
                    </Button>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        'md:hidden mr-1 p-2 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                        isScrolled ? 'bg-white/70 hover:bg-white' : 'bg-white/80 hover:bg-white shadow-sm'
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? (
                        <X className={cn('w-6 h-6', isScrolled ? 'text-gray-700' : 'text-gray-900')} />
                    ) : (
                        <Menu className={cn('w-6 h-6', isScrolled ? 'text-gray-700' : 'text-gray-900')} />
                    )}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border border-slate-200 shadow-lg overflow-hidden mt-2 mx-4 rounded-2xl"
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
                                    <a href={APP_LINKS.playStore} download="msme-pathways.apk">
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
