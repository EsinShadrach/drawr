/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#7A71FE",
        "brand-lemon": "#E3F746",
      },
      fontFamily: {
        'aeonik': ['aeonik', 'sans-serif'],
        'blogh': ['blogh', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
