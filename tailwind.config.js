/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*"],
//   theme: {
//     extend: {},
//   },

//   plugins: [],
// };



module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        moveAround: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        moveAround: 'moveAround 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

