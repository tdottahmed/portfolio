import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import ContactComponent from '@/Components/Landing/Contact';

export default function Contact({ settings }) {
    return (
        <MainLayout>
            <Head title="Contact" />
            <ContactComponent settings={settings} />
        </MainLayout>
    );
}
