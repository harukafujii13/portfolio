/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#374C59',
        'primary-pink': '#FE84EB',
        'primary-purple': '#7A62F7',
        'primary-yellow': '#FDF100',
        'primary-green': '#00FECB',
      },
    },
  },
  plugins: [],
};
