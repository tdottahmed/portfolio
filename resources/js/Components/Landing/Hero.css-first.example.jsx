// Example: Hero component using CSS-first approach (best performance)
// Uses Tailwind CSS animations + Intersection Observer
// Zero JavaScript animation library overhead!

import { useEffect, useRef, useState } from "react";
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
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

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

    const displayData = {
        greeting: heroData.greeting || "Hello, I'm",
        title: heroData.title || "Software Developer",
        subtitle:
            heroData.subtitle ||
            "I build exceptional digital experiences that matter. Focused on creating intuitive and performant web applications.",
    };

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                >
                    {/* Left Column */}
                    <div
                        className={`flex flex-col text-center lg:text-left transition-all duration-500 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        {/* Greeting Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/60 backdrop-blur-md rounded-full border border-accent-primary/30 mb-6 shadow-lg w-fit mx-auto lg:mx-0 transition-all duration-500 delay-100 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                        >
                            <Sparkles className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-semibold text-sm tracking-wide uppercase">
                                {displayData.greeting}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight transition-all duration-500 delay-200 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                        >
                            <span className="block relative bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                                {displayData.title}
                            </span>
                            {/* Animated underline using CSS */}
                            <div
                                className={`absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-full transition-all duration-700 delay-500 ${
                                    isVisible ? "w-full" : "w-0"
                                }`}
                            />
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={`text-base sm:text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-500 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                        >
                            {displayData.subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 w-full sm:w-auto transition-all duration-500 delay-400 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
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
                        </div>

                        {/* Social Buttons */}
                        <div
                            className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-500 delay-500 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
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
                            {/* Other social links... */}
                        </div>
                    </div>

                    {/* Right Column - Stats */}
                    <div
                        className={`relative hidden lg:flex items-center justify-center h-full min-h-[500px] transition-all duration-500 delay-300 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        {/* Stats cards... */}
                    </div>
                </div>
            </div>
        </section>
    );
}
