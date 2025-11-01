const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
    screens: {
      sm: "320px",  // phones
      md: "768px",  // tablets
      lg: "1024px", // larger tablets / small laptops
    },
  },
};

export default config;
