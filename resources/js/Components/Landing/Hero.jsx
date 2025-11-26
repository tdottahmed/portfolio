import { motion } from "framer-motion";
import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Download,
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

    // Dummy data fallback
    const displayData = {
        greeting: heroData.greeting || "Hello, I'm",
        title: heroData.title || "Creative Developer",
        subtitle:
            heroData.subtitle ||
            "I build exceptional digital experiences that matter. Focused on creating intuitive and performant web applications.",
        image:
            heroData.image ||
            "https://ui-avatars.com/api/?name=Tanbir+Ahmed&background=6366f1&color=fff&size=512",
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-surface-elevated rounded-full border border-border-subtle mb-6"
                        >
                            <span className="text-accent-primary font-medium text-sm tracking-wide uppercase">
                                {displayData.greeting}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
                            {displayData.title}
                            <span className="text-accent-primary">.</span>
                        </h1>

                        <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {displayData.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-12">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 flex items-center gap-2 font-medium"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-surface-base border border-border-subtle text-text-primary rounded-full hover:bg-surface-elevated transition-colors font-medium flex items-center gap-2"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex items-center gap-6 justify-center md:justify-start">
                            {socialLinks.github && (
                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-accent-primary transition-colors transform hover:scale-110"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-accent-primary transition-colors transform hover:scale-110"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-accent-primary transition-colors transform hover:scale-110"
                                >
                                    <Twitter className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.email && (
                                <a
                                    href={`mailto:${socialLinks.email}`}
                                    className="text-text-secondary hover:text-accent-primary transition-colors transform hover:scale-110"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative max-w-md md:max-w-none"
                    >
                        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-accent-tertiary rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse" />
                            <div className="absolute inset-0 bg-surface-elevated rounded-[2rem] rotate-3 border border-border-subtle" />
                            <div className="absolute inset-0 bg-surface-base rounded-[2rem] -rotate-3 border border-border-subtle overflow-hidden shadow-2xl">
                                <img
                                    src={displayData.image}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -right-8 top-12 bg-surface-base p-4 rounded-xl shadow-xl border border-border-subtle hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-full flex items-center justify-center text-accent-secondary">
                                        <code className="font-bold">
                                            {"</>"}
                                        </code>
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary">
                                            Experience
                                        </p>
                                        <p className="font-bold text-text-primary">
                                            5+ Years
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute -left-8 bottom-20 bg-surface-base p-4 rounded-xl shadow-xl border border-border-subtle hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary">
                                        <span className="font-bold">UI</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary">
                                            Projects
                                        </p>
                                        <p className="font-bold text-text-primary">
                                            50+ Done
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
