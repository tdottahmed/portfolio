export default function Background() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background-primary">
            {/* Multiple Gradient Orbs */}
            <div className="absolute top-10 right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-accent-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-accent-tertiary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[700px] sm:h-[700px] bg-accent-secondary/15 rounded-full blur-3xl" />

            {/* Enhanced Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

            {/* Static Rings (formerly rotating) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-primary/10 rounded-full hidden lg:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-secondary/10 rounded-full hidden lg:block" />

            {/* Static Particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-accent-primary/40 rounded-full"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                    }}
                />
            ))}
        </div>
    );
}
