import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Background from "../Components/Background";
import BottomNav from "../Components/BottomNav";
import MobileMenu from "../Components/Header/MobileMenu";
import { useTheme } from "../Hooks/useTheme";
import { Home, User, Briefcase, Monitor, FileText, Mail } from "lucide-react";

export default function MainLayout({ children }) {
    // Initialize theme - default to dark
    useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: User },
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "Projects", href: "/projects", icon: Monitor },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <div className="min-h-screen text-text-primary flex flex-col transition-colors duration-500 relative pb-20 md:pb-0">
            <Background />
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-20 w-full relative z-10">{children}</main>
            <Footer />
            
            <BottomNav onOpenMenu={() => setIsMobileMenuOpen(true)} />
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
                links={links} 
            />
        </div>
    );
}
