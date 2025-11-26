import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-border-subtle bg-background-secondary/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-text-primary">
                        Portfolio<span className="text-accent-primary">.</span>
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-secondary rounded-lg md:hidden hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-border-default"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border-subtle rounded-lg bg-surface-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block py-2 px-3 text-text-secondary rounded hover:bg-surface-elevated md:hover:bg-transparent md:hover:text-accent-primary md:p-0 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-surface-base border-b border-border-subtle"
                    >
                        <ul className="flex flex-col p-4 space-y-2">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="block py-2 px-3 text-text-secondary rounded hover:bg-surface-elevated transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
