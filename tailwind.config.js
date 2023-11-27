/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/pages/home/home.jsx", // Ajoute cette ligne pour exclure le fichier spécifique

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

