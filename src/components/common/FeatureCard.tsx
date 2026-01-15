import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    badge?: string;
    className?: string;
}

const FeatureCard = ({ icon, title, description, badge, className }: FeatureCardProps) => {
    // Dynamically get the icon component
    const Icon = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;

    return (
        <motion.div
            className={cn(
                'group p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-300',
                'hover:-translate-y-2 hover:shadow-xl hover:border-primary-blue/20',
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4 group-hover:bg-primary-blue/20 transition-colors">
                {Icon && <Icon className="w-7 h-7 text-primary-blue" />}
            </div>

            {/* Badge */}
            {badge && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-yellow/20 text-primary-yellow-dark rounded-full mb-3">
                    {badge}
                </span>
            )}

            {/* Title */}
            <h3 className="font-display font-semibold text-lg text-dark mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
