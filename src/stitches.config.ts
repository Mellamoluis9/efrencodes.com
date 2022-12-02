import { gray, pink, blue, purple } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
	theme: {
		fonts: {
			sans: '"Inter", sans-serif'
		},
		colors: {
			...gray,
			...blue,
			...pink,
			...purple
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
