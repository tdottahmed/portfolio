import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import ImageUploader from "@/Components/ImageUploader";
import MultiImageUploader from "@/Components/MultiImageUploader";
import DatePicker from "@/Components/DatePicker";
import { formatDate } from "@/Utils/date";
import { ArrowLeft, X, Wand2, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        subtitle: "",
        category: "",
        description: "",
        long_description: "",
        thumbnail: null,
        gallery_image: null,
        images: [],
        technologies: [],
        features: [],
        achievements: [],
        links: { live: "", github: "", demo: "" },
        timeline: { start: "", end: "", duration: "" },
        role: "",
        team_size: "",
        status: "completed",
        featured: false,
    });

    const [techInput, setTechInput] = useState("");
    const [featureInput, setFeatureInput] = useState("");
    const [achievementInput, setAchievementInput] = useState("");

    const [isGenerating, setIsGenerating] = useState(false);
    const [generationImages, setGenerationImages] = useState([]);

    const handleGenerate = async () => {
        if (!data.title) {
            alert("Please enter a project title first.");
            return;
        }

        setIsGenerating(true);
        const formData = new FormData();
        formData.append("title", data.title);
        generationImages.forEach((image) => {
            formData.append("images[]", image);
        });

        try {
            const response = await axios.post(
                route("admin.projects.generate"),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const generatedData = response.data.data;

            setData((prevData) => ({
                ...prevData,
                subtitle: generatedData.subtitle || prevData.subtitle,
                description: generatedData.description || prevData.description,
                long_description:
                    generatedData.long_description || prevData.long_description,
                category: generatedData.category || prevData.category,
                role: generatedData.role || prevData.role,
                team_size: generatedData.team_size || prevData.team_size,
                technologies:
                    generatedData.technologies || prevData.technologies,
                features: generatedData.features || prevData.features,
            }));

            // Clear generation images after success
            setGenerationImages([]);
        } catch (error) {
            console.error("Generation failed:", error);
            alert("Failed to generate project details. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.projects.store"), {
            forceFormData: true,
        });
    };

    const addTech = () => {
        if (techInput.trim()) {
            setData("technologies", [...data.technologies, techInput.trim()]);
            setTechInput("");
        }
    };

    const removeTech = (index) => {
        setData(
            "technologies",
            data.technologies.filter((_, i) => i !== index)
        );
    };

    const addFeature = () => {
        if (featureInput.trim()) {
            setData("features", [...data.features, featureInput.trim()]);
            setFeatureInput("");
        }
    };

    const removeFeature = (index) => {
        setData(
            "features",
            data.features.filter((_, i) => i !== index)
        );
    };

    const addAchievement = () => {
        if (achievementInput.trim()) {
            setData("achievements", [
                ...data.achievements,
                achievementInput.trim(),
            ]);
            setAchievementInput("");
        }
    };

    const removeAchievement = (index) => {
        setData(
            "achievements",
            data.achievements.filter((_, i) => i !== index)
        );
    };

    return (
        <AdminLayout>
            <Head title="Create Project" />

            <div className="mb-6">
                <Link
                    href={route("admin.projects.index")}
                    className="flex items-center text-text-secondary hover:text-text-primary mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
                <h1 className="text-2xl font-bold text-text-primary">
                    Create New Project
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-8xl">
                {/* AI Generation Section */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                            <Wand2 className="w-5 h-5 text-accent-primary" />
                            AI Generation
                        </h2>
                    </div>
                    <div className="bg-surface-elevated p-4 rounded-lg border border-border-subtle">
                        <p className="text-sm text-text-secondary mb-4">
                            Enter a title below, upload screenshots here, and
                            let AI generate the project details for you.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-medium text-text-secondary mb-1">
                                    Screenshots for Context (Optional)
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) =>
                                        setGenerationImages(
                                            Array.from(e.target.files)
                                        )
                                    }
                                    className="block w-full text-sm text-text-secondary
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-accent-primary/10 file:text-accent-primary
                                    hover:file:bg-accent-primary/20"
                                />
                                {generationImages.length > 0 && (
                                    <p className="text-xs text-text-secondary mt-1">
                                        {generationImages.length} images
                                        selected
                                    </p>
                                )}
                            </div>
                            <Button
                                type="button"
                                onClick={handleGenerate}
                                disabled={isGenerating || !data.title}
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
                                        Generate Details
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Basic Info */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Basic Information
                    </h2>

                    {/* Image Generation Section */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.title && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.title}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Subtitle
                            </label>
                            <input
                                type="text"
                                value={data.subtitle}
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
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
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Status
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            >
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                                <option value="planned">Planned</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Short Description
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            rows="3"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Long Description
                        </label>
                        <textarea
                            value={data.long_description}
                            onChange={(e) =>
                                setData("long_description", e.target.value)
                            }
                            rows="6"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <ImageUploader
                                label="Thumbnail"
                                image={data.thumbnail}
                                onChange={(file) => setData("thumbnail", file)}
                                error={errors.thumbnail}
                            />
                        </div>
                        <div>
                            <ImageUploader
                                label="Gallery Cover Image"
                                image={data.gallery_image}
                                onChange={(file) => setData("gallery_image", file)}
                                error={errors.gallery_image}
                            />
                        </div>
                    </div>

                    <div>
                        <MultiImageUploader
                            label="Project Gallery Images"
                            images={data.images}
                            onChange={(files) => setData("images", files)}
                            error={errors.images}
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={data.featured}
                            onChange={(e) =>
                                setData("featured", e.target.checked)
                            }
                            className="w-4 h-4 text-accent-primary bg-surface-elevated border-border-subtle rounded focus:ring-accent-primary"
                        />
                        <label
                            htmlFor="featured"
                            className="ml-2 text-sm font-medium text-text-primary"
                        >
                            Featured Project
                        </label>
                    </div>
                </div>

                {/* Details */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Project Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Role
                            </label>
                            <input
                                type="text"
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Team Size
                            </label>
                            <input
                                type="text"
                                value={data.team_size}
                                onChange={(e) =>
                                    setData("team_size", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    {/* Technologies */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Technologies
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={techInput}
                                onChange={(e) => setTechInput(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addTech())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add technology..."
                            />
                            <Button
                                type="button"
                                onClick={addTech}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-primary/10 text-accent-primary"
                                >
                                    {tech}
                                    <button
                                        type="button"
                                        onClick={() => removeTech(index)}
                                        className="ml-2 hover:text-semantic-error"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Features
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={featureInput}
                                onChange={(e) =>
                                    setFeatureInput(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addFeature())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add feature..."
                            />
                            <Button
                                type="button"
                                onClick={addFeature}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <ul className="space-y-2">
                            {data.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg"
                                >
                                    <span className="text-sm text-text-primary">
                                        {feature}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => removeFeature(index)}
                                        className="text-text-secondary hover:text-semantic-error"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Achievements
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={achievementInput}
                                onChange={(e) =>
                                    setAchievementInput(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addAchievement())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add achievement..."
                            />
                            <Button
                                type="button"
                                onClick={addAchievement}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <ul className="space-y-2">
                            {data.achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg"
                                >
                                    <span className="text-sm text-text-primary">
                                        {achievement}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => removeAchievement(index)}
                                        className="text-text-secondary hover:text-semantic-error"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Links & Timeline */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Links & Timeline
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Live URL
                            </label>
                            <input
                                type="text"
                                value={data.links.live}
                                onChange={(e) =>
                                    setData("links", {
                                        ...data.links,
                                        live: e.target.value,
                                    })
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                GitHub URL
                            </label>
                            <input
                                type="text"
                                value={data.links.github}
                                onChange={(e) =>
                                    setData("links", {
                                        ...data.links,
                                        github: e.target.value,
                                    })
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Demo URL
                            </label>
                            <input
                                type="text"
                                value={data.links.demo}
                                onChange={(e) =>
                                    setData("links", {
                                        ...data.links,
                                        demo: e.target.value,
                                    })
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <DatePicker
                                label="Start Date"
                                selected={data.timeline.start}
                                onChange={(date) =>
                                    setData("timeline", {
                                        ...data.timeline,
                                        start: date ? formatDate(date, { year: 'numeric', month: '2-digit' }).replace('/', '-') : "", // Format as YYYY-MM or similar if needed, but DatePicker returns Date object. Let's store as YYYY-MM for consistency with previous text input or full date?
                                        // Previous input was text placeholder="YYYY-MM".
                                        // Let's store as YYYY-MM-DD or YYYY-MM.
                                        // If we use YYYY-MM, DatePicker might need showMonthYearPicker.
                                        // Let's stick to full date YYYY-MM-DD for better data, or just YYYY-MM if strictly required.
                                        // The placeholder said YYYY-MM. Let's try to keep it simple first.
                                        // Actually, let's use full date YYYY-MM-DD for standard.
                                        start: date ? date.toISOString().split('T')[0] : "",
                                    })
                                }
                                placeholder="Select start date"
                            />
                        </div>
                        <div>
                            <DatePicker
                                label="End Date"
                                selected={data.timeline.end}
                                onChange={(date) =>
                                    setData("timeline", {
                                        ...data.timeline,
                                        end: date ? date.toISOString().split('T')[0] : "",
                                    })
                                }
                                placeholder="Select end date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Duration
                            </label>
                            <input
                                type="text"
                                value={data.timeline.duration}
                                onChange={(e) =>
                                    setData("timeline", {
                                        ...data.timeline,
                                        duration: e.target.value,
                                    })
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Create Project
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
