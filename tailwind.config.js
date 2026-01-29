/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'italiana': ['"Italiana"', 'serif'],
        'manrope': ['"Manrope"', 'sans-serif'],
      },
      colors: {
        'blush': '#FCE4EC',
        'mauve': '#D8B4E2',
        'soft-black': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
