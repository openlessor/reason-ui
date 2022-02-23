const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.re',],
  theme: {
    extend: {
      colors: {
        slate: colors.slate
      }
    },
  },
  plugins: [],
}
