import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Button({
    children,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-primary disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
        primary: 'bg-accent-primary text-white hover:bg-accent-secondary shadow-glow hover:shadow-glow-large',
        secondary: 'bg-surface-elevated text-text-primary hover:bg-surface-overlay border border-border-subtle',
        ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-elevated',
        outline: 'bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary/10',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
