import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '@/Components/Button';

export default function Index({ experiences }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this experience?')) {
            destroy(route('admin.experiences.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Experience" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Experience</h1>
                <Link href={route('admin.experiences.create')}>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                    </Button>
                </Link>
            </div>

            <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-border-subtle">
                    <thead className="bg-surface-elevated">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Position</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-surface-base divide-y divide-border-subtle">
                        {experiences.map((experience) => (
                            <tr key={experience.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-text-primary">{experience.company}</div>
                                    <div className="text-xs text-text-secondary">{experience.location}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {experience.position}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {experience.start_date} - {experience.current ? 'Present' : experience.end_date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {experience.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link href={route('admin.experiences.edit', experience.id)} className="text-accent-primary hover:text-accent-primary/80">
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button onClick={() => handleDelete(experience.id)} className="text-semantic-error hover:text-semantic-error/80">
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
