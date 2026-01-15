import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    rating: number;
    avatar?: string;
    className?: string;
}

const TestimonialCard = ({ quote, name, role, rating, avatar, className }: TestimonialCardProps) => {
    return (
        <motion.div
            className={cn(
                'p-6 bg-dark rounded-2xl border border-gray-800',
                'hover:border-primary-blue/30 transition-all duration-300',
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            'w-5 h-5',
                            i < rating
                                ? 'fill-primary-yellow text-primary-yellow'
                                : 'text-gray-600'
                        )}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-white text-base mb-6 leading-relaxed">
                "{quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-blue/20 overflow-hidden flex items-center justify-center">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-xl font-semibold text-primary-blue">
                            {name.charAt(0)}
                        </span>
                    )}
                </div>
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
