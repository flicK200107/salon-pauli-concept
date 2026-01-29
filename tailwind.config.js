/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'sand': '#F5F5F0',
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'text-dark': '#2C2C2C',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
