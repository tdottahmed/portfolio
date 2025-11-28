import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, links }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[280px] bg-surface-base border-l border-border-subtle z-[70] md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                                <span className="text-lg font-bold text-text-primary">Menu</span>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-surface-elevated text-text-secondary transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-4">
                                <ul className="space-y-2">
                                    {links.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    onClick={onClose}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:text-accent-primary hover:bg-surface-elevated transition-all duration-200 group"
                                                >
                                                    {Icon && (
                                                        <Icon className="w-5 h-5 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                                                    )}
                                                    <span className="font-medium">{link.name}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="p-6 border-t border-border-subtle">
                                <div className="text-xs text-center text-text-tertiary">
                                    &copy; {new Date().getFullYear()} Tanbir Ahmed
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
