import {
    Briefcase,
    Calendar,
    MapPin,
    Trophy,
} from "lucide-react";
import { formatDate } from "@/Utils/date";

export default function Experience({ experiences }) {
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
        <section className="py-20 sm:py-24 relative overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-accent-primary/10 rounded-lg">
                            <Briefcase className="w-6 h-6 text-accent-primary" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                            Work Experience
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        My professional journey, key roles, and the impact I've
                        made along the way.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l-2 border-border-subtle ml-3 sm:ml-6 space-y-12 sm:space-y-16">
                    {displayExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="relative pl-8 sm:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] sm:left-[-11px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background-primary border-4 border-accent-primary shadow-sm" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-primary">
                                        {exp.position}
                                    </h3>
                                    <div className="text-lg font-medium text-accent-primary mt-1">
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 items-center text-sm">

                                    <span className="px-3 py-1 bg-surface-elevated rounded-full border border-border-subtle text-text-secondary font-medium flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(exp.start_date, { year: 'numeric', month: 'short' })} -{" "}
                                        {exp.is_current
                                            ? "Present"
                                            : formatDate(exp.end_date, { year: 'numeric', month: 'short' })}
                                    </span>
                                    <span className="px-3 py-1 bg-surface-elevated rounded-full border border-border-subtle text-text-secondary font-medium flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-6 text-base sm:text-lg">
                                {exp.description}
                            </p>

                            {/* Achievements Section */}
                            {exp.achievements &&
                                exp.achievements.length > 0 && (
                                    <div className="bg-surface-base/50 rounded-xl p-5 sm:p-6 border border-border-subtle/50">
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                                            <Trophy className="w-4 h-4 text-accent-secondary" />
                                            Key Achievements
                                        </h4>
                                        <ul className="grid gap-3 sm:grid-cols-1">
                                            {exp.achievements.map(
                                                (achievement, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-text-secondary"
                                                    >
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-secondary flex-shrink-0" />
                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
