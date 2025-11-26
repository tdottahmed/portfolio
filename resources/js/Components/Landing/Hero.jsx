import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Hero({ settings }) {
    const heroData = settings?.hero ? (typeof settings.hero === 'string' ? JSON.parse(settings.hero) : settings.hero) : {};
    const socialLinks = settings?.social_links ? (typeof settings.social_links === 'string' ? JSON.parse(settings.social_links) : settings.social_links) : {};

    return (
        <section className="min-h-screen flex items-center justify-center bg-background-primary relative overflow-hidden pt-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-accent-primary font-medium text-lg mb-4">
                            {heroData.greeting || "Hello, I'm"}
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                            {heroData.title || "Creative Developer"}
                        </h1>
                        <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                            {heroData.subtitle || "I build exceptional digital experiences that matter."}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a 
                                href="#projects" 
                                className="px-8 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors flex items-center gap-2"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a 
                                href="#contact" 
                                className="px-8 py-3 border border-border-subtle text-text-primary rounded-lg hover:bg-surface-elevated transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-6 justify-center md:justify-start">
                            {socialLinks.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                            )}
                            {socialLinks.email && (
                                <a href={`mailto:${socialLinks.email}`} className="text-text-secondary hover:text-accent-primary transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-accent-primary/20 rounded-full animate-pulse" />
                            <img 
                                src={heroData.image || "https://ui-avatars.com/api/?name=User&background=random"} 
                                alt="Profile" 
                                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-4 border-surface-base shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
