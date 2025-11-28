import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Sparkles,
    Code,
    Rocket,
    Award,
    Briefcase,
    Users,
    CheckCircle2,
} from "lucide-react";

export default function Hero({ settings }) {
    const shouldReduceMotion = useReducedMotion();

    const heroData = settings?.hero
        ? typeof settings.hero === "string"
            ? JSON.parse(settings.hero)
            : settings.hero
        : {};
    const socialLinks = settings?.social_links
        ? typeof settings.social_links === "string"
            ? JSON.parse(settings.social_links)
            : settings.social_links
        : {};

    // Display data
    const displayData = {
        greeting: heroData.greeting || "Hello, I'm",
        title: heroData.title || "Software Developer",
        subtitle:
            heroData.subtitle ||
            "I build exceptional digital experiences that matter. Focused on creating intuitive and performant web applications.",
    };

    // Quick stats/info
    const stats = [
        {
            icon: Briefcase,
            value: "50+",
            label: "Projects",
            color: "text-accent-primary",
        },
        {
            icon: Award,
            value: "3+",
            label: "Years Exp.",
            color: "text-accent-secondary",
        },
        {
            icon: Users,
            value: "100+",
            label: "Clients",
            color: "text-accent-tertiary",
        },
    ];

    // Optimized animation variants - shorter durations, less complex
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.05,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0.3 : 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                >
                    {/* Left Column - Text Content */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col text-center lg:text-left"
                    >
                        {/* Simplified Greeting Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-full border border-accent-primary/30 mb-6 shadow-lg w-fit mx-auto lg:mx-0"
                        >
                            <Sparkles className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-semibold text-sm tracking-wide uppercase">
                                {displayData.greeting}
                            </span>
                        </motion.div>

                        {/* Simplified Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
                        >
                            <span className="block relative bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                                {displayData.title}
                            </span>
                            {/* Simple underline - CSS animation only */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    delay: shouldReduceMotion ? 0 : 0.3,
                                    duration: shouldReduceMotion ? 0.2 : 0.6,
                                    ease: "easeOut",
                                }}
                                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-full"
                            />
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            {displayData.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group relative w-full sm:w-auto px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 shadow-xl shadow-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/50 flex items-center justify-center gap-2 font-bold text-base sm:text-lg overflow-hidden"
                            >
                                <span className="relative z-10">
                                    View My Work
                                </span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 bg-surface-elevated/60 backdrop-blur-md border-2 border-border-subtle text-text-primary rounded-full hover:bg-surface-elevated hover:border-accent-primary/50 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            {socialLinks.github && (
                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>Github</span>
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span>LinkedIn</span>
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Twitter className="w-5 h-5" />
                                    <span>Twitter</span>
                                </a>
                            )}
                            {socialLinks.email && (
                                <a
                                    href={`mailto:${socialLinks.email}`}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all duration-300 font-medium shadow-md"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Email</span>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Elements (Desktop Only) */}
                    <motion.div
                        variants={itemVariants}
                        className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]"
                    >
                        <div className="relative w-full h-full max-w-lg">
                            {/* Stats Cards in Center */}
                            <div className="relative z-10 grid grid-cols-3 gap-4 mt-20">
                                {stats.map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                delay: shouldReduceMotion
                                                    ? 0
                                                    : 0.3 + index * 0.1,
                                                duration: shouldReduceMotion
                                                    ? 0.2
                                                    : 0.4,
                                                ease: "easeOut",
                                            }}
                                            className="bg-surface-elevated/80 backdrop-blur-md p-6 rounded-2xl border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 shadow-xl text-center"
                                        >
                                            <IconComponent
                                                className={`w-8 h-8 ${stat.color} mx-auto mb-3`}
                                            />
                                            <div className="text-3xl font-bold text-text-primary mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-text-secondary">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Static Badge - Available for Work */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: shouldReduceMotion ? 0 : 0.6,
                                    duration: shouldReduceMotion ? 0.2 : 0.4,
                                    ease: "easeOut",
                                }}
                                className="absolute -right-8 top-1/4 bg-surface-elevated/90 backdrop-blur-md p-6 rounded-2xl border border-border-subtle shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-accent-secondary/20 rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-accent-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary uppercase tracking-wider">
                                            Available
                                        </p>
                                        <p className="font-bold text-text-primary text-lg">
                                            For Work
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Static Badge - Fast Delivery */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: shouldReduceMotion ? 0 : 0.7,
                                    duration: shouldReduceMotion ? 0.2 : 0.4,
                                    ease: "easeOut",
                                }}
                                className="absolute -left-8 bottom-1/4 bg-surface-elevated/90 backdrop-blur-md p-6 rounded-2xl border border-border-subtle shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-accent-primary/20 rounded-xl flex items-center justify-center">
                                        <Rocket className="w-8 h-8 text-accent-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary uppercase tracking-wider">
                                            Fast
                                        </p>
                                        <p className="font-bold text-text-primary text-lg">
                                            Delivery
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Static Central Icon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: shouldReduceMotion ? 0 : 0.5,
                                    duration: shouldReduceMotion ? 0.2 : 0.4,
                                    ease: "easeOut",
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20 rounded-full flex items-center justify-center border-2 border-accent-primary/30 backdrop-blur-sm">
                                    <Code className="w-16 h-16 sm:w-20 sm:h-20 text-accent-primary" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile Stats - Show below content on mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:hidden grid grid-cols-3 gap-4 max-w-md mx-auto mt-8"
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: shouldReduceMotion
                                            ? 0
                                            : 0.4 + index * 0.05,
                                        duration: shouldReduceMotion
                                            ? 0.2
                                            : 0.3,
                                    }}
                                    className="bg-surface-elevated/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 shadow-lg text-center"
                                >
                                    <IconComponent
                                        className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color} mx-auto mb-2`}
                                    />
                                    <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-text-secondary">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>

            {/* Simplified Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Scroll
                </span>
                <div className="w-6 h-10 border-2 border-border-subtle rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, 14, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 bg-accent-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
