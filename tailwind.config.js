/** @type {import('tailwindcss').Config} */

const custom = require('./src/utils/tokens.json');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            10: "#8ACEFF",
            20: "#5CBAFF",
            30: "#2EA7FF",
            40: "#0094FF",
            50: "#007CD6",
            60: "#0065AD",
          },
          secondary: {
            10: "#AAAAAA",
            20: "#1B2838",
            30: "#0E131E",
          },
          tertiary: {
            10: "#FFFFFF",
          },
        },
        support: {
          information: {
            10: "#E0E0E0",
          },
          error: {
            10: "#F03D3D",
          },
          warning: {
            10: "#FFCE52",
          },
          success: {
            10: "#0BB07B",
          },
          message: {
            10: "#2962FF",
          },
        },
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
        black: 800,
      },
      fontSize: {
        xlarge: "24px",
        large: "20px",
        medium: "18px",
        small: "16px",
        xsmall: "14px",
      },
      borderRadius: {
        small: "10px",
        medium: "20px",
        pill: "1000px",
      },
    },
  },
  plugins: [],
}
