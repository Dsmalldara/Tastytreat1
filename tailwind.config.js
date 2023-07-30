/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

