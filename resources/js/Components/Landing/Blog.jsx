import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Blog({ posts }) {
    if (!posts || posts.length === 0) return null;

    return (
        <section id="blog" className="py-20 bg-background-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-center md:text-left w-full md:w-auto mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Latest Articles</h2>
                        <div className="w-20 h-1 bg-accent-primary mx-auto md:mx-0 rounded-full" />
                    </div>
                    <Link 
                        href={route('posts.index')} 
                        className="hidden md:flex items-center text-accent-primary hover:text-accent-primary/80 transition-colors font-medium"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface-base rounded-xl overflow-hidden shadow-lg border border-border-subtle hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={post.image || "https://ui-avatars.com/api/?name=Blog+Post&background=random"} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-accent-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex items-center text-xs text-text-secondary mb-3 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {new Date(post.published_at).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {post.read_time || '5 min read'}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                                    <Link href={route('posts.show', post.slug)}>
                                        {post.title}
                                    </Link>
                                </h3>
                                
                                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <Link 
                                    href={route('posts.show', post.slug)} 
                                    className="inline-flex items-center text-accent-primary hover:text-accent-primary/80 transition-colors font-medium text-sm"
                                >
                                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link 
                        href={route('posts.index')} 
                        className="inline-flex items-center px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors"
                    >
                        Read All Articles <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
