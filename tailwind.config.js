/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'
],
  theme: {
    screens:{
      'cell': '375px'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}



