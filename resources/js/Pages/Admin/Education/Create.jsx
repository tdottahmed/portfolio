import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import DatePicker from "@/Components/DatePicker";
import { formatDate } from "@/Utils/date";
import { ArrowLeft, X, Wand2, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        institution: "",
        degree: "",
        field: "",
        location: "",
        start_date: "",
        end_date: "",
        gpa: "",
        max_gpa: "",
        description: "",
        relevant_coursework: [],
        projects: [],
    });

    const [courseworkInput, setCourseworkInput] = useState("");
    const [projectInput, setProjectInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        if (!data.institution || !data.degree || !data.field) {
            alert("Please enter Institution, Degree, and Field first.");
            return;
        }

        setIsGenerating(true);
        try {
            const response = await axios.post(
                route("admin.education.generate"),
                {
                    institution: data.institution,
                    degree: data.degree,
                    field: data.field,
                }
            );

            const generatedData = response.data.data;
            setData((prev) => ({
                ...prev,
                description: generatedData.description || prev.description,
                relevant_coursework:
                    generatedData.relevant_coursework ||
                    prev.relevant_coursework,
                projects: generatedData.projects || prev.projects,
            }));
        } catch (error) {
            console.error("Generation failed:", error);
            alert("Failed to generate details. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.education.store"));
    };

    const addCoursework = () => {
        if (courseworkInput.trim()) {
            setData("relevant_coursework", [
                ...data.relevant_coursework,
                courseworkInput.trim(),
            ]);
            setCourseworkInput("");
        }
    };

    const removeCoursework = (index) => {
        setData(
            "relevant_coursework",
            data.relevant_coursework.filter((_, i) => i !== index)
        );
    };

    const addProject = () => {
        if (projectInput.trim()) {
            setData("projects", [...data.projects, projectInput.trim()]);
            setProjectInput("");
        }
    };

    const removeProject = (index) => {
        setData(
            "projects",
            data.projects.filter((_, i) => i !== index)
        );
    };

    return (
        <AdminLayout>
            <Head title="Create Education" />

            <div className="mb-6 flex justify-between items-end">
                <div>
                    <Link
                        href={route("admin.education.index")}
                        className="flex items-center text-text-secondary hover:text-text-primary mb-4"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Education
                    </Link>
                    <h1 className="text-2xl font-bold text-text-primary">
                        Add New Education
                    </h1>
                </div>
                <Button
                    type="button"
                    onClick={handleGenerate}
                    disabled={
                        isGenerating ||
                        !data.institution ||
                        !data.degree ||
                        !data.field
                    }
                    className="whitespace-nowrap"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Wand2 className="w-4 h-4 mr-2" />
                            Generate with AI
                        </>
                    )}
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-8xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Institution
                            </label>
                            <input
                                type="text"
                                value={data.institution}
                                onChange={(e) =>
                                    setData("institution", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.institution && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.institution}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Degree
                            </label>
                            <input
                                type="text"
                                value={data.degree}
                                onChange={(e) =>
                                    setData("degree", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.degree && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.degree}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Field of Study
                            </label>
                            <input
                                type="text"
                                value={data.field}
                                onChange={(e) =>
                                    setData("field", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <DatePicker
                                label="Start Date"
                                selected={data.start_date}
                                onChange={(date) =>
                                    setData("start_date", date ? date.toISOString().split('T')[0] : "")
                                }
                                placeholder="Select start date"
                            />
                        </div>
                        <div>
                            <DatePicker
                                label="End Date"
                                selected={data.end_date}
                                onChange={(date) =>
                                    setData("end_date", date ? date.toISOString().split('T')[0] : "")
                                }
                                placeholder="Select end date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                GPA
                            </label>
                            <input
                                type="text"
                                value={data.gpa}
                                onChange={(e) => setData("gpa", e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Max GPA
                            </label>
                            <input
                                type="text"
                                value={data.max_gpa}
                                onChange={(e) =>
                                    setData("max_gpa", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Description
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            rows="4"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Relevant Coursework
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={courseworkInput}
                                onChange={(e) =>
                                    setCourseworkInput(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addCoursework())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add coursework..."
                            />
                            <Button
                                type="button"
                                onClick={addCoursework}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.relevant_coursework.map((course, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-primary/10 text-accent-primary"
                                >
                                    {course}
                                    <button
                                        type="button"
                                        onClick={() => removeCoursework(index)}
                                        className="ml-2 hover:text-semantic-error"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Academic Projects
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={projectInput}
                                onChange={(e) =>
                                    setProjectInput(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addProject())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add project..."
                            />
                            <Button
                                type="button"
                                onClick={addProject}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <ul className="space-y-2">
                            {data.projects.map((project, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg"
                                >
                                    <span className="text-sm text-text-primary">
                                        {typeof project === 'object' ? project.name : project}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => removeProject(index)}
                                        className="text-text-secondary hover:text-semantic-error"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Create Education
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
