import { motion } from "framer-motion";
import { User, Download } from "lucide-react";

export default function About({ settings }) {
    const aboutData = settings?.about
        ? typeof settings.about === "string"
            ? JSON.parse(settings.about)
            : settings.about
        : {};

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={
                                        aboutData.image ||
                                        "https://ui-avatars.com/api/?name=About+Me&background=random"
                                    }
                                    alt="About Me"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-surface-base/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-border-subtle hidden md:block">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-accent-primary">
                                        {aboutData.years_experience || "5+"}
                                    </p>
                                    <p className="text-sm text-text-secondary">
                                        Years of
                                        <br />
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                {aboutData.title ||
                                    "Passionate Developer & Designer"}
                            </h3>
                            <div
                                className="text-text-secondary mb-8 prose prose-lg dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        aboutData.bio ||
                                        "<p>I am a passionate developer...</p>",
                                }}
                            />

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="text-sm text-text-secondary mb-1">
                                        Name
                                    </p>
                                    <p className="font-medium text-text-primary">
                                        {aboutData.name || "Tanbir Ahmed"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary mb-1">
                                        Email
                                    </p>
                                    <p className="font-medium text-text-primary">
                                        {aboutData.email ||
                                            "contact@example.com"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary mb-1">
                                        Location
                                    </p>
                                    <p className="font-medium text-text-primary">
                                        {aboutData.location ||
                                            "Dhaka, Bangladesh"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary mb-1">
                                        Availability
                                    </p>
                                    <p className="font-medium text-accent-secondary">
                                        Available for work
                                    </p>
                                </div>
                            </div>

                            {aboutData.resume && (
                                <a
                                    href={aboutData.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-surface-base/80 backdrop-blur-md border border-border-subtle text-text-primary rounded-lg hover:bg-surface-elevated transition-colors shadow-sm"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Resume
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
