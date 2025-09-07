/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        display: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        elegant: {
          50: '#faf9f7',
          100: '#f8f6f3',
          200: '#f1ede6',
          300: '#e5e1dc',
          400: '#d4cfc7',
          500: '#c4b5a0',
          600: '#8b6f47',
          700: '#6b5537',
          800: '#4a3a26',
          900: '#2c2c2c',
        },
        accent: {
          50: '#f5f3f0',
          100: '#e8e2db',
          200: '#d1c4b7',
          300: '#ba9d87',
          400: '#a67c63',
          500: '#8b6f47',
          600: '#72573a',
          700: '#5a452e',
          800: '#483526',
          900: '#392a1f',
        }
      },
    },
  },
  plugins: [],
}
