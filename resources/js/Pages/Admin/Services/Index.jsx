import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '@/Components/Button';

export default function Index({ services }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this service?')) {
            destroy(route('admin.services.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Services" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Services</h1>
                <Link href={route('admin.services.create')}>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Service
                    </Button>
                </Link>
            </div>

            <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-border-subtle">
                    <thead className="bg-surface-elevated">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Features</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-surface-base divide-y divide-border-subtle">
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="text-sm font-medium text-text-primary">{service.title}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-text-secondary max-w-xs truncate">
                                    {service.description}
                                </td>
                                <td className="px-6 py-4 text-sm text-text-secondary">
                                    {service.features ? service.features.length : 0} features
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link href={route('admin.services.edit', service.id)} className="text-accent-primary hover:text-accent-primary/80">
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button onClick={() => handleDelete(service.id)} className="text-semantic-error hover:text-semantic-error/80">
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
