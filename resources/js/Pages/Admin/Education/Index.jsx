import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '@/Components/Button';
import { formatDate } from '@/Utils/date';

export default function Index({ education }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this education entry?')) {
            destroy(route('admin.education.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Education" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Education</h1>
                <Link href={route('admin.education.create')}>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                    </Button>
                </Link>
            </div>

            <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-border-subtle">
                    <thead className="bg-surface-elevated">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Institution</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Degree</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">GPA</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-surface-base divide-y divide-border-subtle">
                        {education.map((edu) => (
                            <tr key={edu.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-text-primary">{edu.institution}</div>
                                    <div className="text-xs text-text-secondary">{edu.location}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {edu.degree} {edu.field && `in ${edu.field}`}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {formatDate(edu.start_date, { year: 'numeric', month: 'short' })} - {edu.end_date ? formatDate(edu.end_date, { year: 'numeric', month: 'short' }) : 'Present'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {edu.gpa} {edu.max_gpa && `/ ${edu.max_gpa}`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link href={route('admin.education.edit', edu.id)} className="text-accent-primary hover:text-accent-primary/80">
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button onClick={() => handleDelete(edu.id)} className="text-semantic-error hover:text-semantic-error/80">
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
