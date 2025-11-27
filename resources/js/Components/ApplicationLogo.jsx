export default function ApplicationLogo({ className }) {
    return (
        <div className={`font-bold text-2xl tracking-tight ${className}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                Tanbir
            </span>
            <span className="text-text-primary ml-1">Ahmed</span>
            <span className="text-accent-primary">.</span>
        </div>
    );
}
