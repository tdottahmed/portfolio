import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Button from '@/Components/Button';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        company: '',
        position: '',
        type: '',
        location: '',
        start_date: '',
        end_date: '',
        current: false,
        description: '',
        achievements: [],
        technologies: [],
        highlights: []
    });

    const [achievementInput, setAchievementInput] = useState('');
    const [techInput, setTechInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.experiences.store'));
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

    const addTech = () => {
        if (techInput.trim()) {
            setData('technologies', [...data.technologies, techInput.trim()]);
            setTechInput('');
        }
    };

    const removeTech = (index) => {
        setData('technologies', data.technologies.filter((_, i) => i !== index));
    };

    return (
        <AdminLayout>
            <Head title="Create Experience" />

            <div className="mb-6">
                <Link href={route('admin.experiences.index')} className="flex items-center text-text-secondary hover:text-text-primary mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Experience
                </Link>
                <h1 className="text-2xl font-bold text-text-primary">Add New Experience</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Company</label>
                            <input
                                type="text"
                                value={data.company}
                                onChange={e => setData('company', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.company && <div className="text-semantic-error text-sm mt-1">{errors.company}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Position</label>
                            <input
                                type="text"
                                value={data.position}
                                onChange={e => setData('position', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                            {errors.position && <div className="text-semantic-error text-sm mt-1">{errors.position}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Type</label>
                            <input
                                type="text"
                                value={data.type}
                                onChange={e => setData('type', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                placeholder="Full-time, Part-time, Contract"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Location</label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={e => setData('location', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Start Date</label>
                            <input
                                type="date"
                                value={data.start_date}
                                onChange={e => setData('start_date', e.target.value)}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">End Date</label>
                            <input
                                type="date"
                                value={data.end_date}
                                onChange={e => setData('end_date', e.target.value)}
                                disabled={data.current}
                                className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary disabled:opacity-50"
                            />
                        </div>
                        <div className="flex items-center pt-6">
                            <input
                                type="checkbox"
                                id="current"
                                checked={data.current}
                                onChange={e => setData('current', e.target.checked)}
                                className="w-4 h-4 text-accent-primary bg-surface-elevated border-border-subtle rounded focus:ring-accent-primary"
                            />
                            <label htmlFor="current" className="ml-2 text-sm font-medium text-text-primary">I currently work here</label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                        <textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            rows="4"
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                        ></textarea>
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
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Create Experience
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
