import React, { useMemo, useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../Hooks/useTheme";

export default function ModernBackground() {
    const { theme } = useTheme();

    // Initialize the tsParticles engine (memoized so it's stable)
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const isDark = theme === 'dark';
    
    // Modern elegant colors for particles
    const particleColor = isDark ? "#818cf8" : "#4f46e5"; // indigo-400 for dark, indigo-600 for light
    const lineColor = isDark ? "#4f46e5" : "#6366f1"; // indigo-600 for dark, indigo-500 for light

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 120,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: particleColor,
            },
            links: {
                color: lineColor,
                distance: 150,
                enable: true,
                opacity: isDark ? 0.15 : 0.4,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Slow elegant movement
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    width: 800,
                    height: 800,
                },
                value: 80,
            },
            opacity: {
                value: isDark ? 0.3 : 0.6,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    }), [isDark, particleColor, lineColor]);

    return (
        <div className="fixed inset-0 overflow-hidden -z-10 bg-background-primary transition-colors duration-500">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-200/50 via-background-primary/50 to-background-primary dark:from-indigo-900/20 dark:via-background-primary/80 dark:to-background-primary transition-colors duration-700 z-0 pointer-events-none"></div>
            
            {/* Glowing Animated Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-slate-300/40 dark:bg-indigo-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-float z-0 pointer-events-none"></div>
            
            <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-slate-200/40 dark:bg-indigo-800/20 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-float-delayed z-0 pointer-events-none"></div>
            
            <div className="absolute bottom-[-15%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-slate-300/40 dark:bg-indigo-700/20 mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-60 animate-float z-0 pointer-events-none" style={{ animationDuration: '10s' }}></div>

            <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-slate-200/30 dark:bg-indigo-500/10 mix-blend-multiply dark:mix-blend-screen filter blur-[90px] opacity-50 animate-float-delayed z-0 pointer-events-none" style={{ animationDuration: '12s' }}></div>
            
            {/* Particles Layer */}
            <div className="absolute inset-0 z-10">
                <ParticlesProvider init={particlesInit}>
                    <Particles
                        id="tsparticles"
                        options={particlesOptions}
                        className="w-full h-full"
                    />
                </ParticlesProvider>
            </div>

            {/* Noise Texture Overlay for premium aesthetic */}
            <div 
                className="absolute inset-0 mix-blend-overlay opacity-[0.4] dark:opacity-[0.15] z-20 pointer-events-none" 
                style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                }}
            ></div>
        </div>
    );
}
