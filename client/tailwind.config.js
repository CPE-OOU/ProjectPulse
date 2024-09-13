const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      borderWidth: {
        tin: '1px',
      },
      keyframes: {
        fadeIn: {
          '0': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        textShadow: {
          '3d': '2px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2)', // Adds depth
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
    },
  },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {                
      addUtilities({
        '.text-shadow-3d': {
          'text-shadow': '2px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2)',
        },
      });
  }
  ],
}
