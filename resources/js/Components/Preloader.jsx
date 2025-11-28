import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ loading }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 20); // Adjust speed here (20ms * 100 = 2000ms = 2s)

            return () => clearInterval(interval);
        }
    }, [loading]);

    const name = "Tanbir Ahmed";
    const letters = name.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-primary overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-primary/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Name Animation */}
                    <motion.div className="relative z-10 mb-12 flex">
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight ${
                                    letter === " " ? "w-4 sm:w-6" : ""
                                } ${
                                    index < 6 ? "text-text-primary" : "text-accent-primary"
                                }`}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Progress Bar Container */}
                    <div className="relative z-10 w-64 sm:w-80 h-1 bg-surface-elevated rounded-full overflow-hidden">
                        {/* Progress Bar */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    {/* Percentage Text */}
                    <motion.div
                        className="mt-4 text-text-secondary font-mono text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {progress}%
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
