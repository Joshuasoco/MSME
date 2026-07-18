import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Download, PencilLine } from 'lucide-react';
import { APP_LINKS } from '@/lib/constants';

type QuestionId = 'business_type' | 'years_operating' | 'monthly_income';

interface Question {
    id: QuestionId;
    eyebrow: string;
    question: string;
    options: string[];
}

const questions: Question[] = [
    {
        id: 'business_type',
        eyebrow: 'About your business',
        question: 'Anong uri ng negosyo mo?',
        options: ['Sari-sari store', 'Market vendor', 'Home-based seller', 'Food stall / carinderia', 'RTW / ukay-ukay', 'Iba pa'],
    },
    {
        id: 'years_operating',
        eyebrow: 'About your business',
        question: 'Gaano na katagal ang negosyo mo?',
        options: ['Bago pa lang (less than 1 year)', '1–2 years na', '3–5 years na', 'More than 5 years na'],
    },
    {
        id: 'monthly_income',
        eyebrow: 'About your business',
        question: 'Magkano ang monthly sales mo?',
        options: ['PHP 5,000 – PHP 15,000', 'PHP 15,000 – PHP 30,000', 'PHP 30,000 – PHP 50,000', 'PHP 50,000+'],
    },
];

type Answers = Partial<Record<QuestionId, string>>;

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

    if (years.includes('3–5') || years.includes('More than 5')) score += 2;
    else if (years.includes('1–2')) score += 1;

    if (income.includes('50,000+')) score += 2;
    else if (income.includes('30,000')) score += 1;

    if (score >= 3) {
        return {
            title: 'You may qualify for more options.',
            subtitle: 'Malaki ang chance mo for a broader set of loan options.',
            recommendation: 'Start with a medium-term working capital offer para sa expansion.',
            loanRange: 'PHP 20,000 – PHP 50,000',
        };
    }

    if (score >= 2) {
        return {
            title: 'You have options to explore.',
            subtitle: 'Mukhang may loan options ka na puwedeng i-target ngayon.',
            recommendation: 'Start with a lower-risk loan, then build repayment history for higher limits.',
            loanRange: 'PHP 10,000 – PHP 30,000',
        };
    }

    return {
        title: 'You can still start today.',
        subtitle: 'May entry-level options pa rin na puwedeng simulan.',
        recommendation: 'Complete the in-app learning modules first to strengthen your next application.',
        loanRange: 'PHP 5,000 – PHP 15,000',
    };
};

const transition = { duration: 0.25, ease: 'easeOut' as const };

