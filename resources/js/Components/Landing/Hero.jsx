import { motion } from "framer-motion";
import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Sparkles,
    Code,
    Rocket,
    Globe,
    Cpu,
    Zap,
    Award,
    Briefcase,
    Users,
    TrendingUp,
    Star,
    Layers,
    Code2,
    Smartphone,
    Monitor,
    Database,
    Cloud,
    CheckCircle2,
} from "lucide-react";

export default function Hero({ settings }) {
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
            value: "5+",
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

    // Floating icons for right column
    const floatingIcons = [
        { Icon: Code2, delay: 0, x: "20%", y: "10%" },
        { Icon: Layers, delay: 0.5, x: "75%", y: "20%" },
        { Icon: Smartphone, delay: 1, x: "15%", y: "60%" },
        { Icon: Monitor, delay: 1.5, x: "70%", y: "55%" },
        { Icon: Database, delay: 2, x: "45%", y: "8%" },
        { Icon: Cloud, delay: 2.5, x: "25%", y: "45%" },
        { Icon: Zap, delay: 3, x: "65%", y: "75%" },
        { Icon: Globe, delay: 3.5, x: "55%", y: "70%" },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const floatingAnimation = (delay = 0) => ({
        y: [-20, 20, -20],
        rotate: [-5, 5, -5],
        transition: {
            duration: 6 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        },
    });

    const scalePulse = {
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.9, 0.6],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Multiple Gradient Orbs */}
                <motion.div
                    animate={scalePulse}
                    className="absolute top-10 right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-accent-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        ...scalePulse,
                        transition: { ...scalePulse.transition, delay: 1 },
                    }}
                    className="absolute bottom-10 left-10 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-accent-tertiary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        ...scalePulse,
                        transition: { ...scalePulse.transition, delay: 2 },
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[700px] sm:h-[700px] bg-accent-secondary/15 rounded-full blur-3xl"
                />

                {/* Enhanced Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

                {/* Animated Rotating Rings */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-primary/10 rounded-full hidden lg:block"
                />
                <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-secondary/10 rounded-full hidden lg:block"
                />

                {/* Animated Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.sin(i) * 50, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.2,
                        }}
                        className="absolute w-2 h-2 bg-accent-primary/40 rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                    />
                ))}
            </div>

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
                        {/* Animated Greeting Badge */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-full border border-accent-primary/30 mb-6 shadow-lg w-fit mx-auto lg:mx-0"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="w-4 h-4 text-accent-primary" />
                            </motion.div>
                            <span className="text-accent-primary font-semibold text-sm tracking-wide uppercase">
                                {displayData.greeting}
                            </span>
                        </motion.div>

                        {/* Enhanced Eye-Catching Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                                className="block"
                            >
                                I'm a
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.8,
                                    ease: "backOut",
                                }}
                                className="block relative"
                            >
                                <motion.span
                                    animate={{
                                        backgroundPosition: [
                                            "0%",
                                            "100%",
                                            "0%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-[length:300%_auto] relative inline-block"
                                >
                                    {displayData.title
                                        .split(" ")
                                        .map((word, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: 0.6 + i * 0.1,
                                                }}
                                                className="inline-block mr-2"
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                </motion.span>
                                {/* Animated underline */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                        ease: "easeOut",
                                    }}
                                    className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-full"
                                />
                            </motion.span>
                        </motion.h1>

                        {/* Enhanced Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            {displayData.subtitle}
                        </motion.p>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 w-full sm:w-auto"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative w-full sm:w-auto px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 shadow-xl shadow-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/50 flex items-center justify-center gap-2 font-bold text-base sm:text-lg overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        backgroundSize: "200% 200%",
                                        animation: "gradient 3s ease infinite",
                                    }}
                                />
                                <span className="relative z-10">
                                    View My Work
                                </span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-surface-elevated/60 backdrop-blur-md border-2 border-border-subtle text-text-primary rounded-full hover:bg-surface-elevated hover:border-accent-primary/50 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </motion.a>
                        </motion.div>

                        {/* Enhanced Social Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            {socialLinks.github && (
                                <motion.a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                        rotate: 5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>Github</span>
                                </motion.a>
                            )}
                            {socialLinks.linkedin && (
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                        rotate: -5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span>LinkedIn</span>
                                </motion.a>
                            )}
                            {socialLinks.twitter && (
                                <motion.a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                        rotate: 5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 font-medium shadow-md"
                                >
                                    <Twitter className="w-5 h-5" />
                                    <span>Twitter</span>
                                </motion.a>
                            )}
                            {socialLinks.email && (
                                <motion.a
                                    href={`mailto:${socialLinks.email}`}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                        rotate: -5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all duration-300 font-medium shadow-md"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Email</span>
                                </motion.a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Elements */}
                    <motion.div
                        variants={itemVariants}
                        className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]"
                    >
                        <div className="relative w-full h-full max-w-lg">
                            {/* Floating Icons */}
                            {floatingIcons.map(
                                ({ Icon, delay, x, y }, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                            scale: [0.8, 1.2, 0.8],
                                            ...floatingAnimation(delay),
                                        }}
                                        transition={{
                                            opacity: {
                                                duration: 4 + delay,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                            scale: {
                                                duration: 5 + delay,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        className="absolute"
                                        style={{ left: x, top: y }}
                                    >
                                        <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-accent-primary/40" />
                                    </motion.div>
                                )
                            )}

                            {/* Stats Cards in Center */}
                            <div className="relative z-10 grid grid-cols-3 gap-4 mt-20">
                                {stats.map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                                y: 50,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 1 + index * 0.2,
                                                duration: 0.6,
                                                ease: "backOut",
                                            }}
                                            whileHover={{ scale: 1.1, y: -10 }}
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

                            {/* Large Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    opacity: { delay: 1.5, duration: 0.5 },
                                    scale: {
                                        delay: 1.5,
                                        duration: 0.5,
                                        ease: "backOut",
                                    },
                                    rotate: { delay: 1.5, duration: 0.5 },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
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

                            {/* Another Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: 10 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    y: [0, 15, 0],
                                }}
                                transition={{
                                    opacity: { delay: 2, duration: 0.5 },
                                    scale: {
                                        delay: 2,
                                        duration: 0.5,
                                        ease: "backOut",
                                    },
                                    rotate: { delay: 2, duration: 0.5 },
                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    },
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

                            {/* Central Illustration/Icon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 1.2,
                                    duration: 0.8,
                                    ease: "backOut",
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        },
                                        scale: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20 rounded-full flex items-center justify-center border-2 border-accent-primary/30 backdrop-blur-sm"
                                >
                                    <Code className="w-16 h-16 sm:w-20 sm:h-20 text-accent-primary" />
                                </motion.div>
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
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
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

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-6 h-10 border-2 border-border-subtle rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 14, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 bg-accent-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
