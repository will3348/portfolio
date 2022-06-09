module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Ubuntu':['Ubuntu'],
      'cursive':['Indie Flower', 'cursive']
      
    },
    screens: {
      'xs': '240px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
