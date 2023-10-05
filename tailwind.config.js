/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "firstred": "#CD081D",
        "productsred": "#840303 ",
        "navbg":"#5e48db",
        "textcolor": "#5e48db",
        "ptext":"#6d6c75",
        "bgconnect":" #efedfc",
        "connect":"#5e48db",
        "bgexpress":" #fff8eb",
        "express":"#f8ac12",
        "bgshare":"#e6f6f0",
        "share":"#04ad68",
        "yellowtext":"#fad68d",
        "yellowbg":"#f8ab11",
        "circle":"#8b7be2",
        "greentext":"#04ad68",
        "blueishtext":"#2dc3f5"
      },
      keyframes:{
        cursorblink:{
          '49%': { backgroundColor: '#fff' },
          '50%': { backgroundColor: 'transparent' },
          '99%': { backgroundColor: 'transparent' },
        },
        pulse: {
         ' 0%, 100%': { opacity:'1'},
         '50%': {opacity: '0.3'},
        },
       
        slide:{
          '100%':{ top:'-360px'},
        },
        scroll:{
          '0%':{transform : 'translateX(0)'},
          '100%':{transform : 'translateX(calc(-250px *9))'}

        },
        scrolltwo:{
          '0%':{transform : 'translateX(calc(-250px *9))'},
          '100%':{transform : 'translateX(0)'}

        },
        // typing:{
        //   '40%, 60%':{ left:'calc(100% + 30px)'},
        //   '100%':{left:'0'}

        // }222222222222222222

      },
     

    },
    animation:{
      'slide':'slide 12s steps(4) infite',
      // 'typing': ' typing 3s steps(10) infinite'
      'cursorblink': 'cursorblink 1s  infinite',
       'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
       'scroll': 'scroll 40s linear infinite',
       'scrolltwo': 'scrolltwo 40s linear infinite',
   

    },
    fontFamily:{
      inter:["inter"],
      textstyle:["Figtree"]
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
    }
  },
  plugins: [],
}

