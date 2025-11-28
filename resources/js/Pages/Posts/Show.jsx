import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';

export default function Show({ post }) {
    let postTags = [];
    try {
        postTags = typeof post.tags === 'string' ? JSON.parse(post.tags) : (post.tags || []);
    } catch (e) {
        postTags = [];
    }

    return (
        <MainLayout>
            <Head title={post.title} />

            <article className="min-h-screen bg-background-primary pt-24 pb-20">
                {/* Back Button */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 max-w-4xl">
                    <Link
                        href={route('posts.index')}
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                            <span className="px-3 py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-bold rounded-full uppercase tracking-wider border border-accent-primary/20">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap justify-center items-center gap-6 text-text-secondary text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.published_at).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.read_time || '5 min read'}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border-subtle mb-12 aspect-[16/9] bg-surface-elevated"
                    >
                        <img
                            src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Tags */}
                    {postTags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-border-subtle">
                            <div className="flex flex-wrap gap-2">
                                {postTags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-elevated text-text-secondary text-sm font-medium rounded-full border border-border-subtle"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </MainLayout>
    );
}
