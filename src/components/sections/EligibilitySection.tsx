import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';

interface Question {
    id: string;
    question: string;
    options: string[];
    icon: string;
}

const questions: Question[] = [
    {
        id: 'business_type',
        question: 'Anong uri ng negosyo mo?',
        options: ['🏪 Sari-sari Store', '🛒 Market Vendor', '🏠 Home-based Seller', '🍜 Food Stall/Carinderia', '🛍️ RTW/Ukay-ukay', '📦 Iba pa'],
        icon: '🏪',
    },
    {
        id: 'years_operating',
        question: 'Gaano mo na katagal pinapatakbo ang negosyo?',
        options: ['Bago pa lang (less than 1 year)', '1-2 years na', '3-5 years na', 'More than 5 years na'],
        icon: '📅',
    },
    {
        id: 'monthly_income',
        question: 'Mga magkano ang monthly sales/income mo (estimate)?',
        options: ['₱5,000 - ₱15,000', '₱15,000 - ₱30,000', '₱30,000 - ₱50,000', '₱50,000+'],
        icon: '💰',
    },
];

const EligibilitySection = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleSelect = (questionId: string, answer: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
        } else {
            setTimeout(() => setIsComplete(true), 300);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsComplete(false);
    };

    // Calculate loan range based on answers
    const getLoanRange = () => {
        const income = answers.monthly_income || '';
        if (income.includes('50,000+')) return '₱20,000 - ₱50,000';
        if (income.includes('30,000')) return '₱15,000 - ₱35,000';
        if (income.includes('15,000')) return '₱10,000 - ₱25,000';
        return '₱5,000 - ₱15,000';
    };

    return (
        <section id="eligibility" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-yellow/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-6 border border-emerald-200"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Quick Check - Walang Signup!
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gray-900">Check mo kung </span>
                        <span className="text-gradient-blue">Pwede Ka Mag-Loan</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        3 questions lang! Hindi ito maaapektuhan ang credit record mo.
                    </p>
                </motion.div>

                {/* Quiz Card */}
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Progress Bar */}
                        <div className="h-2 bg-gray-100">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary-blue to-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentStep + (isComplete ? 1 : 0)) / questions.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="p-6 md:p-8">
                            <AnimatePresence mode="wait">
                                {!isComplete ? (
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Step indicator */}
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-sm text-gray-500">
                                                Step {currentStep + 1} of {questions.length}
                                            </span>
                                            {currentStep > 0 && (
                                                <button
                                                    onClick={handleBack}
                                                    className="flex items-center gap-1 text-sm text-primary-blue hover:underline"
                                                >
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Back
                                                </button>
                                            )}
                                        </div>

                                        {/* Question */}
                                        <div className="text-center mb-8">
                                            <span className="text-4xl mb-4 block">{questions[currentStep].icon}</span>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                {questions[currentStep].question}
                                            </h3>
                                        </div>

                                        {/* Options */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {questions[currentStep].options.map((option, index) => (
                                                <motion.button
                                                    key={index}
                                                    onClick={() => handleSelect(questions[currentStep].id, option)}
                                                    className={`p-4 rounded-xl border-2 text-left transition-all ${answers[questions[currentStep].id] === option
                                                        ? 'border-primary-blue bg-primary-blue/5'
                                                        : 'border-gray-100 hover:border-primary-blue/50 hover:bg-gray-50'
                                                        }`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <span className="text-gray-800 font-medium">{option}</span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        {/* Success Icon */}
                                        <motion.div
                                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                                        >
                                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                                        </motion.div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                            🎉 Good News!
                                        </h3>

                                        <p className="text-lg text-gray-600 mb-2">
                                            Based sa answers mo, pwede ka mag-qualify for loans up to:
                                        </p>

                                        <motion.p
                                            className="text-4xl font-bold text-primary-blue mb-6"
                                            initial={{ scale: 0.5 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3, type: 'spring' }}
                                        >
                                            {getLoanRange()}
                                        </motion.p>

                                        <p className="text-gray-500 mb-8">
                                            Download the app para makita ang exact loan options mo at makapag-apply.
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="gap-2 rounded-full bg-gradient-to-r from-primary-blue to-blue-700 hover:from-blue-700 hover:to-primary-blue shadow-lg shadow-primary-blue/30"
                                            >
                                                <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                                    <Download className="w-5 h-5" />
                                                    Download App - It's Free!
                                                </a>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="lg"
                                                onClick={handleReset}
                                                className="rounded-full gap-2"
                                            >
                                                <ArrowRight className="w-4 h-4 rotate-180" />
                                                Try Again
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Trust note */}
                    <motion.p
                        className="text-center text-sm text-gray-500 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        🔒 Secure at private ang lahat ng information mo. Hindi ito maaapektuhan ang credit score mo.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default EligibilitySection;
