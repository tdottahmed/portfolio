import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import { ArrowLeft } from "lucide-react";

export default function Edit({ skill }) {
    const { data, setData, put, processing, errors } = useForm({
        name: skill.name || "",
        category: skill.category || "",
        level: skill.level || 0,
        years_of_experience: skill.years_of_experience || 0,
        icon: skill.icon || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.skills.update", skill.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Skill" />

            <div className="mb-6">
                <Link
                    href={route("admin.skills.index")}
                    className="flex items-center text-text-secondary hover:text-text-primary mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Skills
                </Link>
                <h1 className="text-2xl font-bold text-text-primary">
                    Edit Skill: {skill.name}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-8xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        />
                        {errors.name && (
                            <div className="text-semantic-error text-sm mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            placeholder="e.g., Programming Languages, Frameworks"
                        />
                        {errors.category && (
                            <div className="text-semantic-error text-sm mt-1">
                                {errors.category}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Level (0-100)
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={data.level}
                                onChange={(e) =>
                                    setData("level", parseInt(e.target.value))
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.level && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.level}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Years of Experience
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={data.years_of_experience}
                                onChange={(e) =>
                                    setData(
                                        "years_of_experience",
                                        parseInt(e.target.value)
                                    )
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.years_of_experience && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.years_of_experience}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Icon (Lucide Icon Name)
                        </label>
                        <input
                            type="text"
                            value={data.icon}
                            onChange={(e) => setData("icon", e.target.value)}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            placeholder="e.g., Code2, Database, Globe"
                        />
                        {errors.icon && (
                            <div className="text-semantic-error text-sm mt-1">
                                {errors.icon}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Update Skill
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
