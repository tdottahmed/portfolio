import * as Icons from "lucide-react";
import { useScrollAnimation } from "@/Hooks/useScrollAnimation";

export default function Services({ services }) {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    if (!services || services.length === 0) return null;

    const IconComponent = ({ name }) => {
        const Icon = Icons[name] || Icons.Code2;
        return <Icon className="w-8 h-8" />;
    };

    return (
        <section id="services" className="py-20" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        My Services
                    </h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        I offer a wide range of services to help you build your
                        digital presence and scale your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`bg-surface-base/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-border-subtle hover:border-accent-primary/30 transition-all duration-700 group hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="w-14 h-14 bg-accent-primary/10 rounded-lg flex items-center justify-center text-accent-primary mb-6 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                                <IconComponent name={service.icon} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-4">
                                {service.title}
                            </h3>
                            <p className="text-text-secondary mb-6">
                                {service.description}
                            </p>

                            {(() => {
                                let features = [];
                                try {
                                    features =
                                        typeof service.features === "string"
                                            ? JSON.parse(service.features)
                                            : service.features || [];
                                } catch (e) {
                                    features = [];
                                }

                                return (
                                    features.length > 0 && (
                                        <ul className="space-y-2">
                                            {features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center text-sm text-text-secondary"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                );
                            })()}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
