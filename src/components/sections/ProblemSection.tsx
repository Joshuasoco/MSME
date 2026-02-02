import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { PROBLEMS } from '@/lib/constants';
import ChatWidget from '@/components/common/ChatWidget';

const iconMap: Record<string, React.ComponentType<any>> = {
  CircleX: LucideIcons.CircleX,
  FileQuestion: LucideIcons.FileQuestion,
  Building2: LucideIcons.Building2,
};

const ProblemSection = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="problem"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-red-50/20 to-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220,38,38,0.04) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-red-400/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-6 border border-red-100"
            whileHover={{ scale: 1.05 }}
          >
            <AlertTriangle className="w-4 h-4" />
            Common Challenges
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Bakit Mahirap</span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Kumuha ng Loan?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Common na problema ng micro-entrepreneurs at freelancers sa
            Pilipinas
          </p>
        </motion.div>

        {/* Enhanced Problem Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PROBLEMS.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
              >
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-red-100/50 h-full overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Top Accent Bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Animated Icon Container */}
                    <motion.div
                      className="relative w-16 h-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [-5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-red-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="relative w-8 h-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                    </motion.div>

                    {/* Problem Number Badge */}
                    <motion.div
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold text-sm flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-900 transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full group-hover:scale-150 transition-transform duration-500" />

                  {/* Animated Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-red-400/0 group-hover:border-red-400/20 transition-colors duration-500"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* AI Chatbot Widget */}
      <ChatWidget />
    </section>
  );
};

export default ProblemSection;