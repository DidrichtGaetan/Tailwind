/* @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,js}'],
  },
}