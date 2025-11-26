import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
            description: "Leading a team of developers in building scalable web applications using React and Laravel. Implemented CI/CD pipelines and improved application performance by 40%."
        },
        {
            id: 2,
            position: "Frontend Developer",
            company: "Creative Agency",
            location: "New York, NY",
            start_date: "2020",
            end_date: "2022",
            is_current: false,
            description: "Developed responsive and interactive user interfaces for various clients. Collaborated with designers to translate high-fidelity mockups into pixel-perfect code."
        },
        {
            id: 3,
            position: "Junior Web Developer",
            company: "StartUp Hub",
            location: "Remote",
            start_date: "2018",
            end_date: "2020",
            is_current: false,
            description: "Assisted in the development of internal tools and client websites. Gained proficiency in modern JavaScript frameworks and version control systems."
        }
    ];

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
                        Career Path
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mt-2"
                    >
                        Work Experience
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {displayExperiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id} 
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface-base p-8 rounded-2xl border border-border-subtle shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-accent-primary" />
                                        {exp.position}
                                    </h4>
                                    <p className="text-lg text-text-secondary font-medium mt-1">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-wide">
                                        {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                                    </span>
                                    <span className="text-sm text-text-secondary flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-text-secondary leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
