/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // preline
    'node_modules/preline/dist/*.js',

    // Tailwind Elements
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"), 
    require('preline/plugin'), 
    require("tw-elements/dist/plugin.cjs")
  ],
}