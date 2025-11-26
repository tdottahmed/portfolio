import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Button from '@/Components/Button';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        icon: '',
        description: '',
        features: []
    });

    const [featureInput, setFeatureInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.services.store'));
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

    return (
        <AdminLayout>
            <Head title="Create Service" />

            <div className="mb-6">
                <Link href={route('admin.services.index')} className="flex items-center text-text-secondary hover:text-text-primary mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Services
                </Link>
                <h1 className="text-2xl font-bold text-text-primary">Create New Service</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
                <div className="bg-surface-base border border-border-subtle rounded-lg p-6 space-y-6">
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
                        <label className="block text-sm font-medium text-text-secondary mb-1">Icon (Lucide Icon Name)</label>
                        <input
                            type="text"
                            value={data.icon}
                            onChange={e => setData('icon', e.target.value)}
                            className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary"
                            placeholder="e.g., Code, Smartphone, ShoppingCart"
                        />
                        {errors.icon && <div className="text-semantic-error text-sm mt-1">{errors.icon}</div>}
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
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Create Service
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
