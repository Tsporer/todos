/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: "jit",
    content: [
        // "./app/**/*.html",
        // "./app/**/*.js",
        // "./app/**/*.ejs",
        // "./**/*.html",
        // "./**/*.js",
        // "./**/*.ejs",
        "./src/*.{html,js,css}",
        "./views/*.ejs",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        fontFamily: {
            'teachers': ['"Teachers"', 'sans-serif'],
        },
        extend: {
            colors: {
                'percent': {
                    100: '#f87171', // Red
                    200: '#f88c71', // Red-orange
                    300: '#f8a071', // Orange
                    400: '#f8b471', // Yellow-orange
                    500: '#f8c871', // Yellow
                    600: '#f8dc71', // Light yellow-green
                    700: '#eaf871', // Light green-yellow
                    800: '#d4f871', // Light green
                    900: '#bff871', // Green
                    1000: '#aaf871', // Bright green
                    1100: '#95f871', // Light green-blue
                    1200: '#80f871'  // Green-blue
                },
                'invert': {
                    300: '#f8a071'
                }
            },
            ringColor: {
                'percent-100': '#f87171', // Red
                'percent-200': '#f88c71', // Red-orange
                'percent-300': '#f8a071', // Orange
                'percent-400': '#f8b471', // Yellow-orange
                'percent-500': '#f8c871', // Yellow
                'percent-600': '#f8dc71', // Light yellow-green
                'percent-700': '#eaf871', // Light green-yellow
                'percent-800': '#d4f871', // Light green
                'percent-900': '#bff871', // Green
                'percent-1000': '#aaf871', // Bright green
                'percent-1100': '#95f871', // Light green-blue
                'percent-1200': '#80f871'  // Green-blue
            },
            fontFamily: {
                'teachers': ['"Teachers"', 'sans-serif'],
            }
        },
    },
    plugins: [require("flowbite/plugin")],
};