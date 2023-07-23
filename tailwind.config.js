/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        'primary-text': '#411557',
        'primary-pink': '#F8B9E3',
        'primary-purple': '#7A62F7',
        'primary-yellow': '#FDF100',
        'primary-green': '#93FEB6',
        'primary-red': '#DE777D',
        'bg-light': '#f5f5f5',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
