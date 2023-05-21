/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // files to apply tailwind classes for
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                "theme-white": "#FFFFFF",
                "theme-gray": "#555555",
                "theme-dark": "#111111",
            },
            maxWidth: {
                cutoff: "1440px",
            },
            transitionProperty: {
                smooth: "all 0.65s cubic-bezier(0.19, 1, 0.22, 1)",
                // smooth: "all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                // smooth: "all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
