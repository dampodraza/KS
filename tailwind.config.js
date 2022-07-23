const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#588F61',
          101: '#DFE8E0',
          102: '#C5DDC9',
          103: '#8FB495',
          900: '#175066'
        },
        yellow: {
          100: '#F7C604'
        },
        blue: {
          100: '#8EAEBA'
        },
        pink: {
          100: '#EB9EAC'
        },
        orange: {
          100: '#FB9529'
        },
        grey: {
          101: '#DFD8D7',
          102: '#857E7D'
        }
        
        // 'bg-light-yellow': '#F8F3F0',
        // 'primary-yellow': '#F7C604',
        // 'primary-blue': '#8EAEBA',
        // 'primary-green': '#588F61',
      },
      fontFamily: {
        'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        'josefin-italic': ['Josefin-italic', 'sans-serif'],
        'spartan': ['Spartan', 'sans-serif'],
        'spartan-bold': ['Spartan-bold', 'sans-serif']

      },
    },
  },
  plugins: [],
}
