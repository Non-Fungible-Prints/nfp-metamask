module.exports = {
  purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false,
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
    },
  },
  variants: {
    extend: { cursor: [ 'hover', 'focus' ] },
  },
  plugins: [],
};
