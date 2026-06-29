module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        seller: {
          brand: '#0052CC',
          surface: '#F8FAFF',
          muted: '#6B7280',
          success: '#22C55E',
          danger: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
