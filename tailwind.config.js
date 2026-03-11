/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'nav-white': '#FFFFFF',
        'main-white': '#dddddd',
        'shade-white': '#d3d3d3',
        'text-color': '#333',
        'main-black': '#181818',
        'main-yellow': '#CBB26A',
        'dark-yellow': '#f4cb38',
        'lite-yellow': '#FEF7E0',
        'lite-gris': '#F8F9FA',
        'bg-color': '#fdfdfd',
        'hero-mint': '#4FF3C3', // More vibrant mint from screenshot
        'hero-blue': '#002B49',
        'hero-gray': '#718096', // Softer gray for descriptions
        'hero-yellow': '#CCF98C', // Lime/Yellow for gradients
      },
      fontFamily: {
        'base': ['"Open Sans"', 'sans-serif'],
        'title': ['Merriweather', 'serif'],
        'title-main': ['"Dancing Script"', 'cursive'],
        'title-rubrique': ['Gagalin', 'sans-serif'],
        'texte': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,js}'],
  },
}