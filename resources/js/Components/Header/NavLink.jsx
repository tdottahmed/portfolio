import { Link } from '@inertiajs/react';

export default function NavLink({ href, active, children, icon: Icon, className = '' }) {
    return (
        <Link
            href={href}
            className={`
                group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${active 
                    ? 'text-accent-primary bg-accent-primary/10' 
                    : 'text-text-secondary hover:text-accent-primary hover:bg-surface-elevated'
                }
                ${className}
            `}
        >
            {Icon && (
                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${active ? 'text-accent-primary' : 'text-text-tertiary group-hover:text-accent-primary'}`} />
            )}
            {children}
        </Link>
    );
}
