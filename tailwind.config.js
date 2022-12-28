module.exports = {
  content: [
    'pages/**/*.vue',
    'layouts/**/*.vue',
    'components/**/**.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
    },
  },
  plugins: []
}