/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFF7',
        secondary: '#7F00FF',
        accent: '#00FF85',
        dark: '#0D0D0D',
        darkAlt: '#1A1A1A',
        light: '#E0E0E0',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 