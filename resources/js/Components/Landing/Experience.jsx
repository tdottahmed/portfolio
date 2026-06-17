import { Briefcase, Calendar, MapPin, Trophy } from "lucide-react";
import { formatDate } from "@/Utils/date";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function Experience({ experiences }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const displayExperiences =
        experiences && experiences.length > 0
            ? experiences
            : [
                  {
                      id: 1,
                      position: "Senior Full Stack Developer",
                      company: "Tech Solutions Inc.",
                      location: "San Francisco, CA",
                      start_date: "2022",
                      end_date: "Present",
                      is_current: true,
                      description:
                          "Leading a team of developers in building scalable web applications using React and Laravel. Implemented CI/CD pipelines and improved application performance by 40%.",
                      achievements: [
                          "Reduced server response time by 40% through query optimization",
                          "Led migration from legacy monolith to microservices architecture",
                          "Mentored 5 junior developers to promotion",
                      ],
                  },
                  {
                      id: 2,
                      position: "Frontend Developer",
                      company: "Creative Agency",
                      location: "New York, NY",
                      start_date: "2020",
                      end_date: "2022",
                      is_current: false,
                      description:
                          "Developed responsive and interactive user interfaces for various clients. Collaborated with designers to translate high-fidelity mockups into pixel-perfect code.",
                      achievements: [
                          "Won 'Best UI Design' award for client project",
                          "Implemented design system used across 15+ projects",
                          "Improved accessibility score from 65 to 98",
                      ],
                  },
                  {
                      id: 3,
                      position: "Junior Web Developer",
                      company: "StartUp Hub",
                      location: "Remote",
                      start_date: "2018",
                      end_date: "2020",
                      is_current: false,
                      description:
                          "Assisted in the development of internal tools and client websites. Gained proficiency in modern JavaScript frameworks and version control systems.",
                      achievements: [
                          "Developed internal dashboard used by entire sales team",
                          "Automated weekly reporting process saving 5 hours/week",
                      ],
                  },
              ];

    return (
        <section className="relative py-20 sm:py-24 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                {/* Section Header */}
                <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4">
                        <Briefcase className="w-4 h-4 text-accent-primary" />
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Career</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                        Work Experience
                    </h2>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
                        My professional journey, key roles, and the impact I've made along the way.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative ml-4 sm:ml-8">
                    {/* Animated timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />
                    <div
                        className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary transition-all duration-1000 ease-out"
                        style={{ height: isVisible ? "100%" : "0%" }}
                    />

                    <div className="space-y-10 sm:space-y-14">
                        {displayExperiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative pl-8 sm:pl-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                                style={{ transitionDelay: `${index * 200 + 200}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1 -translate-x-1/2">
                                    {exp.is_current ? (
                                        <div className="relative w-5 h-5 flex items-center justify-center">
                                            <div className="absolute inset-0 rounded-full bg-accent-secondary/40 animate-ping" />
                                            <div className="w-4 h-4 rounded-full bg-accent-secondary border-2 border-surface-base shadow-lg shadow-accent-secondary/50" />
                                        </div>
                                    ) : (
                                        <div className="w-4 h-4 rounded-full bg-surface-base border-2 border-accent-primary shadow-md" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className="group relative bg-surface-elevated/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-tertiary/0 group-hover:from-accent-primary/5 group-hover:to-accent-tertiary/5 transition-all duration-300 rounded-2xl" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                                                        {exp.position}
                                                    </h3>
                                                    {exp.is_current && (
                                                        <span className="px-2.5 py-0.5 bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary text-xs font-bold rounded-full">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-base sm:text-lg font-semibold text-accent-primary">
                                                    {exp.company}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 text-sm flex-shrink-0">
                                                <span className="px-3 py-1 bg-surface-base/50 rounded-full border border-border-subtle text-text-secondary font-medium flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {formatDate(exp.start_date, { year: "numeric", month: "short" })}
                                                    {" — "}
                                                    {exp.is_current
                                                        ? "Present"
                                                        : formatDate(exp.end_date, { year: "numeric", month: "short" })}
                                                </span>
                                                <span className="px-3 py-1 bg-surface-base/50 rounded-full border border-border-subtle text-text-secondary font-medium flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                                            {exp.description}
                                        </p>

                                        {exp.achievements && exp.achievements.length > 0 && (
                                            <div className="bg-surface-base/40 rounded-xl p-4 sm:p-5 border border-border-subtle/50">
                                                <h4 className="flex items-center gap-2 text-xs font-bold text-text-primary uppercase tracking-wider mb-3">
                                                    <Trophy className="w-3.5 h-3.5 text-accent-secondary" />
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2.5">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm">
                                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary flex-shrink-0" />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
