/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./work.html"],
  theme: {
    colors: {
      'text': '#00030f',
      'background': '#f5f7ff',
      'primary': '#b1eb9e',
      'secondary': '#7edafb',
      'accent': '#235b53',
      'secondary-gray': '#d1e3f0',
     },
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: ['Roboto', 'serif'],
      body: ['Figtree', 'sans-serif'],
      logo: ['"Josefin Sans"', 'sans-serif']
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
      light: '300'
    }, 
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}

