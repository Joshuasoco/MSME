import { motion } from 'framer-motion';
import { CircleX, FileQuestion, Building2, type LucideIcon } from 'lucide-react';
import { PROBLEMS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  CircleX,
  FileQuestion,
  Building2,
};

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#fbfbfd] py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-display text-4xl font-bold tracking-[-0.04em] text-[#111827] md:text-5xl lg:text-6xl">
            <span>Bakit Mahirap</span>
            <br />
            <span className="text-[#e34234]">
              Kumuha ng Loan?
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6b7280] md:text-lg">
            Common na problema ng micro-entrepreneurs at freelancers sa
            Pilipinas
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:gap-6">
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
                  className="group relative h-full overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#d7d9de] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="relative z-10">
                    <motion.div
                      className="mb-7 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#fff5f2] transition-transform duration-300 group-hover:scale-[1.04]"
                    >
                      <Icon className="h-6 w-6 text-[#e34234]" strokeWidth={2.2} />
                    </motion.div>

                    <span className="absolute right-7 top-8 font-mono text-xs font-medium tabular-nums text-[#a1a1aa] md:right-8">
                      0{index + 1}
                    </span>

                    <h3 className="mb-4 max-w-[15rem] font-display text-xl font-semibold leading-tight tracking-[-0.025em] text-[#111827] lg:text-[22px]">
                      {problem.title}
                    </h3>

                    <div className="mb-4 h-px w-8 bg-[#e34234]" />

                    <p className="text-[15px] leading-[1.65] text-[#667085]">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
