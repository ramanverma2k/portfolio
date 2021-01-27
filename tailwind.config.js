module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#011627',
      secondary: '#fdfffc',
      ob1: '#e71d36',
      ob2: '#2ec4b6',
    },
    fontFamily: {
      quicksand: ['Quicksand'],
      right: ['Rightism']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
