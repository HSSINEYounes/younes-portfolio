
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yale': '#005a9c',
      }
    },
    container: {
        center: true,
        padding: '2rem',
    }
  },
  plugins: [],
}