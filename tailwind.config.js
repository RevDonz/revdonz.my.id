const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        dark: {
          100: '#A6A7AB',
          200: '#909296',
          300: '#5C5F66',
          400: '#373A40',
          500: '#2C2E33',
          600: '#25262B',
          700: '#1A1B1E',
          800: '#141517',
          900: '#101113',
        },
      },
    },
  },
  plugins: [],
};
