import { Code, Database, Palette, Zap, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function Skills({ skills }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    // Icon mapping for skill categories
    const categoryIcons = {
        Frontend: Palette,
        Backend: Database,
        Tools: Zap,
        Design: Palette,
        Mobile: Zap,
    };

    // Dummy data fallback with placeholder content
    const displaySkills =
        skills && Object.keys(skills).length > 0
            ? skills
            : {
                  Frontend: [
                      { id: 1, name: "React", icon: "fab fa-react", level: 90 },
                      {
                          id: 2,
                          name: "Vue.js",
                          icon: "fab fa-vuejs",
                          level: 85,
                      },
                      {
                          id: 3,
                          name: "Tailwind CSS",
                          icon: "fab fa-css3",
                          level: 95,
                      },
                      {
                          id: 4,
                          name: "TypeScript",
                          icon: "fab fa-js",
                          level: 88,
                      },
                  ],
                  Backend: [
                      {
                          id: 5,
                          name: "Laravel",
                          icon: "fab fa-laravel",
                          level: 92,
                      },
                      {
                          id: 6,
                          name: "Node.js",
                          icon: "fab fa-node",
                          level: 87,
                      },
                      {
                          id: 7,
                          name: "PostgreSQL",
                          icon: "fas fa-database",
                          level: 85,
                      },
                      {
                          id: 8,
                          name: "Redis",
                          icon: "fas fa-server",
                          level: 80,
                      },
                  ],
                  Tools: [
                      { id: 9, name: "Git", icon: "fab fa-git-alt", level: 95 },
                      {
                          id: 10,
                          name: "Docker",
                          icon: "fab fa-docker",
                          level: 82,
                      },
                      { id: 11, name: "AWS", icon: "fab fa-aws", level: 78 },
                      {
                          id: 12,
                          name: "Figma",
                          icon: "fab fa-figma",
                          level: 88,
                      },
                  ],
              };

    return (
        <section className="relative py-16 sm:py-20 lg:py-24  overflow-hidden" ref={sectionRef}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4">
                        <Code className="w-4 h-4 text-accent-primary" />
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
                            Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-4 mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid - Mobile First */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {Object.entries(displaySkills).map(
                        ([category, items], categoryIndex) => {
                            const IconComponent =
                                categoryIcons[category] || Code;
                            return (
                                <div
                                    key={category}
                                    className={`group bg-surface-base/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border-subtle hover:border-accent-primary/50 transition-all duration-700 shadow-lg hover:shadow-xl relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-tertiary/0 group-hover:from-accent-primary/5 group-hover:to-accent-tertiary/5 transition-all duration-300 rounded-2xl sm:rounded-3xl" />

                                    <div className="relative z-10">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent-primary" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-text-primary capitalize">
                                                {category}
                                            </h3>
                                        </div>

                                        {/* Skills List */}
                                        <div className="space-y-4">
                                            {items.map((skill, index) => (
                                                <div
                                                    key={skill.id}
                                                    className="group/item"
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            {skill.icon && (
                                                                <i
                                                                    className={`${skill.icon} text-accent-secondary text-sm sm:text-base`}
                                                                />
                                                            )}
                                                            <span className="text-text-primary font-semibold text-sm sm:text-base">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                        {skill.level && (
                                                            <span className="text-text-secondary text-xs font-medium">
                                                                {skill.level}%
                                                            </span>
                                                        )}
                                                    </div>
                                                    {skill.level && (
                                                        <div className="relative h-1.5 sm:h-2 bg-surface-elevated rounded-full overflow-hidden">
                                                            <div
                                                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-1000 ease-out"
                                                                style={{
                                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                                    transitionDelay: `${(categoryIndex * 150) + (index * 100) + 500}ms`
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>

                {/* Additional Info Section - Mobile Friendly */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        {
                            label: "Projects Completed",
                            value: "50+",
                            icon: CheckCircle2,
                        },
                        { label: "Years Experience", value: "5+", icon: Zap },
                        { label: "Happy Clients", value: "100+", icon: Code },
                    ].map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className={`bg-surface-elevated/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-border-subtle text-center hover:scale-105 transition-transform duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                            >
                                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary mx-auto mb-2 sm:mb-3" />
                                <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-text-secondary">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
