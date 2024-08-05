/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      screens: {
         'big-desktop': { min: '112.5em' },
         // => @media (min-width: 1800px) { ... }

         'tab-land': { max: '1279px' },
         // => @media (max-width: 1279px) { ... }

         'tab-port': { max: '1023px' },
         // => @media (max-width: 1023px) { ... }

         'tab-small': { max: '767px' },
         // => @media (max-width: 767px) { ... }

         phone: { max: ' 639px' },
         // => @media (max-width: 639px) { ... }
      },
      extend: {
         backgroundImage: {
            'simplify-desktop': "url('images/bg-simplify-section-desktop.svg')",
            'simplify-mobile': "url('images/bg-simplify-section-desktop.svg')",
         },
         backgroundPosition: {
            'position-tab-land': '10rem 0',
            'position-tab-small': '140% 0rem',
            'position-phone': '140% 0rem',
         },
         boxShadow: {
            main_btn: ' 0px 0px 10px  hsl(12, 88%, 59%) ',
         },
         colors: {
            'color-primary': {
               900: 'hsl(12, 88%, 59%)',
               600: 'hsl(12, 88%, 69%)',
               400: 'hsl(12, 88%, 95%)',
            },
            'color-secondary': 'hsl(228, 39%, 23%)',
            'color-paragraph': {
               900: ' hsl(233, 12%, 13%)',
               600: 'hsl(227, 12%, 61%)',
            },
            'color-VeryPaleRed': 'hsl(13, 100%, 96%)',
            'color-VeryLightGray': 'hsl(0, 0%, 98%)',
         },
         fontFamily: {
            Vietnam: 'Be Vietnam Pro, sans-serif', // Adds a new `font-display` class
         },
      },
   },
   plugins: [],
};
