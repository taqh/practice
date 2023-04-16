/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Rubik: ['Rubik', 'sans-serif'],
			},
			screens: {
				sm: '26.5625em',
				md: '48em',
				lg: '64em',
				xl: '80em',
				xxl: '90em',
			},
			colors: {
				// Primary //
				ModerateBlue: 'hsl(238 40% 52%)',
				SoftRed: 'hsl(358 79% 66%)',
				LightBlue: 'hsl(239 57% 85%)',
				PaleRed: 'hsl(357 100% 86%)',

				/* Neutral */
				DarkBlue: 'hsl(212 24% 26%)',
				GrayBlue: 'hsl(211 10% 45%)',
				LightGray: 'hsl(223 19% 93%)',
				'Very-lightgray': 'hsl(228 33% 97%)',
			},
		},
	},
	// plugins: [require('@tailwindcss/forms')],
};
