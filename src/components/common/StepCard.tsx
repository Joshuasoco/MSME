import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepCardProps {
    number: number;
    icon: string;
    title: string;
    description: string;
    isLast?: boolean;
    className?: string;
}

const StepCard = ({ number, icon, title, description, isLast = false, className }: StepCardProps) => {
    const Icon = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;

    return (
        <motion.div
            className={cn('relative flex flex-col items-center text-center', className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Connector Line (Desktop) */}
            {!isLast && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-white/20">
                    <motion.div
                        className="h-full bg-primary-yellow"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>
            )}

            {/* Number Badge */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/20">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-yellow flex items-center justify-center text-dark font-bold text-sm">
                    {number}
                </span>
                {Icon && <Icon className="w-8 h-8 text-white" />}
            </div>

            {/* Title */}
            <h3 className="font-display font-semibold text-lg text-white mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm max-w-[200px]">
                {description}
            </p>
        </motion.div>
    );
};

export default StepCard;
