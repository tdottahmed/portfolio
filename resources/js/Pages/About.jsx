import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import AboutComponent from "@/Components/Landing/About";
import Skills from "@/Components/Landing/Skills";
import Experience from "@/Components/Landing/Experience";
import Education from "@/Components/Landing/Education";

export default function About({ settings, skills, experiences, education }) {
    return (
        <MainLayout>
            <Head title="About Me" />
            <AboutComponent settings={settings} />
            <Skills skills={skills} />
            <Experience experiences={experiences} />
            <Education education={education} />
        </MainLayout>
    );
}
