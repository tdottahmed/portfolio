import { motion } from 'framer-motion';

export default function Skills({ skills }) {
    // Dummy data fallback
    const displaySkills = skills && Object.keys(skills).length > 0 ? skills : {
        "Frontend": [
            { id: 1, name: "React", icon: "fab fa-react" },
            { id: 2, name: "Vue.js", icon: "fab fa-vuejs" },
            { id: 3, name: "Tailwind CSS", icon: "fab fa-css3" },
            { id: 4, name: "TypeScript", icon: "fab fa-js" }
        ],
        "Backend": [
            { id: 5, name: "Laravel", icon: "fab fa-laravel" },
            { id: 6, name: "Node.js", icon: "fab fa-node" },
            { id: 7, name: "PostgreSQL", icon: "fas fa-database" },
            { id: 8, name: "Redis", icon: "fas fa-server" }
        ],
        "Tools": [
            { id: 9, name: "Git", icon: "fab fa-git-alt" },
            { id: 10, name: "Docker", icon: "fab fa-docker" },
            { id: 11, name: "AWS", icon: "fab fa-aws" },
            { id: 12, name: "Figma", icon: "fab fa-figma" }
        ]
    };

    return (
        <section className="py-24 bg-surface-elevated">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-primary font-semibold tracking-wider uppercase text-sm"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mt-2"
                    >
                        Technical Skills
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(displaySkills).map(([category, items], index) => (
                        <motion.div 
                            key={category} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface-base p-8 rounded-2xl border border-border-subtle shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <h4 className="text-xl font-bold text-text-primary mb-6 capitalize flex items-center gap-3">
                                <span className="w-2 h-8 bg-accent-primary rounded-full"></span>
                                {category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <div 
                                        key={skill.id} 
                                        className="flex items-center gap-2 bg-surface-elevated px-4 py-2 rounded-lg border border-border-subtle hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-colors cursor-default"
                                    >
                                        {skill.icon && <i className={`${skill.icon} text-accent-secondary`} />}
                                        <span className="text-text-primary font-medium text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
