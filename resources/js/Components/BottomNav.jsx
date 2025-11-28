import { Link, usePage } from "@inertiajs/react";
import { Home, Monitor, FileText, Mail, Menu, Briefcase, User } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav({ onOpenMenu }) {
    const { url } = usePage();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Projects", href: "/projects", icon: Monitor },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    // Helper to check if active
    const isActive = (href) => {
        if (href === "/" && url === "/") return true;
        if (href !== "/" && url.startsWith(href)) return true;
        return false;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-surface-base/80 backdrop-blur-xl border-t border-border-subtle" />
            
            <div className="relative flex items-center justify-around py-1.5 pb-safe">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all duration-300 ${
                                active
                                    ? "text-accent-primary"
                                    : "text-text-secondary hover:text-text-primary"
                            }`}
                        >
                            <div className={`relative p-1 rounded-lg transition-all duration-300 ${
                                active ? "bg-accent-primary/10" : ""
                            }`}>
                                <item.icon className={`w-5 h-5 ${active ? "stroke-[2.5px]" : "stroke-2"}`} />
                                {active && (
                                    <motion.div
                                        layoutId="bottomNavIndicator"
                                        className="absolute inset-0 border-2 border-accent-primary/20 rounded-lg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                            <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
                        </Link>
                    );
                })}

                {/* Menu Button */}
                <button
                    onClick={onOpenMenu}
                    className="flex flex-col items-center justify-center p-1 rounded-xl text-text-secondary hover:text-text-primary transition-all duration-300"
                >
                    <div className="p-1">
                        <Menu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium mt-0.5">Menu</span>
                </button>
            </div>
        </div>
    );
}
