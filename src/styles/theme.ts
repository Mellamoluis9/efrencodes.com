import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				bg: '#fff',
				color: '#15141a',
				fontSize: '14px'
			},
			h1: {
				letterSpacing: '-0.03em',
				fontSize: '1.875rem',
				lineHeight: '1.2',
				fontWeight: '500 !important'
			},
			h2: {
				fontSize: '1.8rem',
				lineHeight: '1.2',
				letterSpacing: '-0.03em',
				fontWeight: '500 !important'
			},
			h3: {
				fontSize: '1.6rem !important',
				lineHeight: '1.2',
				letterSpacing: '-0.02em',
				fontWeight: '500 !important'
			},
			'p, ul, span': {
				fontSize: '1.125rem',
				lineHeight: '2',
				letterSpacing: '-0.01em',
				fontWeight: '400',
				color: '#5b5b66'
			}
		}
	},
	fonts: {
		heading: `'Montserrat', Helvetica, Arial, sans-serif`,
		body: `'Montserrat', Helvetica, Arial, sans-serif`
	}
})

export default theme
