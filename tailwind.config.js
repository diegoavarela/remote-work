/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "overlay": "hsla(0, 0%, 0%, 0.7)",
      },
      backgroundImage: {
        'hero-mobile': "url('./components/images/image-hero-mobile.png')",
        'hero-desktop': "url('./components/images/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
}

