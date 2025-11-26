export default function Footer() {
    return (
        <footer className="bg-surface-base border-t border-border-subtle py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-text-primary">
                            Portfolio<span className="text-accent-primary">.</span>
                        </span>
                        <p className="text-sm text-text-secondary mt-2">
                            Building digital experiences that matter.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-text-tertiary">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
