// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['"Red Hat Display"', 'sans-serif'],
         millik:  ['Millik', 'sans-serif'] ,
      },
      fontSize: {
        sm: '12px',
        md: '16px',
        lg: '20px',
      },
      colors: {
        mecktest: '#1e40af', 
        neutral: '#FCFCFC',
        neutralWhite: '#FFFFFF',
        green: '#335F32',
        deepGray: '#979797',
        charcoalGray: '#4B4B4B',
        midGray: '#D9D9D9',
        offWhite: '#FFFFFF',
        onWhite: '#FFFFE8',
        tWhite: '#F9F9F0',
        aWhite: '#F9FAFB',
        bWhite: '#F5FDFF',
        cWhite: '#FFFDFA',
        sWhite: '#E4E4E4',
        grade: '#F5F5DE',
        special: '#667085',
        midGray2: '#E1E1E1',
        red: "#f85e37",
        lightGray: '#F0F0F0',
        tertiaryGreen: '#FAFFFA',
        transParent: '#00000033',
        ascentGreen: '#EAFFEA',
        new: '#98A2B3',
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(270deg, #335F32 42%, #EAA315 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
        "secondary-gradient": `linear-gradient(90deg, #FFFFFB 0%, #F6FDF4 50%, #FFEDCB 100%)`,
        "secondary-gradient-alt": `linear-gradient(314.28deg, #FFFFFB 28.4%, #F6FDF4 60.34%, #FFEDCB 81.21%)`,
        "tertiary-gradient": `linear-gradient(174.47deg, rgba(255, 255, 246, 0.6) 27.35%, rgba(252, 162, 17, 0.06) 62.37%, rgba(51, 95, 50, 0.12) 88.97%)`,
      },
    },
  },
  plugins: [],
};