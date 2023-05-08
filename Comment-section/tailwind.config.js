/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Rubik: ['Rubik', 'sans-serif'],
			},
			keyframes: {
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				up: {
					'0%': { transform: 'translateY(1rem)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				down: {
					'0%': { transform: 'translateY(-2rem)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				fade: 'fade .6s forwards',
				up: 'up .6s forwards',
				down: 'down .6s forwards',
			},
			screens: {
				xsm: '23.4375em',
				sm: '26.5625em',
				md: '48em',
				lg: '64em',
				xl: '80em',
				xxl: '90em',
				"max-md": { max: "47.98em" },
				'max-sm': { max: '26.5em' },
			},
			colors: {
				// Primary //
				SoftRed: 'hsl(358 79% 66%)',
				PaleRed: 'hsl(357 100% 86%)',
				LightBlue: 'hsl(239 57% 85%)',
				ModerateBlue: 'hsl(238 40% 52%)',
				/* Neutral */
				Fade: 'hsl(228 33% 97%)',
				DarkBlue: 'hsl(212 24% 26%)',
				GrayBlue: 'hsl(211 10% 45%)',
				LightGray: 'hsl(223 19% 93%)',
				
				// dark mode
				Gray: 'hsl(214 7% 19%)',
				Vote: 'hsl(206 9% 15%)',
				Username: 'hsl(0 0% 100%)',
				DarkGray: 'hsl(206 9% 15%)',
				TextArea: 'hsl(225 7% 24%)',
				SoftBlue: 'hsl(227 58% 65%)',
				PaleBlue: 'hsl(225 17% 91%)',
				DarkRed: 'hsl(358, 86%, 60%)', 
				Blueish: 'hsl(239, 80%, 62%)',
			},
		},
	},
	plugins: [
		/*require('@tailwindcss/forms')*/
	],
};
