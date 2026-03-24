import { motion } from 'framer-motion';
import { FileText, Zap, Tag, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'alternative-data-credit-score',
    icon: FileText,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    title: 'Alternative Data Credit Score',
    description:
      'Connect your utility bills (Meralco, Manila Water) and business transactions to build your credit score effortlessly.',
    cta: 'Learn more',
    href: '#features',
  },
  {
    id: 'fast-and-easy-application',
    icon: Zap,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accentBg: 'bg-blue-50',
    title: 'Fast and Easy Application',
    description:
      'Apply in minutes from your phone. No physical documents, no waiting in lines, just fast approvals.',
    cta: 'Start applying',
    href: '#eligibility',
  },
  {
    id: 'zero-fees-low-interest',
    icon: Tag,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    accentBg: 'bg-green-50',
    title: 'Zero Fees, Low Interest',
    description:
      'Transparency is our promise. Pay only what you owe with zero hidden fees and the lowest rates for micro-entrepreneurs.',
    cta: 'View rates',
    href: '#faq',
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Accent blob top-right */}
                <div
                  className={`absolute -top-8 -right-8 w-32 h-32 ${feature.accentBg} rounded-full opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-80`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* CTA */}
                <a
                  href={feature.href}
                  className={`relative z-10 inline-flex items-center gap-1 mt-6 text-sm font-semibold ${feature.iconColor} hover:gap-2 transition-all duration-200`}
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl px-8 py-16 text-center overflow-hidden"
        >
          {/* Subtle inner glow orbs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to grow your business?
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
              Join thousands of Filipino entrepreneurs who have unlocked their potential with MSME
              Pathways.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#eligibility"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm w-full sm:w-auto"
              >
                Get Started Now
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200 text-sm w-full sm:w-auto"
              >
                Watch Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
