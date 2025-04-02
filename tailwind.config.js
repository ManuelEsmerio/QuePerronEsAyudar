/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F2FE',
          500: '#3B82F6',
          700: '#1D4ED8',
        },
        secondary: {
          500: '#F59E0B',
        },
        accent: {
          500: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}