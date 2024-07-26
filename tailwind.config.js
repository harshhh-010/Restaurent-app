const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "flowbite.content()",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/Assets/hero-banner.jpg')",
      },
      colors: {
        'peel-orange-custom': '#FEA116',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    }
  },
  plugins: [
    "flowbite.plugin()",
  ],
}