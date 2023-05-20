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
        },
    },
    plugins: [],
}
