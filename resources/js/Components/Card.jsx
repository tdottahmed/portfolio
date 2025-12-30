import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Card({ children, className, hover = true, ...props }) {
    return (
        <div
            className={twMerge(
                'bg-surface-base border border-border-subtle rounded-xl p-6 shadow-lg transition-all duration-300',
                hover && 'hover:shadow-xl hover:border-accent-primary/30 hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
