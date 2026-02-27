import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Download, Sparkles, PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/lib/constants';

interface Question {
    id: 'business_type' | 'years_operating' | 'monthly_income';
    question: string;
    options: string[];
    icon: string;
}

const questions: Question[] = [
    {
        id: 'business_type',
        question: 'Anong uri ng negosyo mo?',
        options: ['Sari-sari store', 'Market vendor', 'Home-based seller', 'Food stall / carinderia', 'RTW / ukay-ukay', 'Iba pa'],
        icon: 'Storefront',
    },
    {
        id: 'years_operating',
        question: 'Gaano mo na katagal pinapatakbo ang negosyo?',
        options: ['Bago pa lang (less than 1 year)', '1-2 years na', '3-5 years na', 'More than 5 years na'],
        icon: 'Calendar',
    },
    {
        id: 'monthly_income',
        question: 'Magkano ang monthly sales/income mo (estimate)?',
        options: ['PHP 5,000 - PHP 15,000', 'PHP 15,000 - PHP 30,000', 'PHP 30,000 - PHP 50,000', 'PHP 50,000+'],
        icon: 'Wallet',
    },
];

type Answers = Partial<Record<Question['id'], string>>;

type ResultData = {
    title: string;
    subtitle: string;
    recommendation: string;
    loanRange: string;
};

const getResultData = (answers: Answers): ResultData => {
    const years = answers.years_operating ?? '';
    const income = answers.monthly_income ?? '';

    let score = 0;

    if (years.includes('3-5') || years.includes('More than 5')) {
        score += 2;
    } else if (years.includes('1-2 years')) {
        score += 1;
    }

    if (income.includes('50,000+')) {
        score += 2;
    } else if (income.includes('30,000')) {
        score += 1;
    }

    if (score >= 3) {
        return {
            title: 'Great news!',
            subtitle: 'Malaki ang chance mo for a broader set of loan options.',
            recommendation: 'Start with medium-term working capital offers para sa expansion.',
            loanRange: 'PHP 20,000 - PHP 50,000',
        };
    }

    if (score >= 2) {
        return {
            title: 'Good start!',
            subtitle: 'Mukhang may loan options ka na pwede i-target ngayon.',
            recommendation: 'Focus on lower-risk starter loans, then build repayment history for higher limits.',
            loanRange: 'PHP 10,000 - PHP 30,000',
        };
    }

    return {
        title: 'You can still begin today.',
        subtitle: 'May mga entry-level options pa rin na pwedeng simulan.',
        recommendation: 'Complete in-app learning modules first to unlock stronger pre-qualification outcomes.',
        loanRange: 'PHP 5,000 - PHP 15,000',
    };
};

