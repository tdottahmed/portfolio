import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag, BookOpen, Sparkles } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { formatDate } from "@/Utils/date";

export default function Blog({ posts }) {
    // Dummy data fallback with placeholder images
    const displayPosts = posts && posts.length > 0 ? posts : [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2024",
            slug: "future-web-dev-2024",
            excerpt: "Explore the emerging technologies and methodologies that are shaping the future of the web, from AI-driven development to edge computing.",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
            category: "Technology",
            published_at: "2023-11-15",
            read_time: "5 min read"
        },
        {
            id: 2,
            title: "Mastering React Hooks: A Comprehensive Guide",
            slug: "mastering-react-hooks",
            excerpt: "Dive deep into React Hooks and learn how to write cleaner, more efficient components with practical examples and best practices.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
            category: "Development",
            published_at: "2023-10-28",
            read_time: "8 min read"
        },
        {
            id: 3,
            title: "Designing for Accessibility: Why It Matters",
            slug: "designing-for-accessibility",
            excerpt: "Learn why accessibility is crucial for modern web applications and how to implement inclusive design patterns in your projects.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=800&auto=format&fit=crop",
            category: "Design",
            published_at: "2023-09-12",
            read_time: "6 min read"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="blog" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-12 sm:mb-16"
                >
                    <div className="text-center sm:text-left w-full sm:w-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-4"
                        >
                            <BookOpen className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
                                From the Blog
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-4"
                        >
                            Latest Articles
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-text-secondary text-base sm:text-lg mt-4 max-w-2xl"
                        >
                            Insights, tutorials, and thoughts on web development
                        </motion.p>
                    </div>
                    <Link
                        href={route('posts.index')}
                        className="hidden sm:flex items-center px-6 py-3 rounded-full border border-border-subtle hover:border-accent-primary/50 bg-surface-elevated/50 backdrop-blur-sm hover:bg-surface-elevated transition-all duration-300 font-medium text-text-primary group"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Blog Posts Grid - Mobile First */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {displayPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group bg-surface-base/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <Link href={route('posts.show', post.slug)} className="relative overflow-hidden aspect-[16/10] bg-surface-elevated block">
                                <motion.img
                                    src={
                                        post.featured_image
                                            ? post.featured_image.startsWith("http")
                                                ? post.featured_image
                                                : `${post.featured_image}`
                                            : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
                                    }
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-base/90 backdrop-blur-md text-text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-border-subtle shadow-sm"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {post.category}
                                    </motion.span>
                                </div>

                                {/* Read Time - Bottom Right */}
                                <div className="absolute bottom-4 right-4">
                                    <span className="px-3 py-1.5 bg-surface-base/90 backdrop-blur-md text-text-secondary text-xs font-medium rounded-full border border-border-subtle shadow-sm">
                                        {post.read_time || '5 min read'}
                                    </span>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                {/* Meta Info */}
                                <div className="flex items-center text-xs text-text-secondary mb-4 gap-4">

                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {formatDate(post.published_at, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {post.read_time || '5 min read'}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight">
                                    <Link href={route('posts.show', post.slug)}>
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-text-secondary text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link
                                    href={route('posts.show', post.slug)}
                                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold text-sm sm:text-base group/link mt-auto"
                                >
                                    <span>Read More</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center sm:hidden"
                >
                    <Link
                        href={route('posts.index')}
                        className="inline-flex items-center px-8 py-4 bg-accent-primary text-white rounded-full hover:bg-accent-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-xl hover:shadow-accent-primary/40"
                    >
                        Read All Articles <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
