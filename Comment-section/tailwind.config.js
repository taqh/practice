/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Rubik: ['Rubik', 'sans-serif'],
			},
			screens: {
				xsm: '23.4375em',
				sm: '26.5625em',
				md: '48em',
				lg: '64em',
				xl: '80em',
				xxl: '90em',
			},
			colors: {
				// Primary //
				SoftRed: 'hsl(358 79% 66%)',
				PaleRed: 'hsl(357 100% 86%)',
				LightBlue: 'hsl(239 57% 85%)',
				ModerateBlue: 'hsl(238 40% 52%)',

				/* Neutral */
				DarkBlue: 'hsl(212 24% 26%)',
				GrayBlue: 'hsl(211 10% 45%)',
				LightGray: 'hsl(223 19% 93%)',
				Fade: 'hsl(228 33% 97%)',
				
				// dark mode
				// SoftBlue: 'hsl(227 58% 65%)',
				// Gray: 'hsl(214 7% 19%)',
				// Username: 'hsl(0 0% 100%)',
				// Vote: 'hsl(206 9% 15%)',
				// DarkGray: 'hsl(206 9% 15%)',
				// PaleBlue: 'hsl(225 17% 91%)',
				// TextArea: 'hsl(225 7% 24%)',
			},
		},
	},
	plugins: [/*require('@tailwindcss/forms')*/],
};
