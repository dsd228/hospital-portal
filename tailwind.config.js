/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e7f3ff',
          100: '#bde2ff',
          500: '#0056b3',
          600: '#003d82',
          700: '#002961',
        },
        secondary: {
          500: '#2c3e50',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}