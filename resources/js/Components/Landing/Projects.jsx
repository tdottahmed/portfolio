import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Folder } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Projects({ projects }) {
    // Dummy data fallback
    const displayProjects = projects && projects.length > 0 ? projects : [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            category: "Web Application",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            technologies: ["React", "Laravel", "Tailwind CSS"],
            links: { live: "#", github: "#" }
        },
        {
            id: 2,
            title: "Task Management App",
            category: "Productivity",
            description: "A collaborative task management tool helping teams stay organized with kanban boards, calendars, and progress tracking.",
            thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop",
            technologies: ["Vue.js", "Firebase", "Node.js"],
            links: { live: "#", github: "#" }
        },
        {
            id: 3,
            title: "AI Content Generator",
            category: "AI Tool",
            description: "An AI-powered application that generates high-quality marketing copy, blog posts, and social media captions in seconds.",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
            technologies: ["Next.js", "OpenAI API", "Stripe"],
            links: { live: "#", github: "#" }
        }
    ];

    return (
        <section id="projects" className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-primary font-semibold tracking-wider uppercase text-sm"
                        >
                            Portfolio
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-text-primary mt-2"
                        >
                            Featured Projects
                        </motion.h2>
                    </div>
                    <Link 
                        href={route('projects.index')} 
                        className="hidden md:flex items-center px-6 py-3 rounded-full border border-border-subtle hover:bg-surface-base transition-colors font-medium text-text-primary group"
                    >
                        View All Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-surface-base rounded-2xl overflow-hidden shadow-lg border border-border-subtle hover:shadow-2xl hover:border-accent-primary/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img 
                                    src={project.thumbnail || "https://ui-avatars.com/api/?name=Project&background=random"} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    {(() => {
                                        try {
                                            const links = typeof project.links === 'string' ? JSON.parse(project.links) : (project.links || {});
                                            return (
                                                <>
                                                    {links.live && (
                                                        <a 
                                                            href={links.live} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors transform hover:scale-110"
                                                            title="View Live"
                                                        >
                                                            <ExternalLink className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                    {links.github && (
                                                        <a 
                                                            href={links.github} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors transform hover:scale-110"
                                                            title="View Code"
                                                        >
                                                            <Github className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                </>
                                            );
                                        } catch (e) {
                                            return null;
                                        }
                                    })()}
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4">
                                    <Folder className="w-4 h-4 text-accent-primary" />
                                    <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {(() => {
                                        try {
                                            const techs = typeof project.technologies === 'string' ? JSON.parse(project.technologies) : (project.technologies || []);
                                            return (
                                                <>
                                                    {techs.slice(0, 3).map((tech, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="px-3 py-1 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {techs.length > 3 && (
                                                        <span className="px-3 py-1 bg-surface-elevated text-text-secondary text-xs font-medium rounded-full border border-border-subtle">
                                                            +{techs.length - 3}
                                                        </span>
                                                    )}
                                                </>
                                            );
                                        } catch (e) {
                                            return null;
                                        }
                                    })()}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link 
                        href={route('projects.index')} 
                        className="inline-flex items-center px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-colors font-medium shadow-lg shadow-accent-primary/25"
                    >
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
