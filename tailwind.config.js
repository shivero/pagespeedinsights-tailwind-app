/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'body': '#1d1d1f',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}