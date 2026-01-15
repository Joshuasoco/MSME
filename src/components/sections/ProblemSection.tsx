import { motion } from 'framer-motion';
import { XCircle, HelpCircle, Building2, TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const problems = [
    {
        icon: XCircle,
        title: 'No Credit History',
        description: 'Maraming negosyante ang walang credit record kaya mahirap silang pagkatiwalaan ng mga banks.',
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
        height: 'h-[320px]',
        iconPosition: 'top-left',
    },
    {
        icon: HelpCircle,
        title: 'Limited Financial Knowledge',
        description: 'Kulang sa knowledge about proper borrowing — hindi alam kung saan magsisimula.',
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        height: 'h-[280px]',
        iconPosition: 'top-right',
    },
    {
        icon: Building2,
        title: 'Complicated Processes',
        description: 'Nakakatakot at overwhelming ang mga requirements ng formal lending institutions.',
        color: 'from-amber-500 to-amber-600',
        bgColor: 'bg-amber-50',
        height: 'h-[300px]',
        iconPosition: 'bottom-left',
    },
];

const ProblemSection = () => {
    return (
        <section
            id="problem"
            className="relative py-24 md:py-32 bg-gray-50 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Decorative Large Text */}
            <div className="absolute top-20 left-0 right-0 flex justify-center overflow-hidden pointer-events-none">
                <span className="text-[200px] md:text-[300px] font-black text-gray-100/50 leading-none whitespace-nowrap select-none">
                    PROBLEMA
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Left Aligned */}
                <motion.div
                    className="max-w-2xl mb-16"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AlertTriangle className="w-4 h-4" />
                        The Challenge
                    </motion.span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                        Bakit{' '}
                        <span className="relative">
                            <span className="text-red-500">Mahirap</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 2 150 2 198 10" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        Kumuha ng Loan?
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Ito ang mga hadlang na kinakaharap ng mga Pinoy microentrepreneurs araw-araw.
                    </p>
                </motion.div>

                {/* Problem Cards - Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -12,
                                rotate: 2,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative ${problem.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${problem.height}`}
                            style={{
                                marginTop: index === 1 ? '2rem' : '0',
                            }}
                        >
                            {/* Animated Gradient Border on Hover */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${problem.color} opacity-10`} />
                            </div>

                            {/* Large Background Number */}
                            <div className="absolute -right-4 -bottom-8 text-[150px] font-black text-black/[0.02] leading-none select-none group-hover:text-black/[0.05] transition-colors">
                                {index + 1}
                            </div>

                            {/* Icon - Positioned differently for each card */}
                            <motion.div
                                className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg mb-6 ${problem.iconPosition === 'top-right' ? 'ml-auto' :
                                        problem.iconPosition === 'bottom-left' ? '' : ''
                                    }`}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <problem.icon className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Content */}
                            <div className={`relative z-10 ${problem.iconPosition === 'top-right' ? 'text-right' : ''} mt-auto`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {problem.description}
                                </p>
                            </div>

                            {/* Hover Arrow Indicator */}
                            <motion.div
                                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                            >
                                <TrendingDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-xl text-gray-500 mb-4">
                        Pero may solusyon kami.
                    </p>
                    <motion.a
                        href="#features"
                        className="inline-flex items-center gap-2 text-primary-blue font-semibold text-lg hover:gap-4 transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        Tignan kung paano
                        <span className="text-2xl">→</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Wave Divider to Next Section */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 80V40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default ProblemSection;