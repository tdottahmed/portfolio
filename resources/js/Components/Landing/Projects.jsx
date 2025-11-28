import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Folder, Sparkles, Eye } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Projects({ projects }) {
    // Dummy data fallback with placeholder images
    const displayProjects = projects && projects.length > 0 ? projects : [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            category: "Web Application",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            technologies: ["React", "Laravel", "Tailwind CSS"],
            links: { live: "#", github: "#" }
        },
        {
            id: 2,
            title: "Task Management App",
            category: "Productivity",
            description: "A collaborative task management tool helping teams stay organized with kanban boards, calendars, and progress tracking.",
            thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
            technologies: ["Vue.js", "Firebase", "Node.js"],
            links: { live: "#", github: "#" }
        },
        {
            id: 3,
            title: "AI Content Generator",
            category: "AI Tool",
            description: "An AI-powered application that generates high-quality marketing copy, blog posts, and social media captions in seconds.",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
            technologies: ["Next.js", "OpenAI API", "Stripe"],
            links: { live: "#", github: "#" }
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="projects" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-12 sm:mb-16"
                >
                    <div className="text-center sm:text-left w-full sm:w-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4"
                        >
                            <Folder className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
                                Portfolio
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-4"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-text-secondary text-base sm:text-lg mt-4 max-w-2xl"
                        >
                            Explore my latest work and creative solutions
                        </motion.p>
                    </div>
                    <Link
                        href={route('projects.index')}
                        className="hidden sm:flex items-center px-6 py-3 rounded-full border border-border-subtle hover:border-accent-primary/50 bg-surface-elevated/50 backdrop-blur-sm hover:bg-surface-elevated transition-all duration-300 font-medium text-text-primary group"
                    >
                        View All Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Projects Grid - Mobile First */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {displayProjects.map((project, index) => {
                        let projectLinks = {};
                        try {
                            projectLinks = typeof project.links === 'string' ? JSON.parse(project.links) : (project.links || {});
                        } catch (e) {
                            projectLinks = {};
                        }

                        let projectTechs = [];
                        try {
                            projectTechs = typeof project.technologies === 'string' ? JSON.parse(project.technologies) : (project.technologies || []);
                        } catch (e) {
                            projectTechs = [];
                        }

                        return (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group bg-surface-base/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[16/10] bg-surface-elevated">
                                    <motion.img
                                        src={project.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Hover Overlay with Actions */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {projectLinks.live && (
                                            <motion.a
                                                href={projectLinks.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 sm:p-4 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
                                                title="View Live"
                                            >
                                                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </motion.a>
                                        )}
                                        {projectLinks.github && (
                                            <motion.a
                                                href={projectLinks.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 sm:p-4 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
                                                title="View Code"
                                            >
                                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </motion.a>
                                        )}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-surface-base/90 backdrop-blur-md text-text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-border-subtle shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {projectTechs.slice(0, 3).map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle hover:border-accent-primary/50 transition-colors"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                        {projectTechs.length > 3 && (
                                            <span className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle">
                                                +{projectTechs.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Project Link */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold text-sm sm:text-base cursor-pointer"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Mobile View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center sm:hidden"
                >
                    <Link
                        href={route('projects.index')}
                        className="inline-flex items-center px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-xl hover:shadow-accent-primary/40"
                    >
                        View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