const EligibilitySection = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [isReviewing, setIsReviewing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const selectedAnswer = answers[questions[currentStep].id];
    const answeredCount = useMemo(
        () => questions.filter((question) => Boolean(answers[question.id])).length,
        [answers],
    );
    const hasAllAnswers = answeredCount === questions.length;
    const result = useMemo(() => getResultData(answers), [answers]);

    const handleSelect = (questionId: QuestionId, answer: string) => {
        setAnswers((previous) => ({ ...previous, [questionId]: answer }));
    };

    const handleBack = () => {
        if (isComplete) {
            setIsComplete(false);
            setIsReviewing(true);
        } else if (isReviewing) {
            setIsReviewing(false);
            setCurrentStep(questions.length - 1);
        } else if (currentStep > 0) {
            setCurrentStep((step) => step - 1);
        }
    };

    const handleContinue = () => {
        if (!selectedAnswer) return;
        if (currentStep < questions.length - 1) {
            setCurrentStep((step) => step + 1);
        } else {
            setIsReviewing(true);
        }
    };

    const handleEditStep = (stepIndex: number) => {
        setIsReviewing(false);
        setIsComplete(false);
        setCurrentStep(stepIndex);
    };

    const handleConfirmReview = () => {
        if (hasAllAnswers) {
            setIsReviewing(false);
            setIsComplete(true);
        }
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsReviewing(false);
        setIsComplete(false);
    };

    const screenLabel = isComplete
        ? 'Your result'
        : isReviewing
            ? 'Review your answers'
            : `${currentStep + 1} of ${questions.length}`;

    return (
        <section id="eligibility" className="eligibility-section">
            <div className="eligibility-shell">
                <motion.header
                    className="eligibility-intro"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={transition}
                >
                    <p className="eligibility-kicker">MSME Quick Check</p>
                    <h2>Check mo kung puwede ka mag-loan</h2>
                    <p>Sagutin ang 3 questions, then see your estimated loan range.</p>
                </motion.header>

                <motion.div
                    className="eligibility-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ ...transition, delay: 0.05 }}
                >
                    <div className="eligibility-card-header">
                        <span className="eligibility-meta">{screenLabel}</span>
                        {!isComplete && !isReviewing && (
                            <span className="eligibility-meta eligibility-meta-muted">Takes about 1 minute</span>
                        )}
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        {!isReviewing && !isComplete ? (
                            <motion.div
                                key={`question-${currentStep}`}
                                className="eligibility-screen"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={transition}
                            >
                                <div className="question-heading">
                                    <span className="question-eyebrow">{questions[currentStep].eyebrow}</span>
                                    <h3>{questions[currentStep].question}</h3>
                                    <p>Choose one answer.</p>
                                </div>

                                <div className="eligibility-options" role="radiogroup" aria-label={questions[currentStep].question}>
                                    {questions[currentStep].options.map((option) => {
                                        const isSelected = selectedAnswer === option;

                                        return (
                                            <button
                                                key={option}
                                                type="button"
                                                role="radio"
                                                aria-checked={isSelected}
                                                className={`eligibility-option${isSelected ? ' is-selected' : ''}`}
                                                onClick={() => handleSelect(questions[currentStep].id, option)}
                                            >
                                                <span>{option}</span>
                                                <span className="option-check" aria-hidden="true">
                                                    {isSelected && <Check size={15} strokeWidth={2.5} />}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="eligibility-actions">
                                    <button
                                        type="button"
                                        className="eligibility-secondary"
                                        onClick={handleBack}
                                        disabled={currentStep === 0}
                                    >
                                        <ArrowLeft size={16} aria-hidden="true" />
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        className="eligibility-primary"
                                        onClick={handleContinue}
                                        disabled={!selectedAnswer}
                                    >
                                        {currentStep === questions.length - 1 ? 'Review answers' : 'Next'}
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : isReviewing ? (
                            <motion.div
                                key="review"
                                className="eligibility-screen review-screen"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={transition}
                            >
                                <div className="question-heading">
                                    <span className="question-eyebrow">Almost there</span>
                                    <h3>Review your answers</h3>
                                    <p>Make sure everything looks right before we show your estimate.</p>
                                </div>

                                <div className="review-list">
                                    {questions.map((question, index) => (
                                        <div className="review-row" key={question.id}>
                                            <div>
                                                <span className="review-label">Question {index + 1}</span>
                                                <p>{answers[question.id] ?? 'No answer selected'}</p>
                                            </div>
                                            <button type="button" className="review-edit" onClick={() => handleEditStep(index)}>
                                                <PencilLine size={15} aria-hidden="true" />
                                                Edit
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="eligibility-actions">
                                    <button type="button" className="eligibility-secondary" onClick={handleBack}>
                                        <ArrowLeft size={16} aria-hidden="true" />
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        className="eligibility-primary"
                                        onClick={handleConfirmReview}
                                        disabled={!hasAllAnswers}
                                    >
                                        See my result
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                className="eligibility-screen result-screen"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={transition}
                            >
                                <div className="result-heading">
                                    <span className="question-eyebrow">Based on your answers</span>
                                    <h3>{result.title}</h3>
                                    <p>{result.subtitle}</p>
                                </div>

                                <div className="result-range">
                                    <span>Estimated loan range</span>
                                    <strong>{result.loanRange}</strong>
                                </div>

                                <div className="result-summary">
                                    <div>
                                        <span className="review-label">What to consider</span>
                                        <p>{result.recommendation}</p>
                                    </div>
                                    <div>
                                        <span className="review-label">Your answers</span>
                                        <p>{answers.business_type} · {answers.years_operating} · {answers.monthly_income}</p>
                                    </div>
                                </div>

                                <div className="result-actions">
                                    <a className="eligibility-primary" href={APP_LINKS.playStore} download="msme-pathways.apk">
                                        <Download size={16} aria-hidden="true" />
                                        Continue in the app
                                    </a>
                                    <button type="button" className="eligibility-secondary" onClick={handleReset}>
                                        Start again
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <p className="eligibility-footnote">Private and secure. This quick check won’t affect your credit score.</p>
            </div>
        </section>
    );
};

export default EligibilitySection;
