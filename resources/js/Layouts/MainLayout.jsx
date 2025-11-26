import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useTheme } from '../Hooks/useTheme';

export default function MainLayout({ children }) {
    // Initialize theme
    useTheme();

    return (
        <div className="min-h-screen bg-background-primary text-text-primary flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
