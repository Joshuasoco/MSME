import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

const stats = [
  {
    value: 10000,
    displayValue: '10K+',
    label: 'Active Users',
    description: 'Trusted by thousands',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    position: 'top',
  },
  {
    value: 50,
    displayValue: '₱50M+',
    label: 'Loans Enabled',
    description: 'Enabling dreams',
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-600',
    position: 'right',
  },
  {
    value: 4.8,
    displayValue: '4.8',
    suffix: '/5 ⭐',
    label: 'App Rating',
    description: 'Highly rated',
    icon: Star,
    color: 'from-amber-500 to-amber-600',
    position: 'bottom',
  },
  {
    value: 95,
    displayValue: '95%',
    label: 'Success Rate',
    description: 'Proven results',
    icon: CheckCircle,
    color: 'from-violet-500 to-violet-600',
    position: 'left',
  },
];

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="stats"
      className="relative py-24 md:py-32 bg-light overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-yellow/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            📊 Our Impact
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-dark">Numbers That</span>
            <br />
            <span className="text-gradient-blue">Speak for Themselves</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of Filipinos who are transforming their financial journey
          </p>
        </motion.div>

        {/* Circular Stats Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Element */}
          <motion.div
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full items-center justify-center shadow-2xl z-20"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: [0, 360] } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-center text-white">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-4xl font-bold">MSME</span>
                <p className="text-sm text-white/80">Pathways</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:relative lg:h-[500px]">
            {stats.map((stat, index) => {
              // Calculate position for circular layout on desktop
              const positions = {
                top: 'lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2',
                right: 'lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2',
                bottom: 'lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2',
                left: 'lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2',
              };

              return (
                <motion.div
                  key={index}
                  className={`${positions[stat.position as keyof typeof positions]}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="group relative bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full lg:w-56"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Progress Arc Background */}
                    <div className="absolute -inset-2 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10`} />
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-4 mx-auto`}
                      whileHover={{ rotate: -10, scale: 1.1 }}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Value */}
                    <div className="text-center">
                      <motion.div
                        className="text-3xl lg:text-4xl font-bold text-dark mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {stat.displayValue}
                        {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
                      </motion.div>
                      <p className="text-lg font-semibold text-gray-700 mb-1">
                        {stat.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {stat.description}
                      </p>
                    </div>

                    {/* Animated Gradient Border on Hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${index % 2 === 0 ? '#1565C0' : '#FFC107'}, transparent)`
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Connecting Lines (Desktop only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 800 500"
            fill="none"
          >
            <motion.circle
              cx="400"
              cy="250"
              r="180"
              stroke="url(#statsGradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ duration: 2 }}
            />
            <defs>
              <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1565C0" />
                <stop offset="50%" stopColor="#FFC107" />
                <stop offset="100%" stopColor="#1565C0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500">
            <span className="font-semibold text-primary-blue">Growing every day</span> with more Filipinos trusting MSME Pathways
          </p>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 80V40C360 80 720 20 1080 50C1260 65 1360 35 1440 50V80H0Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsSection;
