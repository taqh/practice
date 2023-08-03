/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            // neutral
            White: 'hsl(0, 0%, 100%)',

            // Light mode //
            TxtLight: 'hsl(200, 15%, 8%)',
            LightInput: 'hsl(0, 0%, 52%)',
            LightBg: 'hsl(0, 0%, 98%)',

            // Dark mode
            DarkBlue: 'hsl(209, 23%, 22%)',
            DarkBg: 'hsl(207, 26%, 17%)',
         },
         screens: {
            xsm: '23.4375em',
            sm: '26.5625em',
            md: '48em',
            lg: '64em',
            xl: '80em',
            xxl: '90em',
            'max-md': { max: '47.98em' },
            'max-sm': { max: '26.5em' },
         },
      },
   },
   plugins: [],
};
