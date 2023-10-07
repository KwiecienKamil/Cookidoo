/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '300px',
        md: '800px',
        lg: '1400px'
      },
      fontFamily: {
        roboto: 'Roboto'
      },
      colors: {
        green: "#113c2b",
        litegreen: "#009a3d",
        dark: 'rgba(0,0,0,.4)',
        hovered: '#efefef'
      },
      backgroundImage: {
        'food': "https://assets.tmecosys.com/image/upload/t_web1440x450@2x/cdn/contentful/UuQRy6JEESKrqRDZHBWge/a17da48ce5e79b925564cacca661c47e/shutterstock_526855693-min.jpg"
      }
    },
  },
  plugins: [],
}

