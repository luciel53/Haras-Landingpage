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
        darkBrown: '#292621',
        golden: "#FFBE82",
        lightGray: "#D9D9D9",
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

