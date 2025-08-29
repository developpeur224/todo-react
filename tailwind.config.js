/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  heme: {
    extend: {
      colors: {
        light: {
          primary: '#3b82f6',
          background: '#f3f4f6',
          card: '#ffffff',
          text: '#111827',
        },
        dark: {
          primary: '#3b82f6',
          background: '#111827',
          card: '#1f2937',
          text: '#f9fafb',
        }
      }
    },
  },
  plugins: [],
}