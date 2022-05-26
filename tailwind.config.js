module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Ubuntu':['Ubuntu']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
