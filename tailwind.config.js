module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg-color)',
        'dark-text': 'var(--dark-text-color)',
        'light-bg': 'var(--light-bg-color)',
        'light-text': 'var(--light-text-color)',
      },
    },
  },
  plugins: [],
}