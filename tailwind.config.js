/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#daf0bf',
          dark: '#3d5e11',
        },
        blue: {
          light: '#e1f3f5',
          medium: '#67a7ae',
          dark: '#3a6d74',
        },
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      boxShadow: {
        around: '0 5px 20px rgba(0, 0, 0, 0.3)',

      },
    },
  },
  plugins: [],
}
