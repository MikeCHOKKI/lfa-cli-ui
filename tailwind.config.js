/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lfa: {
          bg: '#0D1117',
          surface: '#161B22',
          accent: '#58A6FF',
          success: '#2EA043',
          warning: '#D29922',
          text: '#C9D1D9',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