const EligibilitySection = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [isReviewing, setIsReviewing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const selectedAnswer = answers[questions[currentStep].id];
    const totalProgressSteps = questions.length + 2; // questions + review + result
    const currentProgressStep = isComplete
        ? totalProgressSteps
        : isReviewing
            ? questions.length + 1
            : currentStep + 1;
    const progressPercent = (currentProgressStep / totalProgressSteps) * 100;

    const answeredCount = useMemo(
        () => questions.filter((question) => Boolean(answers[question.id])).length,
        [answers],
    );

    const result = useMemo(() => getResultData(answers), [answers]);

    const handleSelect = (questionId: Question['id'], answer: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    const handleBack = () => {
        if (isComplete) {
            setIsComplete(false);
            setIsReviewing(true);
            return;
        }

        if (isReviewing) {
            setIsReviewing(false);
            setCurrentStep(questions.length - 1);
            return;
        }

        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleContinue = () => {
        if (!selectedAnswer) {
            return;
        }

        if (currentStep < questions.length - 1) {
            setCurrentStep((prev) => prev + 1);
            return;
        }

        setIsReviewing(true);
    };

    const handleEditStep = (stepIndex: number) => {
        setIsReviewing(false);
        setIsComplete(false);
        setCurrentStep(stepIndex);
    };

    const handleConfirmReview = () => {
        setIsReviewing(false);
        setIsComplete(true);
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsReviewing(false);
        setIsComplete(false);
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
                        Quick Check - Walang Signup
                    </motion.span>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gray-900">Check mo kung </span>
                        <span className="text-gradient-blue">Pwede ka mag-loan</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Sagutin ang 3 questions, review your answers, then see your matching range.
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
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="px-6 md:px-8 pt-5">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>
                                    {isComplete
                                        ? 'Result ready'
                                        : isReviewing
                                            ? 'Review step'
                                            : `Question ${currentStep + 1} of ${questions.length}`}
                                </span>
                                <span>{answeredCount}/{questions.length} answered</span>
                            </div>

                            <div className="mt-4 mb-2 flex items-center gap-2">
                                {questions.map((question, index) => {
                                    const isAnswered = Boolean(answers[question.id]);
                                    const isActive = !isReviewing && !isComplete && currentStep === index;

                                    return (
                                        <span
                                            key={question.id}
                                            className={`h-2.5 rounded-full transition-all ${isActive
                                                ? 'w-10 bg-primary-blue'
                                                : isAnswered
                                                    ? 'w-6 bg-emerald-500'
                                                    : 'w-6 bg-gray-200'
                                                }`}
                                            aria-hidden="true"
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="p-6 md:p-8 pt-4">
                            <AnimatePresence mode="wait">
                                {!isReviewing && !isComplete ? (
                                    <motion.div
                                        key={`question-${currentStep}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {/* Question */}
                                        <div className="text-center mb-8">
                                            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-blue/10 text-primary-blue text-xs font-semibold mb-4">
                                                {questions[currentStep].icon}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                {questions[currentStep].question}
                                            </h3>
                                        </div>

                                        {/* Options */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {questions[currentStep].options.map((option, index) => {
                                                const isSelected = answers[questions[currentStep].id] === option;

                                                return (
                                                    <motion.button
                                                        key={index}
                                                        onClick={() => handleSelect(questions[currentStep].id, option)}
                                                        className={`p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                                            ? 'border-primary-blue bg-primary-blue/5 shadow-sm'
                                                            : 'border-gray-100 hover:border-primary-blue/50 hover:bg-gray-50'
                                                            }`}
                                                        whileHover={{ scale: 1.01 }}
                                                        whileTap={{ scale: 0.99 }}
                                                    >
                                                        <span className="text-gray-800 font-medium">{option}</span>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={handleBack}
                                                disabled={currentStep === 0}
                                                className="rounded-full gap-2 border-primary-blue/30 text-primary-blue font-semibold"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Back
                                            </Button>

                                            <Button
                                                type="button"
                                                onClick={handleContinue}
                                                disabled={!selectedAnswer}
                                                className="rounded-full gap-2"
                                            >
                                                {currentStep === questions.length - 1 ? 'Review Answers' : 'Next'}
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                ) : isReviewing ? (
                                    <motion.div
                                        key="review"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Review your answers</h3>
                                            <p className="text-gray-600">Check everything before we compute your result.</p>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            {questions.map((question, index) => (
                                                <div key={question.id} className="rounded-xl border border-gray-200 p-4 bg-gray-50/80">
                                                    <div className="flex items-start justify-between gap-3">
                                                        <div>
                                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Question {index + 1}</p>
                                                            <p className="text-sm md:text-base font-semibold text-gray-900 mt-1">{question.question}</p>
                                                            <p className="text-sm text-primary-blue mt-2">{answers[question.id] ?? 'No answer selected'}</p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleEditStep(index)}
                                                            className="inline-flex items-center gap-1 text-sm text-primary-blue hover:underline"
                                                        >
                                                            <PencilLine className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={handleBack}
                                                className="rounded-full gap-2 border-primary-blue/30 text-primary-blue font-semibold"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Back to questions
                                            </Button>

                                            <Button
                                                type="button"
                                                onClick={handleConfirmReview}
                                                className="rounded-full gap-2"
                                            >
                                                See my result
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-6"
                                    >
                                        <motion.div
                                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                                        >
                                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                                        </motion.div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                            {result.title}
                                        </h3>

                                        <p className="text-lg text-gray-600 mb-1">{result.subtitle}</p>

                                        <motion.p
                                            className="text-4xl font-bold text-primary-blue mb-4"
                                            initial={{ scale: 0.5 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3, type: 'spring' }}
                                        >
                                            {result.loanRange}
                                        </motion.p>

                                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">{result.recommendation}</p>

                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="gap-2 rounded-full bg-gradient-to-r from-primary-blue to-blue-700 hover:from-blue-700 hover:to-primary-blue shadow-lg shadow-primary-blue/30"
                                            >
                                                <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                                                    <Download className="w-5 h-5" />
                                                    Download App - It is Free
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
                        Secure and private ang lahat ng information mo. Hindi ito maaapektuhan ang credit score mo.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default EligibilitySection;
