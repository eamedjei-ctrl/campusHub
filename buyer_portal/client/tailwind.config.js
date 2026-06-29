module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0D4B8B',
        accent: '#1366D6',
        surface: '#F8FAFF',
        muted: '#6B7280',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
