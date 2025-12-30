import { User, Download } from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function About({ settings }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const aboutData = settings?.about
        ? typeof settings.about === "string"
            ? JSON.parse(settings.about)
            : settings.about
        : {};

    return (
        <section id="about" className="py-20" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            About Me
                        </h2>
                        <div className={`w-20 h-1 bg-accent-primary mx-auto rounded-full transition-all duration-700 delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl group">
                                <img
                                    src={
                                        aboutData.image ||
                                        "https://ui-avatars.com/api/?name=About+Me&background=random"
                                    }
                                    alt="About Me"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className={`absolute -bottom-6 -right-6 bg-surface-base/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-border-subtle hidden md:block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-accent-primary">
                                        {aboutData.years_experience || "3+"}
                                    </p>
                                    <p className="text-sm text-text-secondary">
                                        Years of
                                        <br />
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                {aboutData.title ||
                                    "Passionate Developer & Designer"}
                            </h3>
                            <div
                                className="text-text-secondary mb-8 prose prose-lg dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        aboutData.description ||
                                        "<p>I am a passionate developer...</p>",
                                }}
                            />

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {[
                                    { label: "Name", value: aboutData.name || "Tanbir Ahmed" },
                                    { label: "Email", value: aboutData.email || "contact@example.com" },
                                    { label: "Location", value: aboutData.location || "Dhaka, Bangladesh" },
                                    { label: "Availability", value: "Available for work", isAccent: true }
                                ].map((item, idx) => (
                                    <div 
                                        key={item.label} 
                                        className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                        style={{ transitionDelay: `${600 + (idx * 100)}ms` }}
                                    >
                                        <p className="text-sm text-text-secondary mb-1">
                                            {item.label}
                                        </p>
                                        <p className={`font-medium ${item.isAccent ? 'text-accent-secondary' : 'text-text-primary'}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {aboutData.resume && (
                                <a
                                    href={aboutData.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-6 py-3 bg-surface-base/80 backdrop-blur-md border border-border-subtle text-text-primary rounded-lg hover:bg-surface-elevated transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Resume
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
