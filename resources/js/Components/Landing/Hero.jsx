import { useState, useEffect } from "react";
import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Package,
    Shield,
    Zap,
    Briefcase,
    Award,
    Users,
    Star,
} from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

const TECH_STACK = [
    { label: "Laravel",    color: "text-red-400",    bg: "bg-red-400/10 border-red-400/30" },
    { label: "React",      color: "text-sky-400",    bg: "bg-sky-400/10 border-sky-400/30" },
    { label: "Inertia.js", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/30" },
    { label: "Tailwind",   color: "text-cyan-400",   bg: "bg-cyan-400/10 border-cyan-400/30" },
    { label: "PHP",        color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-400/30" },
    { label: "MySQL",      color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/30" },
];

const TAGLINE = [
    { text: "Full-Stack Laravel Developer", highlight: true },
    { text: "React Application Development", highlight: true },
    { text: "Advanced PHP Engineering", highlight: true },
    { text: "Seamless SPA with Inertia.js", highlight: true },
    { text: "3+ Years Production Experience", highlight: true },
];

const HIGHLIGHTS = [
    { icon: Package, text: "6 CodeCanyon Products",     color: "text-accent-primary"  },
    { icon: Star,    text: "98% Client Satisfaction",   color: "text-yellow-400"      },
    { icon: Shield,  text: "Bangladesh Air Force Client",color: "text-accent-secondary"},
    { icon: Zap,     text: "AI-Accelerated Dev Cycles", color: "text-accent-tertiary" },
];

export default function Hero({ settings }) {
    const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTaglineIndex((prev) => (prev + 1) % TAGLINE.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
        name:     heroData.name     || "Tanbir Ahmed",
        greeting: heroData.greeting || "Available for Work",
        title:    heroData.title    || "Full-Stack Laravel Developer",
        subtitle: heroData.subtitle ||
            "3+ years building commercial SaaS products, B2B platforms & marketplace solutions — from concept to production. True end-to-end ownership with PHP/Laravel + React/Inertia.js.",
    };

    const stats = [
        { icon: Briefcase, value: "50+",  label: "Projects",   color: "text-accent-primary",   bg: "bg-accent-primary/10"   },
        { icon: Award,     value: "3+",   label: "Years Exp.", color: "text-accent-secondary",  bg: "bg-accent-secondary/10" },
        { icon: Users,     value: "100+", label: "Clients",    color: "text-accent-tertiary",   bg: "bg-accent-tertiary/10"  },
    ];

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden py-12 sm:py-16"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

                    {/* ── Left Column ─────────────────────────────────────────── */}
                    <div className="flex flex-col text-center lg:text-left">

                        {/* Availability pill */}
                        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 bg-surface-elevated/60 backdrop-blur-md rounded-full border border-accent-secondary/30 mb-4 w-fit mx-auto lg:mx-0 shadow-md transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
                            </span>
                            <span className="text-accent-secondary text-sm font-semibold tracking-wide">
                                {displayData.greeting}
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary leading-[1.0] tracking-tight mb-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            {displayData.name}
                        </h1>

                        {/* Animated tagline slider */}
                        <div className={`h-8 sm:h-10 mb-5 relative flex justify-center lg:justify-start items-center w-full max-w-full transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                            {TAGLINE.map((item, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center lg:justify-start ${
                                        i === currentTaglineIndex 
                                            ? "opacity-100 translate-y-0 scale-100" 
                                            : i < currentTaglineIndex || (currentTaglineIndex === 0 && i === TAGLINE.length - 1)
                                                ? "opacity-0 -translate-y-6 scale-95 pointer-events-none"
                                                : "opacity-0 translate-y-6 scale-95 pointer-events-none"
                                    }`}
                                >
                                    <span className={item.highlight
                                        ? "text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
                                        : "text-lg sm:text-xl font-medium text-text-secondary"
                                    }>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Subtitle */}
                        <p className={`text-sm sm:text-base text-text-secondary mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            {displayData.subtitle}
                        </p>

                        {/* Key Highlights */}
                        <div className={`grid grid-cols-2 gap-2 mb-5 transition-all duration-700 delay-[350ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            {HIGHLIGHTS.map(({ icon: Icon, text, color }, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-surface-elevated/40 backdrop-blur-sm rounded-xl border border-border-subtle">
                                    <Icon className={`w-3.5 h-3.5 ${color} flex-shrink-0`} />
                                    <span className="text-xs text-text-secondary font-medium leading-tight">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-5 transition-all duration-700 delay-[450ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            <a
                                href="https://drive.google.com/file/d/1Kub5WjDQXtxbJT4TS5tkYPoX7vL_pcXa/view?usp=sharing"
                                target="_blank"
                                className="group w-full sm:w-auto px-7 py-3 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40 flex items-center justify-center gap-2 font-semibold text-sm hover:-translate-y-0.5 active:scale-[0.98]"
                            >
                                View Resume
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/8801876525073"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto px-7 py-3 bg-[#25D366]/10 backdrop-blur-md text-[#25D366] rounded-full border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm hover:-translate-y-0.5 active:scale-[0.98]"
                            >
                                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Let's Talk
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2.5 transition-all duration-700 delay-[550ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            {socialLinks.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-surface-elevated/40 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">
                                    <Github className="w-4 h-4" /> GitHub
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-surface-elevated/40 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-surface-elevated/40 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">
                                    <Twitter className="w-4 h-4" /> Twitter
                                </a>
                            )}
                            {socialLinks.email && (
                                <a href={`mailto:${socialLinks.email}`}
                                    className="flex items-center gap-2 px-4 py-2 bg-surface-elevated/40 backdrop-blur-md rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">
                                    <Mail className="w-4 h-4" /> Email
                                </a>
                            )}
                        </div>
                    </div>

                    {/* ── Right Column (desktop) ───────────────────────────────── */}
                    <div className="relative hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-[420px] mx-auto">

                            {/* === Terminal / Code Card === */}
                            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                                {/* Ambient glow */}
                                <div className="absolute -inset-6 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-accent-tertiary/20 blur-3xl rounded-3xl" />

                                {/* Gradient border wrapper */}
                                <div className="relative p-px rounded-2xl bg-gradient-to-br from-accent-primary/60 via-border-subtle/20 to-accent-tertiary/60 shadow-2xl">
                                    <div className="bg-surface-elevated/95 backdrop-blur-xl rounded-2xl overflow-hidden">

                                        {/* Mac-style window chrome */}
                                        <div className="relative flex items-center justify-center px-4 py-3 bg-surface-base/60 border-b border-white/5">
                                            <div className="absolute left-4 flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                            </div>
                                            <span className="text-xs text-text-secondary/50 font-mono">developer.js</span>
                                        </div>

                                        {/* Code body */}
                                        <div className="flex font-mono text-xs">
                                            {/* Line numbers */}
                                            <div className="select-none py-5 px-3 leading-7 text-right text-text-secondary/20 border-r border-white/5 min-w-[2.5rem]">
                                                {Array.from({ length: 9 }, (_, i) => (
                                                    <div key={i}>{i + 1}</div>
                                                ))}
                                            </div>

                                            {/* Code lines */}
                                            <div className="py-5 px-5 leading-7 flex-1">
                                                <div><span className="text-purple-400">const</span> <span className="text-sky-300">me</span> <span className="text-text-secondary/50">=</span> <span className="text-text-secondary/50">{"{"}</span></div>
                                                <div className="pl-4"><span className="text-red-300">name</span><span className="text-text-secondary/50">:</span> <span className="text-emerald-400">"Tanbir Ahmed"</span><span className="text-text-secondary/50">,</span></div>
                                                <div className="pl-4"><span className="text-red-300">title</span><span className="text-text-secondary/50">:</span> <span className="text-emerald-400">"Full-Stack Laravel Dev"</span><span className="text-text-secondary/50">,</span></div>
                                                <div className="pl-4"><span className="text-red-300">stack</span><span className="text-text-secondary/50">: [</span><span className="text-emerald-400">"Laravel"</span><span className="text-text-secondary/50">, </span><span className="text-emerald-400">"React"</span><span className="text-text-secondary/50">, </span><span className="text-emerald-400">"Inertia"</span><span className="text-text-secondary/50">],</span></div>
                                                <div className="pl-4"><span className="text-red-300">products</span><span className="text-text-secondary/50">:</span> <span className="text-amber-400">6</span><span className="text-text-secondary/50">, </span><span className="text-text-secondary/25">{"// CodeCanyon"}</span></div>
                                                <div className="pl-4"><span className="text-red-300">satisfaction</span><span className="text-text-secondary/50">:</span> <span className="text-emerald-400">"98%"</span><span className="text-text-secondary/50">,</span></div>
                                                <div className="pl-4"><span className="text-red-300">openToWork</span><span className="text-text-secondary/50">:</span> <span className="text-amber-400">true</span><span className="text-text-secondary/50">,</span></div>
                                                <div><span className="text-text-secondary/50">{"}"}</span><span className="text-text-secondary/50">;</span></div>
                                                <div className="flex items-center gap-1 pt-1">
                                                    <span className="text-emerald-400">❯</span>
                                                    <span className="text-text-primary/80">me</span><span className="text-text-secondary/50">.</span><span className="text-yellow-300">buildNextProject</span><span className="text-text-secondary/50">()</span>
                                                    <span className="inline-block w-2 h-[1.1em] bg-accent-primary rounded-sm ml-0.5 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* === Stats Row === */}
                            <div className={`grid grid-cols-3 gap-3 mt-4 transition-all duration-700 delay-[550ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                                {stats.map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={i} className="bg-surface-elevated/70 backdrop-blur-md p-4 rounded-2xl border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 text-center hover:-translate-y-1 shadow-lg">
                                            <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                                                <Icon className={`w-4 h-4 ${stat.color}`} />
                                            </div>
                                            <div className="text-xl font-bold text-text-primary mb-0.5">{stat.value}</div>
                                            <div className="text-xs text-text-secondary">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* === Tech Stack Pills === */}
                            <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-700 delay-[650ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                                {TECH_STACK.map((tech) => (
                                    <span key={tech.label} className={`px-3 py-1 rounded-full border text-xs font-semibold ${tech.bg} ${tech.color}`}>
                                        {tech.label}
                                    </span>
                                ))}
                            </div>

                            {/* Floating — Available for Work */}
                            <div className={`absolute -right-10 top-6 bg-surface-elevated/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-border-subtle shadow-xl transition-all duration-700 delay-[700ms] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                                <div className="flex items-center gap-3">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-2.5 h-2.5 bg-accent-secondary rounded-full" />
                                        <div className="absolute inset-0 w-2.5 h-2.5 bg-accent-secondary rounded-full animate-ping opacity-70" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">Status</p>
                                        <p className="text-sm font-bold text-text-primary whitespace-nowrap">Available for Work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Mobile Stats ─────────────────────────────────────────── */}
                    <div className={`lg:hidden grid grid-cols-3 gap-3 w-full max-w-sm mx-auto transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="bg-surface-elevated/60 backdrop-blur-md p-4 rounded-2xl border border-border-subtle text-center shadow-lg">
                                    <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                                        <Icon className={`w-4 h-4 ${stat.color}`} />
                                    </div>
                                    <div className="text-xl font-bold text-text-primary mb-0.5">{stat.value}</div>
                                    <div className="text-xs text-text-secondary">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
