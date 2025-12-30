import { Star, Quote } from "lucide-react";

export default function Testimonials({ testimonials }) {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Client Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-surface-base/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-border-subtle relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-accent-primary/20" />

                            <div className="flex items-center mb-6">
                                <img
                                    src={
                                        testimonial.image ||
                                        `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`
                                    }
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-text-primary">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-text-secondary">
                                        {testimonial.position} at{" "}
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < testimonial.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>

                            <p className="text-text-secondary text-sm italic">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
