/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad6a5',
          300: '#f7b96d',
          400: '#f39133',
          500: '#f0730b',
          600: '#e15706',
          700: '#ba3f08',
          800: '#94320e',
          900: '#782b0f',
        },
        secondary: {
          50: '#faf5f0',
          100: '#f3e6d7',
          200: '#e6cbad',
          300: '#d6a97b',
          400: '#c88a52',
          500: '#be7340',
          600: '#b05d35',
          700: '#92482e',
          800: '#773c2b',
          900: '#613325',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
