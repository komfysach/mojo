/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        mojo: {
          blue: "#0751D5",
          black: "#000000",
          pink: "#FF2E7F",
          orange: "#FF7D07",
          darkBlue: "#0045AA",
          darkBlack: "0F0F0F",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
