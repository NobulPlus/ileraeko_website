/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/public/bg1.jpg')",
        'mobile-bg': "url('/public/img2.png')",
        'bg-color': "#fde4be",
      },
    },
    plugins: [],
  }
}

