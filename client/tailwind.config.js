/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
        secondary: '#FFD23F',
        dark: '#1F1F1F',
        light: '#F2F2F2',
      },
    },
  },
  plugins: [],
}

