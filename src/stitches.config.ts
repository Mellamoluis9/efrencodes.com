import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
	theme: {
		fonts: {
			sans: '"Inter", sans-serif'
		},
		colors: {
			// background
			primary: '#2A2A2D',
			secundary: '#F8F8F8',
			white: '#fff',
			black: '#000',
			// Grey
			grey900: '#000',
			grey800: '#191919',
			grey700: '#323232',
			grey600: '#4B4B4B',
			// Intents
			success100: '#66DDB3',
			success500: '#66C781',
			warning100: '#FFD688',
			warning500: '#FFBB38',
			danger100: '#FF8C8C',
			danger500: '#FF4040'
		},
		fontSizes: {
			1: '39px',
			2: '31px',
			3: '24px',
			4: '20px',
			5: '16px'
		},
		fontWeights: {
			light: '300',
			medium: '400'
		}
	}
})
