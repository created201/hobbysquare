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
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
