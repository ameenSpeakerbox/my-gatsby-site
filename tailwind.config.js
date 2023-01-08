/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: "Nunito Sans', sans-serif",
    },
    extend: {
      screens: {
        hight900: { raw: "(min-height: 901px)" },
        hightUt900: { raw: "(max-height: 901px)" },
        sm: { min: "639px" },
        md: { min: "767px" },
        tab: { min: "965px" },
        lg: { min: "1023px" },
        "max-lg": { max: "1023px" },
        xl: { min: "1279px" },
        "2xl": { min: "1535px" },
      },
    },
  },
  plugins: [],
};
