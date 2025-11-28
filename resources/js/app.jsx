import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";

const appName = "Tanbir Ahmed";

createInertiaApp({
    title: (title) => `${title} | ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        function Root({ App, props }) {
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                const timer = setTimeout(() => {
                    setLoading(false);
                }, 2500); // Wait for animation to complete (2s progress + 0.5s buffer)

                return () => clearTimeout(timer);
            }, []);

            return (
                <>
                    <Preloader loading={loading} />
                    <App {...props} />
                </>
            );
        }

        root.render(<Root App={App} props={props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
