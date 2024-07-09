/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
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
        map: "url('/OtherBg.png')",
        cart: "url('/hero-cart.png')",
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        forms: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
