import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import ServicesComponent from '@/Components/Landing/Services';
import Testimonials from '@/Components/Landing/Testimonials';

export default function Index({ services, testimonials }) {
    return (
        <MainLayout>
            <Head title="Services" />
            <ServicesComponent services={services} />
            <Testimonials testimonials={testimonials} />
        </MainLayout>
    );
}
