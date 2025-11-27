import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Components/Landing/Hero";
import Projects from "@/Components/Landing/Projects";
import Skills from "@/Components/Landing/Skills";
import Experience from "@/Components/Landing/Experience";
import Blog from "@/Components/Landing/Blog";

export default function Home({
    settings,
    projects,
    posts,
    skills,
    experiences,
}) {
    return (
        <MainLayout>
            <Head title="Home" />
            <div className="w-full">
                <Hero settings={settings} />
                <Skills skills={skills} />
                <Projects projects={projects} />
                <Experience experiences={experiences} />
                <Blog posts={posts} />
            </div>
        </MainLayout>
    );
}
