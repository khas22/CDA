/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1E3A',
        deep: '#123B74',
        azure: '#1FA6E0',
        pale: '#E9F5FD',
        gold: '#B78B1E',
        slate: '#334155',
        brandBg: '#0B1E3A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        brand: '0 10px 20px rgba(18, 59, 116, 0.15)',
      },
    },
  },
  plugins: [],
}