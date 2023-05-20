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
                "theme-main": "#0081C9",
                "theme-sup": "#5BC0F8",
                "theme-sub": "#86E5FF",
                "theme-highlight": "#FFC93C",
            },
            maxWidth: {
                cutoff: "1440px",
            },
        },
    },
    plugins: [],
}
