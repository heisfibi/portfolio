/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widester: '.25em',
    },
    extend: {
      screens: {
        '3xl': '2000px',
        // => @media (min-width: 640px) { ... }
      },
      scale: {
        '6400': '64',
      },
      fontFamily: {
        trade_gothic: ["Trade_Gothic", "serif"],
        oblique: ["Oblique", "serif"],
        chaparral:["Chaparral W01","sans"]
      },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'almost-black':{ 
        100: '#1D1B26',
        500: '#16161D',
      },
      'gold': '#ECC015',
      'white': '#FFFFFF',
      'gray':{
        100:'#E4E5E6',
        500:'#363D45',
      },
      'purple':'#7A548B',
      'teal':{
        100:'#E8F2F3',
        500:'#008A90',
    },
      'orange':{
        100: '#F5F1E4',
        500: '#E7842E',
      },
      'blue':{
        100:'#E7F2F8',
        300:'#4896CF',
        500:'#004380'
      },
      'linkblue':{
        100:"#006DD0",
      }

    },},
  },
  plugins: [
    
  ]
}
