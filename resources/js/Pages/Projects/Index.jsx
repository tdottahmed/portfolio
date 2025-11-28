import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowRight } from 'lucide-react';

export default function Index({ projects }) {
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
        <MainLayout>
            <Head title="Projects" />
            
            <section className="relative py-20 sm:py-24 lg:py-32 bg-background-primary overflow-hidden min-h-screen">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 sm:mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-6"
                        >
                            <Folder className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-bold tracking-wider uppercase text-xs">
                                Portfolio
                            </span>
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Projects</span>
                        </h1>
                        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            A complete collection of my work, side projects, and open source contributions.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => {
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
                                    className="group bg-surface-base/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
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
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
                                                    title="View Live"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                            {projectLinks.github && (
                                                <motion.a
                                                    href={projectLinks.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
                                                    title="View Code"
                                                >
                                                    <Github className="w-5 h-5" />
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
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {projectTechs.slice(0, 3).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {projectTechs.length > 3 && (
                                                <span className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle">
                                                    +{projectTechs.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* View Project Link */}
                                        <Link
                                            href={route('projects.show', project.slug || project.id)}
                                            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold text-sm cursor-pointer mt-auto"
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
