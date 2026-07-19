import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

type PlanMode = 'Personal' | 'Business';

const PLANS = [
    {
        name: 'Go',
        price: '249',
        description: 'Keep building with expanded access',
        features: ['Core business tips', 'More messages and uploads', 'Longer memory', 'Expanded voice mode'],
    },
    {
        name: 'Plus',
        price: '499',
        description: 'More access to advanced intelligence',
        features: ['Advanced pathways', 'Expanded memory across chats', 'Work agent for multi-step tasks', 'Priority sari-sari support', 'Early access to Google Play'],
    },
    {
        name: 'Pro',
        price: '2,499',
        description: 'Maximize your productivity',
        features: ['5x more usage than Plus', 'Frontier business model', 'Maximum access to Pathways agent', 'Unlimited core chat', 'Unlimited and faster image creation', 'Maximum memory and context'],
    },
] as const;

const HeroSection = () => {
    const [mode, setMode] = useState<PlanMode>('Personal');
    const [notice, setNotice] = useState(false);

    return (
        <section id="home" className="msme-hero msme-coming-hero msme-paywall msme-pricing-page">
            <div className="msme-pricing-shell">
                <header className="msme-pricing-topbar">
                    <a className="msme-pricing-brand" href="#home" aria-label="MSME Pathways home">
                        <span className="msme-pricing-brand__tile">
                            <img src="/msmeLogo.png" alt="" />
                        </span>
                        <span>MSME Pathways</span>
                    </a>
                    <button className="msme-pricing-close" type="button" aria-label="Close pricing" onClick={() => setNotice(true)}>
                        <X size={22} aria-hidden="true" />
                    </button>
                </header>

                <motion.div
                    className="msme-pricing-intro"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                    <p className="msme-eyebrow">MSME PATHWAYS &middot; MEMBERS ONLY</p>
                    <h1>Upgrade your plan</h1>
                    <p>Unlock unlimited pathways, priority support, and absolutely no more waiting in 2026.</p>

                    <div className="msme-pricing-toggle" role="tablist" aria-label="Choose plan type">
                        {(['Personal', 'Business'] as const).map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                role="tab"
                                aria-selected={mode === tab}
                                className={mode === tab ? 'is-active' : ''}
                                onClick={() => setMode(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="msme-pricing-grid" aria-label={`${mode} plans`}>
                    {PLANS.map((plan, index) => (
                        <motion.article
                            key={plan.name}
                            className={`msme-pricing-card ${plan.name === 'Pro' ? 'is-featured' : ''}`}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                        >
                            <div className="msme-pricing-card__heading">
                                <h2>{plan.name}</h2>
                                {plan.name === 'Pro' && <span className="msme-pricing-card__badge">BEST VALUE</span>}
                            </div>
                            <div className="msme-pricing-card__price">
                                <span className="msme-pricing-card__currency">₱</span>
                                <strong>{plan.price}</strong>
                                <span className="msme-pricing-card__period">/ month</span>
                            </div>
                            <p className="msme-pricing-card__description">{plan.description}</p>
                            <button
                                className="msme-pricing-card__button"
                                type="button"
                                onClick={() => setNotice(true)}
                            >
                                {plan.name === 'Pro' ? 'Upgrade to Pro' : `Switch to ${plan.name}`}
                            </button>
                            <ul className="msme-pricing-card__features">
                                {plan.features.map((feature) => (
                                    <li key={feature}>
                                        <Check size={16} aria-hidden="true" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>

                <p className="msme-pricing-footnote">
                    Built in the Philippines. Still can&apos;t believe you have to pay for this.
                </p>

                {notice && (
                    <button className="msme-pricing-notice" type="button" onClick={() => setNotice(false)} aria-label="Dismiss payment notice">
                        <strong>Gcash:</strong> 09021312322
                    </button>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
