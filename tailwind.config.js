/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#1e293b', // Slate 800 - Deep Navy/Charcoal
        background: '#f8fafc', // Slate 50 - Off-white
        primary: '#0f172a', // Slate 900
        accent: {
          teal: '#14b8a6', // Teal 500
          orange: '#f97316', // Orange 500
          green: '#22c55e', // Green 500
          blue: '#3b82f6', // Blue 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
