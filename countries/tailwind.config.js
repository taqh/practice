/** @type {import('tailwindcss').Config} */
export default {
   content: [],
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
      },
   },
   plugins: [],
};
