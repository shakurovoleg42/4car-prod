/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A6EC1',
        darkMain: '#182F43',
        darkPrimary: '#1E3A8A',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        },
      },
      backgroundImage: {
        hero: "url('/hero-pattern.jpg')",
        shini: "url('/ShiniBg.png')",
        diski: "url('/DiskiBg.png')",
        stock: "url('/StockBg.png')",
        contact: "url('/ContactBg.png')",
        checkout: "url('/checkout-orderBG.png')",
        map: "url('/OtherBg.png')",
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        forms: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
