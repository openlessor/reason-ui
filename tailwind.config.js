const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.res',],
  theme: {
    transitionProperty: {
      'order': 'order'
    },
    filterFunctions: {
      blur: {},
      brightness: {},
      contrast: {},
      dropShadow: {},
      grayscale: {},
      hueRotate: {},
      invert: {},
      saturate: {},
      sepia: {},
    },
    extend: {
      colors: {
        slate: colors.slate
      }
    },
  },
  plugins: [],
}
