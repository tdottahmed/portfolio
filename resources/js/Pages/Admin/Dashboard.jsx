import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import Card from '@/Components/Card';

export default function Dashboard({ auth }) {
    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
                <p className="text-text-secondary">Welcome back, {auth.user.name}!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-medium text-text-secondary">Total Projects</h3>
                    <p className="text-3xl font-bold text-accent-primary mt-2">12</p>
                </Card>
                <Card className="p-6">
                    <h3 className="text-lg font-medium text-text-secondary">Total Skills</h3>
                    <p className="text-3xl font-bold text-accent-secondary mt-2">24</p>
                </Card>
                <Card className="p-6">
                    <h3 className="text-lg font-medium text-text-secondary">Messages</h3>
                    <p className="text-3xl font-bold text-accent-tertiary mt-2">5</p>
                </Card>
                <Card className="p-6">
                    <h3 className="text-lg font-medium text-text-secondary">Blog Posts</h3>
                    <p className="text-3xl font-bold text-semantic-info mt-2">8</p>
                </Card>
            </div>
        </AdminLayout>
    );
}
