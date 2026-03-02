module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3fbf5',
          100: '#e6f7ea',
          200: '#bfeecb',
          300: '#99e4ab',
          400: '#4fd66a',
          500: '#22b33f',
          600: '#1f9f36',
          700: '#177a27',
          800: '#11561a',
          900: '#0b3810'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
