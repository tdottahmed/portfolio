export default function Education({ education }) {
    if (!education || education.length === 0) return null;

    return (
        <section className="py-12">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Education</h3>
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="bg-surface-base p-6 rounded-lg border border-border-subtle">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h4 className="text-xl font-bold text-text-primary">{edu.institution}</h4>
                            <span className="text-accent-primary font-medium">
                                {edu.start_date} - {edu.end_date}
                            </span>
                        </div>
                        <p className="text-lg text-text-secondary mb-2">{edu.degree} in {edu.field}</p>
                        {edu.gpa && <p className="text-text-secondary">GPA: {edu.gpa}</p>}
                        <p className="text-text-secondary mt-2">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
