import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Card({ children, className, hover = true, ...props }) {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={twMerge(
                'bg-surface-base border border-border-subtle rounded-xl p-6 shadow-lg transition-shadow duration-300',
                hover && 'hover:shadow-xl hover:border-accent-primary/30',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
