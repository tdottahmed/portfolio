import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Briefcase, 
    Code2, 
    FileText, 
    GraduationCap, 
    MessageSquare, 
    Settings, 
    LogOut, 
    Menu, 
    X,
    User,
    Award,
    Layers
} from 'lucide-react';
import ThemeToggle from '@/Components/ThemeToggle';
import { useTheme } from '@/Hooks/useTheme';
import Toast from '@/Components/Toast';

export default function AdminLayout({ children }) {
    useTheme();
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: route('dashboard'), icon: LayoutDashboard },
        { name: 'Projects', href: route('admin.projects.index'), icon: Briefcase },
        { name: 'Skills', href: route('admin.skills.index'), icon: Code2 },
        { name: 'Experience', href: route('admin.experiences.index'), icon: User },
        { name: 'Education', href: route('admin.education.index'), icon: GraduationCap },
        { name: 'Services', href: route('admin.services.index'), icon: Layers },
        { name: 'Testimonials', href: route('admin.testimonials.index'), icon: MessageSquare },
        { name: 'Blog Posts', href: route('admin.posts.index'), icon: FileText },
        { name: 'Messages', href: route('admin.messages.index'), icon: MessageSquare },
        { name: 'Settings', href: route('admin.settings.edit'), icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-background-primary text-text-primary flex">
            {/* Sidebar */}
            <aside 
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-base border-r border-border-subtle transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between h-16 px-6 border-b border-border-subtle">
                    <span className="text-xl font-bold text-accent-primary">Admin Panel</span>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                                route().current(item.href) // You might need to adjust this check
                                    ? 'bg-accent-primary/10 text-accent-primary'
                                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                            }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    ))}
                    
                    <div className="pt-4 mt-4 border-t border-border-subtle">
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="flex items-center w-full px-4 py-3 text-sm font-medium text-semantic-error rounded-lg hover:bg-semantic-error/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Log Out
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-surface-base border-b border-border-subtle flex items-center justify-between px-6">
                    <button onClick={() => setSidebarOpen(true)} className="md:hidden text-text-secondary">
                        <Menu className="w-6 h-6" />
                    </button>
                    
                    <div className="flex items-center ml-auto space-x-4">
                        <ThemeToggle />
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white font-bold">
                                {auth.user.name.charAt(0)}
                            </div>
                            <span className="text-sm font-medium hidden sm:block">{auth.user.name}</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
            <Toast />
        </div>
    );
}
