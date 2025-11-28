import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import ImageUploader from "@/Components/ImageUploader";
import DatePicker from "@/Components/DatePicker";
import { formatDate } from "@/Utils/date";
import { ArrowLeft, X, Wand2, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Edit({ post }) {
    const {
        data,
        setData,
        post: postRequest,
        processing,
        errors,
    } = useForm({
        _method: "PUT",
        title: post.title || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        featured_image: post.featured_image || null,
        category: post.category || "",
        tags: post.tags || [],
        author: post.author || "",
        published_at: post.published_at ? post.published_at.split("T")[0] : "",
        read_time: post.read_time || "",
    });

    const [tagInput, setTagInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        if (!data.title) {
            alert("Please enter a Title first.");
            return;
        }

        setIsGenerating(true);
        try {
            const response = await axios.post(route("admin.posts.generate"), {
                title: data.title,
            });

            const generatedData = response.data.data;
            setData((prev) => ({
                ...prev,
                excerpt: generatedData.excerpt || prev.excerpt,
                content: generatedData.content || prev.content,
                category: generatedData.category || prev.category,
                tags: generatedData.tags || prev.tags,
                read_time: generatedData.read_time || prev.read_time,
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
        postRequest(route("admin.posts.update", post.id), {
            forceFormData: true,
        });
    };

    const addTag = () => {
        if (tagInput.trim()) {
            setData("tags", [...data.tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const removeTag = (index) => {
        setData(
            "tags",
            data.tags.filter((_, i) => i !== index)
        );
    };

    return (
        <AdminLayout>
            <Head title="Edit Post" />

            <div className="mb-6 flex justify-between items-end">
                <div>
                    <Link
                        href={route("admin.posts.index")}
                        className="flex items-center text-text-secondary hover:text-text-primary mb-4"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Posts
                    </Link>
                    <h1 className="text-2xl font-bold text-text-primary">
                        Edit Post
                    </h1>
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
                            Generate with AI
                        </>
                    )}
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-8xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
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
                            {errors.category && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.category}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Author
                            </label>
                            <input
                                type="text"
                                value={data.author}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.author && (
                                <div className="text-semantic-error text-sm mt-1">
                                    {errors.author}
                                </div>
                            )}
                        </div>

                        <div>
                            <DatePicker
                                label="Published Date"
                                selected={data.published_at}
                                onChange={(date) =>
                                    setData("published_at", date ? date.toISOString().split('T')[0] : "")
                                }
                                placeholder="Select published date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">
                                Read Time
                            </label>
                            <input
                                type="text"
                                value={data.read_time}
                                onChange={(e) =>
                                    setData("read_time", e.target.value)
                                }
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="e.g., 5 min read"
                            />
                        </div>
                    </div>

                    <div>
                        <ImageUploader
                            label="Featured Image"
                            image={data.featured_image}
                            onChange={(file) => setData("featured_image", file)}
                            error={errors.featured_image}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Excerpt
                        </label>
                        <textarea
                            value={data.excerpt}
                            onChange={(e) => setData("excerpt", e.target.value)}
                            rows="3"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                        {errors.excerpt && (
                            <div className="text-semantic-error text-sm mt-1">
                                {errors.excerpt}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Content (Markdown supported)
                        </label>
                        <textarea
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            rows="15"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary font-mono"
                        ></textarea>
                        {errors.content && (
                            <div className="text-semantic-error text-sm mt-1">
                                {errors.content}
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Tags
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    (e.preventDefault(), addTag())
                                }
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add tag..."
                            />
                            <Button
                                type="button"
                                onClick={addTag}
                                variant="secondary"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-primary/10 text-accent-primary"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(index)}
                                        className="ml-2 hover:text-semantic-error"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Update Post
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
