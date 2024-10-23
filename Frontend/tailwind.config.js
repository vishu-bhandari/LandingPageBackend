/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D6BB"

      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
           
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
            borderRadius:'50%'
          
          },
        },
        linkglow: {
          '0%, 100%': { boxShadow: '0 0 50px rgba(255, 165, 0, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 165, 0, 1)' },
        },
        tealglow: {
          '0%, 100%': { boxShadow: '0 0 50px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(0, 255, 255, 1)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite alternate',
        linkglow: 'linkglow 1.5s infinite alternate',
        tealglow:'tealglow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}