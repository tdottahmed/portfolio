import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag, BookOpen } from 'lucide-react';

export default function Index({ posts }) {
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
        <MainLayout>
            <Head title="Blog" />

            <section className="relative py-20 sm:py-24 lg:py-32 bg-background-primary overflow-hidden min-h-screen">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 sm:mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-border-subtle mb-6"
                        >
                            <BookOpen className="w-4 h-4 text-accent-primary" />
                            <span className="text-accent-primary font-bold tracking-wider uppercase text-xs">
                                Blog
                            </span>
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Articles</span>
                        </h1>
                        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Insights, tutorials, and thoughts on web development, design, and technology.
                        </p>
                    </motion.div>

                    {/* Posts Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group bg-surface-base/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <Link href={route('posts.show', post.slug)} className="relative overflow-hidden aspect-[16/10] bg-surface-elevated block">
                                    <motion.img
                                        src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-base/90 backdrop-blur-md text-text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-border-subtle shadow-sm">
                                            <Tag className="w-3 h-3" />
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Read Time - Bottom Right */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="px-3 py-1.5 bg-surface-base/90 backdrop-blur-md text-text-secondary text-xs font-medium rounded-full border border-border-subtle shadow-sm">
                                            {post.read_time || '5 min read'}
                                        </span>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Meta Info */}
                                    <div className="flex items-center text-xs text-text-secondary mb-4 gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.published_at).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" />
                                            {post.read_time || '5 min read'}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight">
                                        <Link href={route('posts.show', post.slug)}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <Link
                                        href={route('posts.show', post.slug)}
                                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold text-sm group/link mt-auto"
                                    >
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
