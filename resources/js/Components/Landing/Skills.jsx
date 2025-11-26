export default function Skills({ skills }) {
    if (!skills) return null;
    
    return (
        <section className="py-12">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-surface-base p-6 rounded-lg border border-border-subtle">
                        <h4 className="text-lg font-semibold text-accent-primary mb-4 capitalize">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <div key={skill.id} className="flex items-center gap-2 bg-surface-elevated px-3 py-2 rounded-md">
                                    {skill.icon && <i className={`${skill.icon} text-xl`} />}
                                    <span className="text-text-primary">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
