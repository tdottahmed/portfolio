import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Calendar, Tag, Layers, CheckCircle2, Trophy } from 'lucide-react';

export default function Show({ project }) {
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

    let projectFeatures = [];
    try {
        projectFeatures = typeof project.features === 'string' ? JSON.parse(project.features) : (project.features || []);
    } catch (e) {
        projectFeatures = [];
    }

    let projectAchievements = [];
    try {
        projectAchievements = typeof project.achievements === 'string' ? JSON.parse(project.achievements) : (project.achievements || []);
    } catch (e) {
        projectAchievements = [];
    }

    let projectImages = [];
    try {
        projectImages = typeof project.images === 'string' ? JSON.parse(project.images) : (project.images || []);
    } catch (e) {
        projectImages = [];
    }

    return (
        <MainLayout>
            <Head title={project.title} />

            <article className="min-h-screen bg-background-primary pt-24 pb-20">
                {/* Back Button */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <Link
                        href={route('projects.index')}
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap gap-4 mb-6">
                            <span className="px-3 py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-bold rounded-full uppercase tracking-wider border border-accent-primary/20">
                                {project.category}
                            </span>
                            {project.start_date && (
                                <span className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-sm font-medium rounded-full border border-border-subtle flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {project.start_date}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            {projectLinks.live && (
                                <a
                                    href={projectLinks.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all font-semibold shadow-lg shadow-accent-primary/25"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    View Live
                                </a>
                            )}
                            {projectLinks.github && (
                                <a
                                    href={projectLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated text-text-primary rounded-full hover:bg-surface-elevated/80 border border-border-subtle transition-all font-semibold"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border-subtle mb-16 aspect-video bg-surface-elevated"
                    >
                        <img
                            src={project.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
                                <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                                    <p>{project.description}</p>
                                    {project.content && (
                                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                                    )}
                                </div>
                            </section>

                            {/* Features */}
                            {projectFeatures.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                                        <Layers className="w-6 h-6 text-accent-primary" />
                                        Key Features
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {projectFeatures.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3 p-4 bg-surface-base/50 rounded-xl border border-border-subtle">
                                                <CheckCircle2 className="w-5 h-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                                                <span className="text-text-secondary">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Achievements */}
                            {projectAchievements.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                                        <Trophy className="w-6 h-6 text-accent-primary" />
                                        Achievements
                                    </h2>
                                    <ul className="space-y-4">
                                        {projectAchievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                                                <span className="text-text-secondary text-lg">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Technologies */}
                            <div className="bg-surface-base/50 p-6 rounded-2xl border border-border-subtle">
                                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                                    <Tag className="w-5 h-5 text-accent-primary" />
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {projectTechs.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-surface-elevated text-text-secondary text-sm font-medium rounded-full border border-border-subtle"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery */}
                            {projectImages.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-text-primary">Gallery</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {projectImages.map((img, index) => (
                                            <div key={index} className="rounded-lg overflow-hidden aspect-square border border-border-subtle">
                                                <img
                                                    src={img}
                                                    alt={`Gallery ${index + 1}`}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </MainLayout>
    );
}
