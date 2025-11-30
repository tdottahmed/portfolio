import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: {
                    primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
                    secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
                },
                surface: {
                    base: "rgb(var(--color-surface-base) / <alpha-value>)",
                    elevated:
                        "rgb(var(--color-surface-elevated) / <alpha-value>)",
                },
                text: {
                    primary: "rgb(var(--color-text-primary) / <alpha-value>)",
                    secondary:
                        "rgb(var(--color-text-secondary) / <alpha-value>)",
                },
                border: {
                    subtle: "rgb(var(--color-border-subtle) / <alpha-value>)",
                    default: "rgb(var(--color-border-default) / <alpha-value>)",
                },
                accent: {
                    primary: "rgb(var(--color-accent-primary) / <alpha-value>)",
                    secondary:
                        "rgb(var(--color-accent-secondary) / <alpha-value>)",
                    tertiary:
                        "rgb(var(--color-accent-tertiary) / <alpha-value>)",
                },
                semantic: {
                    info: "#3b82f6", // blue-500
                    error: "#ef4444", // red-500
                    success: "#10b981", // emerald-500
                    warning: "#f59e0b", // amber-500
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out infinite 2s",
                glow: "glow 2s ease-in-out infinite alternate",
                gradient: "gradient 15s ease infinite",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(129, 140, 248, 0.5)" },
                    "100%": { boxShadow: "0 0 40px rgba(129, 140, 248, 0.8)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
            },
        },
    },

    plugins: [forms, require("@tailwindcss/typography")],
};
