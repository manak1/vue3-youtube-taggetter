module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: '#F7FAFC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
