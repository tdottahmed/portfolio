import { Link } from "@inertiajs/react";
import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    MapPin,
    ArrowRight,
    Heart,
    ChevronDown,
} from "lucide-react";
import ApplicationLogo from "./ApplicationLogo";
import { useState } from "react";

const FooterLinkSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border-subtle md:border-none last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 md:py-0 md:cursor-default text-left group"
            >
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary md:group-hover:text-text-primary transition-colors">
                    {title}
                </h3>
                <ChevronDown
                    className={`w-5 h-5 text-text-secondary md:hidden transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent-primary" : ""
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-96 opacity-100 mb-6"
                        : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mb-0"
                }`}
            >
                <div className="pt-2 md:pt-6">{children}</div>
            </div>
        </div>
    );
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        quick: [
            { name: "Home", route: "home" },
            { name: "About", route: "about" },
            { name: "Services", route: "services.index" },
            { name: "Projects", route: "projects.index" },
            { name: "Blog", route: "posts.index" },
            { name: "Contact", route: "contact.index" },
        ],
        social: [
            {
                name: "GitHub",
                icon: Github,
                url: "https://github.com/tanbir-ahmed",
            },
            {
                name: "LinkedIn",
                icon: Linkedin,
                url: "https://linkedin.com/in/tanbir-ahmed",
            },
            {
                name: "Twitter",
                icon: Twitter,
                url: "https://twitter.com/tanbir_ahmed",
            },
        ],
    };

    return (
        <footer className="relative border-t border-border-subtle overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 pt-12 sm:pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6 text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <ApplicationLogo className="h-10 text-accent-primary" />
                        </Link>
                        <p className="text-text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
                            Crafting digital experiences that blend innovation
                            with functionality. Let's build something amazing
                            together.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-surface-elevated rounded-lg text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 border border-border-subtle hover:border-accent-primary/30"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <FooterLinkSection title="Quick Links">
                        <ul className="space-y-3">
                            {footerLinks.quick.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={route(link.route)}
                                        className="group flex items-center text-text-secondary hover:text-accent-primary transition-colors"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterLinkSection>

                    {/* Services */}
                    <FooterLinkSection title="Services">
                        <ul className="space-y-3 text-text-secondary">
                            <li className="hover:text-accent-primary transition-colors cursor-default">
                                Web Development
                            </li>
                            <li className="hover:text-accent-primary transition-colors cursor-default">
                                UI/UX Design
                            </li>
                            <li className="hover:text-accent-primary transition-colors cursor-default">
                                Mobile Apps
                            </li>
                            <li className="hover:text-accent-primary transition-colors cursor-default">
                                Consulting
                            </li>
                            <li className="hover:text-accent-primary transition-colors cursor-default">
                                SEO Optimization
                            </li>
                        </ul>
                    </FooterLinkSection>

                    {/* Contact Info */}
                    <FooterLinkSection title="Contact">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:hello@tanbir.com"
                                    className="flex items-start gap-3 text-text-secondary hover:text-accent-primary transition-colors group"
                                >
                                    <div className="p-2 bg-surface-elevated rounded-lg border border-border-subtle group-hover:border-accent-primary/30 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-0.5">
                                            Email
                                        </span>
                                        hello@tanbir.com
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-text-secondary group">
                                    <div className="p-2 bg-surface-elevated rounded-lg border border-border-subtle">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-0.5">
                                            Location
                                        </span>
                                        Dhaka, Bangladesh
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </FooterLinkSection>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className="text-text-tertiary text-sm text-center md:text-left">
                            &copy; {currentYear} Tanbir Ahmed. All rights reserved.
                        </p>
                        <Link
                            href={route("login")}
                            className="text-text-tertiary text-sm hover:text-accent-primary transition-colors"
                        >
                            Admin Login
                        </Link>
                    </div>
                    <p className="text-text-tertiary text-sm flex items-center gap-1">
                        Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
                        using Laravel & React
                    </p>
                </div>
            </div>
        </footer>
    );
}
