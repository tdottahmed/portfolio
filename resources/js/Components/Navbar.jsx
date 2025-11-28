import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import {
    Home,
    User,
    Briefcase,
    FileText,
    Mail,
    Monitor,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./Header/NavLink";
import ApplicationLogo from "./ApplicationLogo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: User },
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "Projects", href: "/projects", icon: Monitor },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <nav
            className={`
                fixed w-full z-50 top-0 start-0 transition-all duration-300
                ${
                    scrolled
                        ? "bg-background-secondary/80 backdrop-blur-xl border-b border-border-subtle shadow-sm"
                        : "bg-transparent border-transparent"
                }
            `}
        >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse z-50"
                >
                    <ApplicationLogo />
                </Link>

                <div className="flex md:order-2 items-center gap-2">
                    <ThemeToggle />
                </div>

                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border-subtle rounded-lg bg-surface-base md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    href={link.href}
                                    active={url === link.href}
                                    icon={link.icon}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
