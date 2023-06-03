/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'dark-gray-700': 'rgba(55, 65, 81, 0.7)',
      },
    },
  },
  variants:{
    extend: {
      borderColor: ['dark'],
    },
  },
  plugins: [],
}

