/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tangerine': ['tangerine'],
      },
      colors: {
        clifford: "#da373d",
        golden: "#FFBE82",
      },
      backgroundImage: {
        headerBg: "url('/src/assets/images/headerBg.png')",
      },
      height: {
        '0.25': '1px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

