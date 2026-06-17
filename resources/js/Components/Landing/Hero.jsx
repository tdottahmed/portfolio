import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Code,
    Rocket,
    Briefcase,
    Award,
    Users,
    ChevronDown,
    Star,
} from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

const TECH_STACK = [
    { label: "React",      color: "text-sky-400",    bg: "bg-sky-400/10 border-sky-400/30" },
    { label: "Laravel",    color: "text-red-400",    bg: "bg-red-400/10 border-red-400/30" },
    { label: "TypeScript", color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/30" },
    { label: "Tailwind",   color: "text-cyan-400",   bg: "bg-cyan-400/10 border-cyan-400/30" },
    { label: "MySQL",      color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/30" },
    { label: "Node.js",    color: "text-green-400",  bg: "bg-green-400/10 border-green-400/30" },
];

export default function Hero({ settings }) {
    const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
        title:    heroData.title    || "Full Stack Developer",
        subtitle: heroData.subtitle ||
            "I build exceptional digital experiences that matter. Focused on creating intuitive and performant web applications.",
    };

    const stats = [
        { icon: Briefcase, value: "50+",  label: "Projects",   color: "text-accent-primary",   bg: "bg-accent-primary/10"   },
        { icon: Award,     value: "3+",   label: "Years Exp.", color: "text-accent-secondary",  bg: "bg-accent-secondary/10" },
        { icon: Users,     value: "100+", label: "Clients",    color: "text-accent-tertiary",   bg: "bg-accent-tertiary/10"  },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-4"
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

                        {/* Role */}
                        <div className={`mb-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                                {displayData.title}
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className={`text-sm sm:text-base text-text-secondary mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            {displayData.subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-5 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
                        <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2.5 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
                    <div className="relative hidden lg:flex items-center justify-center min-h-[400px]">
                        <div className="relative w-full max-w-[380px] mx-auto">

                            {/* Decorative rings + central icon */}
                            <div className={`relative mx-auto w-48 h-48 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                                {/* Outer spinning ring */}
                                <div className="absolute inset-0 rounded-full border border-dashed border-accent-primary/20 animate-[spin_24s_linear_infinite]" />
                                {/* Inner counter-spinning ring */}
                                <div className="absolute inset-5 rounded-full border border-accent-secondary/20 animate-[spin_16s_linear_infinite_reverse]" />
                                {/* Glow backdrop */}
                                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-accent-primary/20 via-surface-elevated to-accent-tertiary/20 blur-sm" />
                                {/* Icon circle */}
                                <div className="absolute inset-10 rounded-full bg-surface-elevated/80 border border-accent-primary/30 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                                    <Code className="w-12 h-12 text-accent-primary" />
                                </div>

                                {/* Tech tag — top */}
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-[450ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
                                    <span className={`px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${TECH_STACK[0].bg} ${TECH_STACK[0].color}`}>{TECH_STACK[0].label}</span>
                                </div>
                                {/* Tech tag — right */}
                                <div className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-[500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
                                    <span className={`px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${TECH_STACK[1].bg} ${TECH_STACK[1].color}`}>{TECH_STACK[1].label}</span>
                                </div>
                                {/* Tech tag — bottom */}
                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition-all duration-700 delay-[550ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
                                    <span className={`px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${TECH_STACK[2].bg} ${TECH_STACK[2].color}`}>{TECH_STACK[2].label}</span>
                                </div>
                                {/* Tech tag — left */}
                                <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-[600ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
                                    <span className={`px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${TECH_STACK[3].bg} ${TECH_STACK[3].color}`}>{TECH_STACK[3].label}</span>
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className={`grid grid-cols-3 gap-3 mt-4 transition-all duration-700 delay-[650ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                                {stats.map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="bg-surface-elevated/70 backdrop-blur-md p-4 rounded-2xl border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 text-center hover:-translate-y-1 shadow-lg"
                                        >
                                            <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                                                <Icon className={`w-4 h-4 ${stat.color}`} />
                                            </div>
                                            <div className="text-xl font-bold text-text-primary mb-0.5">{stat.value}</div>
                                            <div className="text-xs text-text-secondary">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Floating — Available for Work */}
                            <div className={`absolute -right-6 top-4 bg-surface-elevated/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-border-subtle shadow-xl transition-all duration-700 delay-[700ms] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
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

                            {/* Floating — Fast Delivery */}
                            <div className={`absolute -left-6 bottom-24 bg-surface-elevated/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-border-subtle shadow-xl transition-all duration-700 delay-[750ms] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-accent-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Rocket className="w-4 h-4 text-accent-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">Delivery</p>
                                        <p className="text-sm font-bold text-text-primary">Fast & Quality</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating — Top Rated */}
                            <div className={`absolute right-0 bottom-4 bg-surface-elevated/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-border-subtle shadow-xl transition-all duration-700 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-accent-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Star className="w-4 h-4 text-accent-tertiary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">Rating</p>
                                        <p className="text-sm font-bold text-text-primary">Top Rated</p>
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
