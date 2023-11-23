/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none"
      },

      borderWidth:{
        1:"1px",
      },

      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },

      fontFamily: {
        'outfit':['Outfit', 'sans-serif'],
        'roboto-mono':['Roboto Mono','monospace'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'arvo-bold':['Arvo', 'serif'],
  
      },
    },
  },
  plugins: [],
}

