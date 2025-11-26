import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Button from '@/Components/Button';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

export default function Edit({ project }) {
    const { data, setData, put, processing, errors } = useForm({
        title: project.title || '',
        subtitle: project.subtitle || '',
        category: project.category || '',
        description: project.description || '',
        long_description: project.long_description || '',
        thumbnail: null, // Initialize as null for file upload, current image is displayed separately
        images: project.images || [],
        technologies: project.technologies || [],
        features: project.features || [],
        achievements: project.achievements || [],
        links: project.links || { live: '', github: '', demo: '' },
        timeline: project.timeline || { start: '', end: '', duration: '' },
        role: project.role || '',
        team_size: project.team_size || '',
        status: project.status || 'completed',
        featured: project.featured || false
    });

    const [techInput, setTechInput] = useState('');
    const [featureInput, setFeatureInput] = useState('');
    const [achievementInput, setAchievementInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use POST with _method: 'put' for file uploads in Inertia
        post(route('admin.projects.update', project.id), {
            _method: 'put',
            forceFormData: true,
        });
    };

    const addTech = () => {
        if (techInput.trim()) {
            setData('technologies', [...data.technologies, techInput.trim()]);
            setTechInput('');
        }
    };

    const removeTech = (index) => {
        setData('technologies', data.technologies.filter((_, i) => i !== index));
    };

    const addFeature = () => {
        if (featureInput.trim()) {
            setData('features', [...data.features, featureInput.trim()]);
            setFeatureInput('');
        }
    };

    const removeFeature = (index) => {
        setData('features', data.features.filter((_, i) => i !== index));
    };

    const addAchievement = () => {
        if (achievementInput.trim()) {
            setData('achievements', [...data.achievements, achievementInput.trim()]);
            setAchievementInput('');
        }
    };

    const removeAchievement = (index) => {
        setData('achievements', data.achievements.filter((_, i) => i !== index));
    };

    return (
        <AdminLayout>
            <Head title="Edit Project" />

            <div className="mb-6">
                <Link href={route('admin.projects.index')} className="flex items-center text-text-secondary hover:text-text-primary mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-text-primary">Edit Project: {project.title}</h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
                {/* Basic Info */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">Basic Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.title && <div className="text-semantic-error text-sm mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Subtitle</label>
                            <input
                                type="text"
                                value={data.subtitle}
                                onChange={e => setData('subtitle', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Category</label>
                            <input
                                type="text"
                                value={data.category}
                                onChange={e => setData('category', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Status</label>
                            <select
                                value={data.status}
                                onChange={e => setData('status', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            >
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                                <option value="planned">Planned</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Short Description</label>
                        <textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            rows="3"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Long Description</label>
                        <textarea
                            value={data.long_description}
                            onChange={e => setData('long_description', e.target.value)}
                            rows="6"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Thumbnail</label>
                        {project.thumbnail && (
                            <div className="mb-2">
                                <img src={project.thumbnail} alt="Current Thumbnail" className="w-32 h-32 object-cover rounded-lg border border-border-subtle" />
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={e => setData('thumbnail', e.target.files[0])}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            accept="image/*"
                        />
                        {errors.thumbnail && <div className="text-semantic-error text-sm mt-1">{errors.thumbnail}</div>}
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={data.featured}
                            onChange={e => setData('featured', e.target.checked)}
                            className="w-4 h-4 text-accent-primary bg-surface-elevated border-border-subtle rounded focus:ring-accent-primary"
                        />
                        <label htmlFor="featured" className="ml-2 text-sm font-medium text-text-primary">Featured Project</label>
                    </div>
                </div>

                {/* Details */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">Project Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Role</label>
                            <input
                                type="text"
                                value={data.role}
                                onChange={e => setData('role', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Team Size</label>
                            <input
                                type="text"
                                value={data.team_size}
                                onChange={e => setData('team_size', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    {/* Technologies */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Technologies</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={techInput}
                                onChange={e => setTechInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTech())}
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add technology..."
                            />
                            <Button type="button" onClick={addTech} variant="secondary">Add</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-primary/10 text-accent-primary">
                                    {tech}
                                    <button type="button" onClick={() => removeTech(index)} className="ml-2 hover:text-semantic-error">
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Features</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={featureInput}
                                onChange={e => setFeatureInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add feature..."
                            />
                            <Button type="button" onClick={addFeature} variant="secondary">Add</Button>
                        </div>
                        <ul className="space-y-2">
                            {data.features.map((feature, index) => (
                                <li key={index} className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg">
                                    <span className="text-sm text-text-primary">{feature}</span>
                                    <button type="button" onClick={() => removeFeature(index)} className="text-text-secondary hover:text-semantic-error">
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Achievements</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={achievementInput}
                                onChange={e => setAchievementInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                                className="flex-1 bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Add achievement..."
                            />
                            <Button type="button" onClick={addAchievement} variant="secondary">Add</Button>
                        </div>
                        <ul className="space-y-2">
                            {data.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg">
                                    <span className="text-sm text-text-primary">{achievement}</span>
                                    <button type="button" onClick={() => removeAchievement(index)} className="text-text-secondary hover:text-semantic-error">
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Links & Timeline */}
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary">Links & Timeline</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Live URL</label>
                            <input
                                type="text"
                                value={data.links?.live || ''}
                                onChange={e => setData('links', { ...data.links, live: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">GitHub URL</label>
                            <input
                                type="text"
                                value={data.links?.github || ''}
                                onChange={e => setData('links', { ...data.links, github: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Demo URL</label>
                            <input
                                type="text"
                                value={data.links?.demo || ''}
                                onChange={e => setData('links', { ...data.links, demo: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Start Date</label>
                            <input
                                type="text"
                                value={data.timeline?.start || ''}
                                onChange={e => setData('timeline', { ...data.timeline, start: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="YYYY-MM"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">End Date</label>
                            <input
                                type="text"
                                value={data.timeline?.end || ''}
                                onChange={e => setData('timeline', { ...data.timeline, end: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="YYYY-MM"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Duration</label>
                            <input
                                type="text"
                                value={data.timeline?.duration || ''}
                                onChange={e => setData('timeline', { ...data.timeline, duration: e.target.value })}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Update Project
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
