import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Blog({ posts }) {
    // Dummy data fallback
    const displayPosts = posts && posts.length > 0 ? posts : [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2024",
            slug: "future-web-dev-2024",
            excerpt: "Explore the emerging technologies and methodologies that are shaping the future of the web, from AI-driven development to edge computing.",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
            category: "Technology",
            published_at: "2023-11-15",
            read_time: "5 min read"
        },
        {
            id: 2,
            title: "Mastering React Hooks: A Comprehensive Guide",
            slug: "mastering-react-hooks",
            excerpt: "Dive deep into React Hooks and learn how to write cleaner, more efficient components with practical examples and best practices.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
            category: "Development",
            published_at: "2023-10-28",
            read_time: "8 min read"
        },
        {
            id: 3,
            title: "Designing for Accessibility: Why It Matters",
            slug: "designing-for-accessibility",
            excerpt: "Learn why accessibility is crucial for modern web applications and how to implement inclusive design patterns in your projects.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop",
            category: "Design",
            published_at: "2023-09-12",
            read_time: "6 min read"
        }
    ];

    return (
        <section id="blog" className="py-24 bg-bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-primary font-semibold tracking-wider uppercase text-sm"
                        >
                            From the Blog
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-text-primary mt-2"
                        >
                            Latest Articles
                        </motion.h2>
                    </div>
                    <Link 
                        href={route('posts.index')} 
                        className="hidden md:flex items-center px-6 py-3 rounded-full border border-border-subtle hover:bg-surface-elevated transition-colors font-medium text-text-primary group"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface-base rounded-2xl overflow-hidden shadow-lg border border-border-subtle hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img 
                                    src={post.image || "https://ui-avatars.com/api/?name=Blog+Post&background=random"} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-surface-base/90 backdrop-blur-sm text-text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-border-subtle shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-text-secondary mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1.5" />
                                        {new Date(post.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1.5" />
                                        {post.read_time || '5 min read'}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight">
                                    <Link href={route('posts.show', post.slug)}>
                                        {post.title}
                                    </Link>
                                </h3>
                                
                                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>
                                
                                <Link 
                                    href={route('posts.show', post.slug)} 
                                    className="inline-flex items-center text-accent-primary hover:text-accent-primary/80 transition-colors font-medium text-sm mt-auto group/link"
                                >
                                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link 
                        href={route('posts.index')} 
                        className="inline-flex items-center px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-colors font-medium shadow-lg shadow-accent-primary/25"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
