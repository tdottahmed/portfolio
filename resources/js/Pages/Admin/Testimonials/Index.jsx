import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import Button from '@/Components/Button';

export default function Index({ testimonials }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            destroy(route('admin.testimonials.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Testimonials" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Testimonials</h1>
                <Link href={route('admin.testimonials.create')}>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Testimonial
                    </Button>
                </Link>
            </div>

            <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-border-subtle">
                    <thead className="bg-surface-elevated">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Client</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Rating</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Text</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-surface-base divide-y divide-border-subtle">
                        {testimonials.map((testimonial) => (
                            <tr key={testimonial.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {testimonial.image && (
                                            <img className="h-10 w-10 rounded-full object-cover mr-3" src={testimonial.image} alt="" />
                                        )}
                                        <div>
                                            <div className="text-sm font-medium text-text-primary">{testimonial.name}</div>
                                            <div className="text-xs text-text-secondary">{testimonial.position}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {testimonial.company}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                        <span>{testimonial.rating}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-text-secondary max-w-xs truncate">
                                    {testimonial.text}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link href={route('admin.testimonials.edit', testimonial.id)} className="text-accent-primary hover:text-accent-primary/80">
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button onClick={() => handleDelete(testimonial.id)} className="text-semantic-error hover:text-semantic-error/80">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
