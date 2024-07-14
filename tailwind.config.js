/** @type {import('tailwindcss').Config} */

const custom = require('./src/utils/tokens.json');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-10': 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
      },
      colors: {
        brand: {
          primary: {
            '10': custom.colors.brand.primary['10'].hex,
            '20': custom.colors.brand.primary['20'].hex,
            '30': custom.colors.brand.primary['30'].hex,
            '40': custom.colors.brand.primary['40'].hex,
            '50': custom.colors.brand.primary['50'].hex,
            '60': custom.colors.brand.primary['60'].hex,
          },
          secondary: {
            '10': custom.colors.brand.secondary['10'].hex,
            '20': custom.colors.brand.secondary['20'].hex,
            '30': custom.colors.brand.secondary['30'].hex,
          },
          tertiary: {
            '10': custom.colors.brand.tertiary['10'].hex,
          },
        },
        support: {
          information: {
            '10': custom.colors.suport.information['10'].hex,
          },
          error: {
            '10': custom.colors.suport.error['10'].hex,
          },
          warning: {
            '10': custom.colors.suport.warning['10'].hex,
          },
          success: {
            '10': custom.colors.suport.sucess['10'].hex,
          },
          message: {
            '10': custom.colors.suport.message['10'].hex,
          },
        },
      },
      borderRadius: {
        small: custom.border.small,
        medium: custom.border.medium,
        pill: custom.border.pill,
      },
      fontSize: {
        xlarge: custom.typography.text.xlarge.fontSize,
        large: custom.typography.text.large.fontSize,
        medium: custom.typography.text.medium.fontSize,
        small: custom.typography.text.small.fontSize,
        xsmall: custom.typography.text.xsmall.fontSize,
      },
      fontWeight: {
        light: custom.typography.weight.light,
        regular: custom.typography.weight.regular,
        bold: custom.typography.weight.bold,
        black: custom.typography.weight.black,
      },
    },
  },
  plugins: [],
}
