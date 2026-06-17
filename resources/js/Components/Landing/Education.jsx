import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { formatDate } from "@/Utils/date";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function Education({ education }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    if (!education || education.length === 0) return null;

    return (
        <section className="relative py-20 sm:py-24 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Section Header */}
                <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4">
                        <GraduationCap className="w-4 h-4 text-accent-primary" />
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Academic</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                        Education
                    </h2>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
                        My academic background and the foundation that shaped my technical expertise.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className={`group relative bg-surface-elevated/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-accent-primary/40 transition-all duration-700 shadow-lg hover:shadow-xl overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:to-accent-secondary/5 transition-all duration-300 rounded-2xl" />

                            <div className="relative z-10">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors duration-300">
                                        <GraduationCap className="w-6 h-6 text-accent-primary" />
                                    </div>
                                    {edu.gpa && (
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-secondary/10 border border-accent-secondary/20 rounded-full flex-shrink-0">
                                            <Award className="w-3.5 h-3.5 text-accent-secondary" />
                                            <span className="text-accent-secondary text-xs font-bold">GPA: {edu.gpa}</span>
                                        </div>
                                    )}
                                </div>

                                <h4 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                                    {edu.institution}
                                </h4>

                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="w-4 h-4 text-accent-primary flex-shrink-0" />
                                    <p className="text-sm sm:text-base text-accent-primary font-semibold">
                                        {edu.degree} in {edu.field}
                                    </p>
                                </div>

                                <div className="flex items-center gap-1.5 mb-5">
                                    <Calendar className="w-3.5 h-3.5 text-text-secondary flex-shrink-0" />
                                    <span className="text-sm text-text-secondary">
                                        {formatDate(edu.start_date)} — {formatDate(edu.end_date)}
                                    </span>
                                </div>

                                {edu.description && (
                                    <p className="text-text-secondary text-sm leading-relaxed border-t border-border-subtle/50 pt-4">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
