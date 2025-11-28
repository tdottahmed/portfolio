import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import ImageUploader from '@/Components/ImageUploader';
import { useState } from 'react';

export default function Edit({ settings }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        hero: settings.hero || {
            title: '',
            subtitle: '',
            description: '',
            cta_text: '',
            cta_link: '',
            image: ''
        },
        about: settings.about || {
            title: '',
            description: '',
            image: '',
            resume_link: ''
        },
        seo: settings.seo || {
            meta_title: '',
            meta_description: '',
            meta_keywords: ''
        },
        social_links: settings.social_links || {
            github: '',
            linkedin: '',
            twitter: '',
            instagram: ''
        },
        contact_info: settings.contact_info || {
            email: '',
            phone: '',
            address: ''
        }
    });

    const [activeTab, setActiveTab] = useState('hero');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            forceFormData: true,
        });
    };

    const tabs = [
        { id: 'hero', label: 'Hero Section' },
        { id: 'about', label: 'About Section' },
        { id: 'seo', label: 'SEO' },
        { id: 'social_links', label: 'Social Links' },
        { id: 'contact_info', label: 'Contact Info' }
    ];

    return (
        <AdminLayout>
            <Head title="Settings" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-text-primary">Site Settings</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-surface-base border border-border-subtle rounded-lg overflow-hidden">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-accent-primary/10 text-accent-primary border-l-4 border-accent-primary'
                                        : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary border-l-4 border-transparent'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
                        
                        {/* Hero Section */}
                        {activeTab === 'hero' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-text-primary">Hero Section</h2>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={data.hero.title}
                                        onChange={e => setData('hero', { ...data.hero, title: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Subtitle</label>
                                    <input
                                        type="text"
                                        value={data.hero.subtitle}
                                        onChange={e => setData('hero', { ...data.hero, subtitle: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                                    <textarea
                                        value={data.hero.description}
                                        onChange={e => setData('hero', { ...data.hero, description: e.target.value })}
                                        rows="3"
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-1">CTA Text</label>
                                        <input
                                            type="text"
                                            value={data.hero.cta_text}
                                            onChange={e => setData('hero', { ...data.hero, cta_text: e.target.value })}
                                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-1">CTA Link</label>
                                        <input
                                            type="text"
                                            value={data.hero.cta_link}
                                            onChange={e => setData('hero', { ...data.hero, cta_link: e.target.value })}
                                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <ImageUploader
                                        label="Hero Image"
                                        image={data.hero.image}
                                        onChange={(file) => setData('hero', { ...data.hero, image: file })}
                                    />
                                </div>
                            </div>
                        )}

                        {/* About Section */}
                        {activeTab === 'about' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-text-primary">About Section</h2>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={data.about.title}
                                        onChange={e => setData('about', { ...data.about, title: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                                    <textarea
                                        value={data.about.description}
                                        onChange={e => setData('about', { ...data.about, description: e.target.value })}
                                        rows="6"
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    ></textarea>
                                </div>
                                <div>
                                    <ImageUploader
                                        label="Profile Image"
                                        image={data.about.image}
                                        onChange={(file) => setData('about', { ...data.about, image: file })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Resume Link</label>
                                    <input
                                        type="text"
                                        value={data.about.resume_link}
                                        onChange={e => setData('about', { ...data.about, resume_link: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                            </div>
                        )}

                        {/* SEO */}
                        {activeTab === 'seo' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-text-primary">SEO Settings</h2>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Meta Title</label>
                                    <input
                                        type="text"
                                        value={data.seo.meta_title}
                                        onChange={e => setData('seo', { ...data.seo, meta_title: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Meta Description</label>
                                    <textarea
                                        value={data.seo.meta_description}
                                        onChange={e => setData('seo', { ...data.seo, meta_description: e.target.value })}
                                        rows="3"
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Meta Keywords</label>
                                    <input
                                        type="text"
                                        value={data.seo.meta_keywords}
                                        onChange={e => setData('seo', { ...data.seo, meta_keywords: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                        placeholder="Comma separated keywords"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Social Links */}
                        {activeTab === 'social_links' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-text-primary">Social Links</h2>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">GitHub</label>
                                    <input
                                        type="text"
                                        value={data.social_links.github}
                                        onChange={e => setData('social_links', { ...data.social_links, github: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">LinkedIn</label>
                                    <input
                                        type="text"
                                        value={data.social_links.linkedin}
                                        onChange={e => setData('social_links', { ...data.social_links, linkedin: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Twitter / X</label>
                                    <input
                                        type="text"
                                        value={data.social_links.twitter}
                                        onChange={e => setData('social_links', { ...data.social_links, twitter: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Instagram</label>
                                    <input
                                        type="text"
                                        value={data.social_links.instagram}
                                        onChange={e => setData('social_links', { ...data.social_links, instagram: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Contact Info */}
                        {activeTab === 'contact_info' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-text-primary">Contact Information</h2>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={data.contact_info.email}
                                        onChange={e => setData('contact_info', { ...data.contact_info, email: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={data.contact_info.phone}
                                        onChange={e => setData('contact_info', { ...data.contact_info, phone: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Address</label>
                                    <input
                                        type="text"
                                        value={data.contact_info.address}
                                        onChange={e => setData('contact_info', { ...data.contact_info, address: e.target.value })}
                                        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end pt-6 border-t border-border-subtle">
                            <Button type="submit" disabled={processing}>
                                Save Settings
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
