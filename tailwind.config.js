module.exports = {
  purge: {
    enabled: true, //true for production build
    content: [
     '*.html'
    ]
   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
