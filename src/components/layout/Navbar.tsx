import { motion } from 'framer-motion';

const Navbar = () => (
    <header className="msme-topbar">
        <div className="msme-container msme-topbar__inner">
            <a className="msme-wordmark" href="#home" aria-label="MSME Pathways home">
                <img src="/msmeLogo.png" alt="MSME Pathways" />
            </a>

            <motion.span
                className="msme-topbar__status"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
            >
                Launching soon
            </motion.span>
        </div>
    </header>
);

export default Navbar;
