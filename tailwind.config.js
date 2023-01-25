/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'night': {
        100: '#3B3F48',
        200: '#202127',
        300: '#131417',
      },
       'blueberry': {
        100: '#8DAABF',
        200: '#4E7AAD',
        300: '#2961A3',
      },
      'snow': {
        100: '#EFF4F8',
        200: '#E5E8F0',
        300: '#A9AEBD',
        400: '#9497AB',
      },
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['Spectral', 'mono'],
    },
    extend: {},

  },
  plugins: [],
};
