module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      colors: {
        "primary-dark": "#424656",
        "primary-blue": "#0085FF",
        "primary-gray": "#A6AABD",
        "primary-white": "#F7F9FF",
      },
     
      fontFamily: {
        'exo' : '"Exo 2"'
      }
   
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
