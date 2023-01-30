/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens:{
        'print' : { 'raw': 'print'}
      }
    },
  },
  plugins: [],
}
