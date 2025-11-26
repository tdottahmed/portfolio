import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Landing/Hero';
import Projects from '@/Components/Landing/Projects';
import Blog from '@/Components/Landing/Blog';

export default function Home({ 
    settings, 
    projects, 
    posts 
}) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero settings={settings} />
            <Projects projects={projects} />
            <Blog posts={posts} />
        </MainLayout>
    );
}
