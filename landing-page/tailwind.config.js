/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'custom-black': '#000000',
      'custom-white': '#FFFFFF',
      'dark-green': '#228F47',
      'light-green': '#66BF84',
      'very-light-grey': '#D9D9D9',
      'custom-yellow': '#EBC351',
      'very-light-green': '#E7FFEF',
      'custom-white-2': '#FCFCFC',
      'very-dark-green': '#0E4A22',
      'light-green-2': '#5AAA75',
      'dark-grey' : '#6C6C6C',
      'custom-white-3' : '#F9F9F9',
      'light-grey': '#A1A1A1'
      },
      fontFamily: {
        'SequelSans': ['Sequel Sans', 'sans'],
        'AbrilFatface': ['Abril Fatface', 'cursive'], 
      },
    },
  },
  plugins: [],
}
