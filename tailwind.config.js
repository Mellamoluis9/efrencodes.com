/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontSize: {
				xs: '.75rem',
				sm: '.875rem',
				tiny: '.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '3.75rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
				'9xl': '8rem'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const classes = {
				'.bg-blobs': {
					backgroundImage: 'radial-gradient(#f1f1f1 1px, #FFF 1px)',
					backgroundSize: '25px 25px'
				}
			}

			addUtilities(classes)
		})
	]
}
