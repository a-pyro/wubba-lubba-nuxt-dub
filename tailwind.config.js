/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        swabble: '#3a6d74',
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
    },
  },
  plugins: [],
}
