import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

const stats = [
  {
    label: 'Active Users',
    description: 'Trusted by thousands',
    icon: Users,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    countEnd: 10000,
    prefix: '',
    suffix: '+',
  },
  {
    label: 'Loans Enabled',
    description: 'Enabling dreams',
    icon: TrendingUp,
    color: 'bg-emerald-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    countEnd: 50,
    prefix: 'PHP ',
    suffix: 'M+',
  },
  {
    label: 'Success Rate',
    description: 'Proven results',
    icon: CheckCircle,
    color: 'bg-violet-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    countEnd: 95,
    prefix: '',
    suffix: '%',
  },
  {
    label: 'App Rating',
    description: 'Highly rated',
    icon: Star,
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    countEnd: 4.8,
    decimals: 1,
    prefix: '',
    suffix: '/5',
  },
];

const CountUp = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const allowAmbientMotion = !prefersReducedMotion && !isMobile;

  return (
    <section
      ref={containerRef}
      id="stats"
      className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"
          animate={allowAmbientMotion ? { scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] } : undefined}
          transition={allowAmbientMotion ? { duration: 8, repeat: Infinity } : undefined}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl"
          animate={allowAmbientMotion ? { scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] } : undefined}
          transition={allowAmbientMotion ? { duration: 10, repeat: Infinity } : undefined}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-blue/10 text-primary-blue text-sm font-medium rounded-full mb-6 border border-primary-blue/20"
            whileHover={{ scale: 1.02 }}
          >
            <span className={`w-2 h-2 bg-primary-blue rounded-full ${allowAmbientMotion ? 'animate-pulse' : ''}`} />
            Our Impact
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Numbers That</span>
            <br />
            <span className="bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Filipinos who are transforming their financial journey with MSME Pathways.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            >
              <div className={`absolute -inset-4 rounded-full border-2 border-dashed border-gray-200 ${allowAmbientMotion ? 'animate-spin-slow' : ''}`} />

              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-blue via-primary-blue to-blue-700 shadow-2xl shadow-primary-blue/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold tracking-tight">MSME</p>
                  <p className="text-sm font-medium text-white/80">Pathways</p>
                  <div className="w-8 h-px bg-white/30 mx-auto my-2" />
                  <p className="text-xs text-white/70">Trusted Partner</p>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-full bg-primary-blue/20"
                animate={allowAmbientMotion ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : undefined}
                transition={allowAmbientMotion ? { duration: 2, repeat: Infinity } : undefined}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index === 1 || index === 2 ? 'xl:mt-24' : ''}`}
              >
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  whileHover={allowAmbientMotion ? { y: -4 } : undefined}
                >
                  <div
                    className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />

                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={allowAmbientMotion ? { rotate: -5 } : undefined}
                    >
                      <stat.icon className={`w-7 h-7 ${stat.textColor}`} />
                    </motion.div>

                    <div className="mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        <CountUp
                          end={stat.countEnd}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimals={stat.decimals || 0}
                        />
                      </span>
                    </div>

                    <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>

                  <div
                    className={`absolute -bottom-8 -right-8 w-24 h-24 ${stat.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block -z-0"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.ellipse
              cx="500"
              cy="300"
              rx="280"
              ry="180"
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              strokeDasharray="6 6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1565C0" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFC107" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1565C0" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((initial) => (
                <div
                  key={initial}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-primary-blue">10,000+</span>{' '}
              happy users and growing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
