import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import AboutComponent from '@/Components/Landing/About';
import Skills from '@/Components/Landing/Skills'; // Need to create this if not exists, or just use logic
import Experience from '@/Components/Landing/Experience'; // Need to create
import Education from '@/Components/Landing/Education'; // Need to create

// For now, I'll assume I need to create these components or they are part of About.
// Checking previous file list, I only created Hero, About, Services, Projects, Testimonials, Blog, Contact.
// Skills, Experience, Education were passed to Home but not used in separate components yet?
// Wait, in Home.jsx (Step 498), I passed `skills`, `experiences`, `education` but didn't use them in the JSX?
// Let's check Home.jsx again.

export default function About({ settings, skills, experiences, education }) {
    return (
        <MainLayout>
            <Head title="About Me" />
            <AboutComponent settings={settings} />
            
            {/* I need to implement Skills, Experience, Education sections if they are not in AboutComponent */}
            {/* AboutComponent (Step 486) only has bio, image, resume link. */}
            
            {/* Placeholder for Skills, Experience, Education until I create components for them */}
            <div className="container mx-auto px-6 py-12 space-y-12">
                <Skills skills={skills} />
                <Experience experiences={experiences} />
                <Education education={education} />
            </div>
        </MainLayout>
    );
}
