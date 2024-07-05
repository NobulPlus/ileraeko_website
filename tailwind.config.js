/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/public/bg1.jpg')",
        'bg-color': "#fde4be",
      },
    },
    plugins: [],
  }
}

