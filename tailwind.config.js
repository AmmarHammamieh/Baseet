

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}", 

],
  theme: {
    extend: {
      fontFamily: {
        'Somar-Black': ['Somar-Black'],
        'Somar-BlackItalic': ['Somar-BlackItalic'],
        'Somar-Bold': ['Somar-Bold'],
        'Somar-BoldItalic': ['Somar-BoldItalic'],
        'Somar-ExtraBold': ['Somar-ExtraBold'],
        'Somar-ExtraLight': ['Somar-ExtraLight'],
        'Somar-ExtraBoldItalic': ['Somar-ExtraBoldItalic'],
        'Somar-ExtraLightItalic': ['Somar-ExtraLightItalic'],
        'Somar-Light': ['Somar-Light'],
        'Somar-LightItalic': ['Somar-LightItalic'] ,
        'Somar-Medium': ['Somar-Medium'] ,
        'Somar-MediumItalic': ['Somar-MediumItalic'] ,
        'Somar-Regular': ['Somar-Regular'] ,
        'Somar-RegularItalic': ['Somar-RegularItalic'] ,
        'Somar-SemiBold': ['Somar-SemiBold'] ,
        'Somar-SemiBoldItalic': ['Somar-SemiBoldItalic'] ,
        'Somar-Thin': ['Somar-Thin'] ,
        'Somar-ThinItalic': ['Somar-ThinItalic'] ,
      },
      backgroundImage: { 'hero': "url('./images/AndroidSignInCover.svg')" },
      keyframes: {
        Showup: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.7' },
          '90%': { opacity: '0.8' },
          '100%': { opacity: '1'},
        },
        wave: {
          '0%': { opacity: '0' },

          '70%': { opacity: '0.5' },
          '80%': { opacity: '0.7' },
          '90%': { opacity: '0.8' },
          '100%': { opacity: '1'},
        },
        Keyname: {
          '0%': { transform: 'rotate(-9deg)' },
          '25%': { transform: 'rotate(-18deg)' },
          '50%': { transform: 'rotate(-26deg)' },
          '75%': { transform: 'rotate(-36deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        },
        Keypass: {
          '0%': { transform: 'rotate(18deg)' },
          '25%': { transform: 'rotate(36deg)' },
          '50%': { transform: 'rotate(54deg)' },
          '75%': { transform: 'rotate(72deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        KeyFull: {
          '0%': { transform: 'rotate(36deg)' },
          '25%': { transform: 'rotate(72deg)' },
          '50%': { transform: 'rotate(108deg)' },
          '75%': { transform: 'rotate(144deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        pulseFixed: {
          '0%': { opacity: '0' },

          '70%': { opacity: '0.5' },
          '80%': { opacity: '0.7' },
          '90%': { opacity: '0.8' },
          '100%': { opacity: '1', position:"fixed", bottom:"4",height:"75%",width:"50%","margin-left":"14px",},
        },
        pulseFixedimg: {
          '0%': { opacity: '0' },

          '70%': { opacity: '0.5' },
          '80%': { opacity: '0.7' },
          '90%': { opacity: '0.8' },
          '100%': { opacity: '1', position:"fixed", bottom:"64",width:"100% / 6","margin-left":"20px"},
        },
        Wheel: {
          '0%': { transform: 'rotate(0deg)' }, 
          '100%': { transform: 'rotate(180deg)' },
        },
        Cloud: {
          to: { 'margin-left': '14px' } 

        },
        SmallCloud: {
          to: { 'margin-left': '10px' } 
        },
        HOval: {
          to:{ 'width':'64px'}
        },
        VOval: {
          to:{ 'height':'50px'}
        },
        PopupImg: {
          '0%': { transform:'scale(0)' },

          '70%': { transform:'scale(0.2)' },
          '80%': { transform:'scale(0.5)' },
          '100%': { transform:'scale(1)'},
        },
        WordUp: {
          "75%":{
            transform: "translateY(-650px)"
          },
          '100%': {transform: "translateY(-680px)",  opacity:'0'},
        },
        TranslateImg: {
          "75%":{
            transform: "translateY(10px)",  
          },
          '100%': {transform: "translateY(0px)"},
        },
        WordOpacity: {
          '0%': { opacity: '0' },

          '70%': { opacity: '0.5' },
          '80%': { opacity: '0.7' },
          '90%': { opacity: '0.8' },
          '100%': { opacity: '1' }
        },
        ImgOpacity: {
          '0%': { opacity: '1' },

          '70%': { opacity: '0.8' },
          '80%': { opacity: '0.7' },
          '90%': { opacity: '0.5' },
          '100%': { opacity: '0' }
        },
        SpinImg: {
          from: {
            transform: "rotate(-1deg)"
          },
          to: {
            transform: "rotate(1deg)"
          }
        },
        WaveAnimate: {
          "0%":
          {
            width:"25%",
            opacity:"0.3",
            "clip-path": "polygon(1% 0%, 39% 0%, 33% 11%, 33% 20%, 40% 30%, 46% 38%, 47% 45%, 46% 54%, 38% 61%, 33% 69%, 31% 79%, 33% 89%, 38% 100%, 0% 100%)"
           
          },
          "50%": {
            width:"50%",
            opacity:"0.7",
            "clip-path": "polygon(1% 0%, 51% 0, 59% 11%, 60% 22%, 55% 34%, 50% 42%, 44% 50%, 47% 54%, 51% 64%, 58% 73%, 59% 86%, 54% 94%, 48% 100%, 0% 100%)"

          },
          "75%": {
            width:"75%",
            opacity:"0.8",
            "clip-path": "polygon(1% 0%, 85% 0, 77% 11%, 73% 20%, 76% 31%, 83% 38%, 86% 46%, 87% 56%, 85% 64%, 78% 74%, 74% 84%, 77% 93%, 85% 100%, 0% 100%)"
            
          },
          "100%":
          {
            width:"100%",
            opacity:"1",

          }
        },
        WaveAnimateBack: {
          "0%":
          {
            visibility:"visible",
            width:"100%",
            opacity:"0.8",
            "clip-path": "polygon(1% 0%, 75% 0, 81% 11%, 80% 23%, 75% 31%, 70% 41%, 70% 51%, 73% 60%, 77% 68%, 80% 75%, 80% 83%, 76% 93%, 72% 100%, 0% 100%)"
           
          },
          "50%": {
            visibility:"visible",
            width:"75%",
            opacity:"0.7",
            "clip-path": "polygon(1% 0%, 57% 0, 48% 17%, 46% 29%, 50% 35%, 60% 42%, 63% 51%, 59% 63%, 51% 70%, 48% 75%, 48% 82%, 51% 91%, 59% 100%, 0% 100%)"

          },
          "75%": {
            visibility:"visible",
            width:"50%",
            opacity:"0.5",
            "clip-path": "polygon(1% 0%, 28% 0, 38% 9%, 40% 19%, 41% 29%, 33% 41%, 29% 51%, 33% 58%, 41% 63%, 44% 74%, 44% 83%, 39% 92%, 29% 100%, 0% 100%)"
            
          },
          "100%":
          {
            visibility:"hidden",
            width:"0%",
            opacity:"0",

          }
        },
        translateOpacityDiv: {
          "25%": {
           
            transform: "translateY(150px)",
            opacity:"0",
          },

          "100%": {
           
            transform: "translateY(0px)",
             opacity:"1",
            
          },
        
        },
        Rotate: {
          to: {
            transform: "rotate(-3deg)"
          },
        },
        RotateR: {
          to: {
            transform: "rotate(-3deg)",
       
          },
        },
        RotateL: {
          to: {
            transform: "rotate(3deg)"
          },
        },
        RotateRope: {
          to: {
            transform: "rotate(-0.8deg)"
          },
        },
        RotateRopeBack: {
          to: {
            transform: "rotate(0.8deg)"
          },
        },
        Short: {
          to: {
            "margin-top":"-0.2rem",
          },
        },
        HardShort: {
          to: {
            "margin-top":"-0.5rem",
          },
        },
        BorderColor: {
          to: {
            "border-left-color": "coral",
            "border-bottom-color": "coral"
          },
        },
        RotateWheelsSLow:{
          '0%, 50%': {
           
            transform: "rotate(-90deg)"
          },

          '75%, 100%': {
           
            transform: "rotate(90deg)"
            
          },
        },
        RotateWheelsSLowBack:{
          '0%, 50%': {
           
            transform: "rotate(90deg)"
          },

          '75%, 100%': {
           
            transform: "rotate(-90deg)"
            
          },
        },
        RotateWheels:{
          '0%, 50%': {
           
            transform: "rotate(-180deg)"
          },

          '75%, 100%': {
           
            transform: "rotate(180deg)"
            
          },
        },
        RotateWheelsBack:{
          '0%, 50%': {
           
            transform: "rotate(180deg)"
          },

          '75%, 100%': {
           
            transform: "rotate(-180deg)"
            
          },
        },

        RotateBoard:{
          '0%, 50%': {
           
            transform: "rotate(0deg)"
          },

          '75%, 100%': {
           
            transform: "rotate(-2deg)"
            
          },
        },
        bgChangeColor: {
          to: {
            "background-color":"#EA676C",
          },
        },
      },
      BorderButton: {
        to: {
          "border-radius": "0.75rem",
          width: "100%",
          height: "100%",
        },
      },
      animation: {
        'waving-hand': 'wave 1s linear ',
        'Keyname': 'Keyname 1s ease-in ',
        'Keypass': 'Keypass 1s ease-in ',
        'KeyFull': 'KeyFull 1s ease-in ',

        'pulseFixed': 'pulseFixed 2s ease-in forwards',
        'pulseFixedimg': 'pulseFixedimg 2s ease-in forwards',
        'Wheel': 'Wheel 1s ease-in 1s  forwards',
        'Cloud': 'Cloud 1s ease-in 1s forwards',
        'SmallCloud': 'SmallCloud 1s ease-in 1s forwards',
        'HOval': 'HOval 1s ease-in 1s forwards',
        'VOval': 'VOval 1s ease-in 1s forwards',
        'PopupImg': 'PopupImg 1s ease-in  forwards',
        'WordUp': 'WordUp 2s ease-in  forwards',
        'WordOpacity': 'WordOpacity 2s ease-in  forwards',
        'ImgOpacity': 'ImgOpacity 0.5s ease-in  forwards',
        'TranslateImg': 'TranslateImg 1s ease-in  forwards',
        'SpinImg': 'SpinImg 2s linear 1s infinite ',
        'WaveAnimate': 'WaveAnimate 1s ease-in   ',
        'WaveAnimateBack': 'WaveAnimateBack 1s ease-in  forwards ',
        'translateOpacityDiv': 'translateOpacityDiv 2s ease-in  forwards ',
        'Rotate': 'Rotate 1s ease-out  forwards ',
        'RotateR': 'RotateR 0.5s ease-out  forwards ',
        'RotateL': 'RotateL 0.3s ease-out  forwards ',
        'RotateRope': 'RotateRope 1s ease-out  forwards ',
        'RotateRopeBack': 'RotateRopeBack 1s ease-out  forwards ',
        'BorderButton': 'BorderButton 0.2s ease-out  forwards ',
        'Short': 'Short 0.3s ease-out  forwards ',
        'HardShort': 'HardShort 0.3s ease-out  forwards ',
        'Showup': 'Showup 0.5s ease-out  forwards ',
        'bgChangeColor': 'bgChangeColor 0.3s ease-out  forwards ',
        'BorderColor': 'BorderColor 1s ease-out  forwards ',
        'RotateWheelsSLow': 'RotateWheelsSLow 3s ease-out  infinite',
        'RotateWheelsSLowBack': 'RotateWheelsSLowBack 3s ease-out   infinite ',
        'RotateWheels': 'RotateWheels 3s ease-out  infinite',
        'RotateWheelsBack': 'RotateWheelsBack 3s ease-out   infinite ',
        'RotateBoard': 'RotateBoard 3s ease-out   infinite ',

        
         
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
