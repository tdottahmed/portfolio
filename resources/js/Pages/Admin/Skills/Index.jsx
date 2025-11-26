import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '@/Components/Button';

export default function Index({ skills }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this skill?')) {
            destroy(route('admin.skills.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Skills" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Skills</h1>
                <Link href={route('admin.skills.create')}>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Skill
                    </Button>
                </Link>
            </div>

            <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-border-subtle">
                    <thead className="bg-surface-elevated">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Experience (Years)</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-surface-base divide-y divide-border-subtle">
                        {skills.map((skill) => (
                            <tr key={skill.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {/* Icon display could be added here if we have an icon library or image URL */}
                                        <div className="text-sm font-medium text-text-primary">{skill.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {skill.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    <div className="w-full bg-surface-elevated rounded-full h-2.5 max-w-[100px]">
                                        <div className="bg-accent-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                    <span className="text-xs mt-1 block">{skill.level}%</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                                    {skill.years_of_experience}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link href={route('admin.skills.edit', skill.id)} className="text-accent-primary hover:text-accent-primary/80">
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button onClick={() => handleDelete(skill.id)} className="text-semantic-error hover:text-semantic-error/80">
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
