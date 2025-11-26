import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Button from '@/Components/Button';
import { ArrowLeft } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        position: '',
        company: '',
        image: '',
        rating: 5,
        text: '',
        project: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.store'));
    };

    return (
        <AdminLayout>
            <Head title="Create Testimonial" />

            <div className="mb-6">
                <Link href={route('admin.testimonials.index')} className="flex items-center text-text-secondary hover:text-text-primary mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Testimonials
                </Link>
                <h1 className="text-2xl font-bold text-text-primary">Add New Testimonial</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Client Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.name && <div className="text-semantic-error text-sm mt-1">{errors.name}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Position</label>
                            <input
                                type="text"
                                value={data.position}
                                onChange={e => setData('position', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.position && <div className="text-semantic-error text-sm mt-1">{errors.position}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Company</label>
                            <input
                                type="text"
                                value={data.company}
                                onChange={e => setData('company', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Rating (1-5)</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={data.rating}
                                onChange={e => setData('rating', parseInt(e.target.value))}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.rating && <div className="text-semantic-error text-sm mt-1">{errors.rating}</div>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Client Image URL</label>
                        <input
                            type="text"
                            value={data.image}
                            onChange={e => setData('image', e.target.value)}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Testimonial Text</label>
                        <textarea
                            value={data.text}
                            onChange={e => setData('text', e.target.value)}
                            rows="4"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                        {errors.text && <div className="text-semantic-error text-sm mt-1">{errors.text}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Related Project (Optional)</label>
                        <input
                            type="text"
                            value={data.project}
                            onChange={e => setData('project', e.target.value)}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            placeholder="e.g., E-commerce Platform Redesign"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Create Testimonial
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
