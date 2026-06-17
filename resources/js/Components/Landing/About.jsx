import { User, Download, MapPin, Mail, Briefcase, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function About({ settings }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

    const aboutData = settings?.about
        ? typeof settings.about === "string"
            ? JSON.parse(settings.about)
            : settings.about
        : {};

    const infoItems = [
        { icon: User,      label: "Name",         value: aboutData.name     || "Tanbir Ahmed" },
        { icon: Mail,      label: "Email",         value: aboutData.email    || "contact@example.com" },
        { icon: MapPin,    label: "Location",      value: aboutData.location || "Dhaka, Bangladesh" },
        { icon: Briefcase, label: "Availability",  value: "Available for work", isAccent: true },
    ];

    return (
        <section id="about" className="relative py-20 sm:py-24 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4">
                        <User className="w-4 h-4 text-accent-primary" />
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Who I Am</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Left: Photo ────────────────────────────────────────────── */}
                    <div className={`relative flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

                        {/* Ambient glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-accent-tertiary/15 blur-3xl rounded-full" />

                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Gradient border wrapper */}
                            <div className="absolute inset-0 p-px rounded-2xl bg-gradient-to-br from-accent-primary/70 via-border-subtle/20 to-accent-tertiary/70 shadow-2xl">
                                <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-elevated">
                                    <img
                                        src={aboutData.image || "https://ui-avatars.com/api/?name=Tanbir+Ahmed&background=6366f1&color=fff&size=400"}
                                        alt="About Me"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Floating: Years of Experience */}
                            <div className={`absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 bg-surface-elevated/95 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-border-subtle shadow-2xl transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"}`}>
                                <p className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                                    {aboutData.years_experience || "3+"}
                                </p>
                                <p className="text-xs text-text-secondary font-medium leading-tight">Years of<br />Experience</p>
                            </div>

                            {/* Floating: Open to Work */}
                            <div className={`absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-surface-elevated/95 backdrop-blur-md px-3 sm:px-4 py-2.5 rounded-2xl border border-accent-secondary/30 shadow-2xl transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-90"}`}>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                                        <div className="absolute inset-0 w-2 h-2 bg-accent-secondary rounded-full animate-ping opacity-70" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold text-text-primary whitespace-nowrap">Open to Work</span>
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
                        </div>
                    </div>

                    {/* ── Right: Content ──────────────────────────────────────────── */}
                    <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>

                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
                            {aboutData.title || "Passionate Developer & Designer"}
                        </h3>

                        <div
                            className="text-text-secondary mb-8 prose prose-base dark:prose-invert leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: aboutData.description || "<p>I am a passionate developer crafting clean, efficient, and scalable digital experiences.</p>",
                            }}
                        />

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {infoItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className={`flex items-center gap-3 p-3 sm:p-4 bg-surface-elevated/60 backdrop-blur-sm rounded-xl border border-border-subtle hover:border-accent-primary/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                        style={{ transitionDelay: `${600 + idx * 100}ms` }}
                                    >
                                        <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className={`w-4 h-4 ${item.isAccent ? "text-accent-secondary" : "text-accent-primary"}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-text-secondary mb-0.5">{item.label}</p>
                                            <p className={`text-sm font-semibold truncate ${item.isAccent ? "text-accent-secondary" : "text-text-primary"}`}>
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {aboutData.resume && (
                            <a
                                href={aboutData.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40 font-semibold text-sm hover:-translate-y-0.5 active:scale-[0.98] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                style={{ transitionDelay: "1000ms" }}
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
