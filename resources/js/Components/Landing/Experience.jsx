import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Experience({ experiences }) {
    // Dummy data fallback
    const displayExperiences = experiences && experiences.length > 0 ? experiences : [
        {
            id: 1,
            position: "Senior Full Stack Developer",
            company: "Tech Solutions Inc.",
            location: "San Francisco, CA",
            start_date: "2022",
            end_date: "Present",
            is_current: true,
            description: "Leading a team of developers in building scalable web applications using React and Laravel. Implemented CI/CD pipelines and improved application performance by 40%.",
        },
        {
            id: 2,
            position: "Frontend Developer",
            company: "Creative Agency",
            location: "New York, NY",
            start_date: "2020",
            end_date: "2022",
            is_current: false,
            description: "Developed responsive and interactive user interfaces for various clients. Collaborated with designers to translate high-fidelity mockups into pixel-perfect code.",
        },
        {
            id: 3,
            position: "Junior Web Developer",
            company: "StartUp Hub",
            location: "Remote",
            start_date: "2018",
            end_date: "2020",
            is_current: false,
            description: "Assisted in the development of internal tools and client websites. Gained proficiency in modern JavaScript frameworks and version control systems.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-background-secondary overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4"
                    >
                        <Briefcase className="w-4 h-4 text-accent-primary" />
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
                            Career Path
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-4 mb-4"
                    >
                        Work Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        My professional journey and milestones
                    </motion.p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    {/* Timeline Line - Hidden on Mobile, Visible on Desktop */}
                    <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary opacity-30" />

                    <div className="space-y-8 sm:space-y-12">
                        {displayExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="relative bg-surface-base/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 to-accent-tertiary/0 group-hover:from-accent-primary/5 group-hover:to-accent-tertiary/5 transition-all duration-300 rounded-2xl sm:rounded-3xl" />

                                {/* Timeline Dot - Desktop Only */}
                                <div className="hidden lg:block absolute left-8 -translate-x-1/2 top-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                                        className="w-4 h-4 bg-accent-primary rounded-full border-4 border-background-secondary shadow-lg"
                                    />
                                </div>

                                <div className="lg:pl-16 relative z-10">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent-primary flex-shrink-0" />
                                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                                                    {exp.position}
                                                </h3>
                                            </div>
                                            <p className="text-lg sm:text-xl text-text-secondary font-semibold ml-8 sm:ml-0">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end gap-2">
                                            <motion.span
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-xs sm:text-sm font-bold uppercase tracking-wide border border-accent-primary/20"
                                            >
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                                {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                                            </motion.span>
                                            <span className="text-sm text-text-secondary flex items-center gap-1.5">
                                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                                        {exp.description}
                                    </p>

                                    {/* Current Badge */}
                                    {exp.is_current && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.3 }}
                                            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent-secondary/10 text-accent-secondary rounded-full text-xs font-semibold border border-accent-secondary/20"
                                        >
                                            <CheckCircle2 className="w-3 h-3" />
                                            Current Position
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
