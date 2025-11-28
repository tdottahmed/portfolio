import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import AboutComponent from "@/Components/Landing/About";
import Skills from "@/Components/Landing/Skills"; // Need to create this if not exists, or just use logic
import Experience from "@/Components/Landing/Experience"; // Need to create
import Education from "@/Components/Landing/Education"; // Need to create

export default function About({ settings, skills, experiences, education }) {
    return (
        <MainLayout>
            <Head title="About Me" />
            <AboutComponent settings={settings} />

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                <Skills skills={skills} />
                <Experience experiences={experiences} />
                <Education education={education} />
            </div>
        </MainLayout>
    );
}
