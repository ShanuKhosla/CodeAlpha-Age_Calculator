/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'firaSans' : ['Fira Sans', 'sans-serif']
      },
      screens: {
        xs: "450px",
      }, 

    },
  },
  plugins: [require("daisyui")],
};
