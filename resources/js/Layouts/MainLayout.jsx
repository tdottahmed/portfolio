import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useTheme } from "../Hooks/useTheme";

export default function MainLayout({ children }) {
    // Initialize theme - default to dark
    useTheme();

    return (
        <div className="min-h-screen bg-background-primary text-text-primary flex flex-col transition-colors duration-500">
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-20 w-full">{children}</main>
            <Footer />
        </div>
    );
}
