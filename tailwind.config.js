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
      margin: {
        "xl": "100px",
        "lg": "50px",
        "md": "30px",
        "sm": "10px",
      
      },
      padding: {
        "x": "20px",
        "y": "10px",
      
      
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
