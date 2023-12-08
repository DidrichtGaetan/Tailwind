/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  theme: {
    extend: {
      minHeight: {
        500: "350px",
        650: "500px"
      }
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
