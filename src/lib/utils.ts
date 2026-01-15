import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for conditional class merging
 * Combines clsx for conditional classes with tailwind-merge for proper Tailwind class resolution
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
