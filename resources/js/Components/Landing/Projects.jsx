import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Projects({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-20 bg-surface-elevated">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-center md:text-left w-full md:w-auto mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent-primary mx-auto md:mx-0 rounded-full" />
                    </div>
                    <Link 
                        href={route('projects.index')} 
                        className="hidden md:flex items-center text-accent-primary hover:text-accent-primary/80 transition-colors font-medium"
                    >
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface-base rounded-xl overflow-hidden shadow-lg border border-border-subtle hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.thumbnail || "https://ui-avatars.com/api/?name=Project&background=random"} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {(() => {
                                        try {
                                            const links = project.links ? (typeof project.links === 'string' ? JSON.parse(project.links) : project.links) : {};
                                            return (
                                                <>
                                                    {links.live && (
                                                        <a 
                                                            href={links.live} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
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
                                                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-accent-primary hover:text-white transition-colors"
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
                            
                            <div className="p-6">
                                <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-text-primary mt-2 mb-3 group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {(() => {
                                        try {
                                            const techs = project.technologies ? (typeof project.technologies === 'string' ? JSON.parse(project.technologies) : project.technologies) : [];
                                            return (
                                                <>
                                                    {techs.slice(0, 3).map((tech, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="px-2 py-1 bg-surface-elevated text-text-secondary text-xs rounded-md border border-border-subtle"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {techs.length > 3 && (
                                                        <span className="px-2 py-1 bg-surface-elevated text-text-secondary text-xs rounded-md border border-border-subtle">
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
                        className="inline-flex items-center px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors"
                    >
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
