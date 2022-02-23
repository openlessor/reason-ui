const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{re,js}',],
  theme: {
    extend: {
      colors: {
        slate: colors.slate
      }
    },
  },
  plugins: [],
}
