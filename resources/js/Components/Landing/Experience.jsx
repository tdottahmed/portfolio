export default function Experience({ experiences }) {
    if (!experiences || experiences.length === 0) return null;

    return (
        <section className="py-12">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Experience</h3>
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className="bg-surface-base p-6 rounded-lg border border-border-subtle">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h4 className="text-xl font-bold text-text-primary">{exp.position}</h4>
                            <span className="text-accent-primary font-medium">
                                {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                            </span>
                        </div>
                        <p className="text-lg text-text-secondary mb-4">{exp.company} • {exp.location}</p>
                        <p className="text-text-secondary">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
