/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mojo: {
          blue: "#0751D5",
          black: "#000000",
          pink: "#FF2E7F",
          orange: "#FF7D07",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
