import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: {
                    primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
                },
                surface: {
                    base: 'rgb(var(--color-surface-base) / <alpha-value>)',
                    elevated: 'rgb(var(--color-surface-elevated) / <alpha-value>)',
                },
                text: {
                    primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
                },
                border: {
                    subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
                },
                accent: {
                    primary: 'rgb(var(--color-accent-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-accent-secondary) / <alpha-value>)',
                    tertiary: 'rgb(var(--color-accent-tertiary) / <alpha-value>)',
                },
                semantic: {
                    info: '#3b82f6', // blue-500
                    error: '#ef4444', // red-500
                    success: '#10b981', // emerald-500
                    warning: '#f59e0b', // amber-500
                }
            },
        },
    },

    plugins: [forms],
};
