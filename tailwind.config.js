/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'person': '1fr 5fr',
      },
      gridTemplateRows:{
        'person':'auto 5fr'
      }

    },
  },
  plugins: [],
}