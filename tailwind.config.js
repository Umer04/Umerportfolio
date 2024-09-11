/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      customTurquoise: '#0FF5DD',
    }, animation: {
      gradient: 'gradientAnimation 8s ease infinite',
    }, animation: {
      slideIn: 'slideIn 0.5s ease-out',
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translatey(-100%)', opacity: '0' },
        '100%': { transform: 'translatey(0)', opacity: '1' },
      },
    },},
  },
  plugins: [],
}

