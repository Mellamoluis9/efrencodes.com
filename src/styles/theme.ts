import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				bg: '#F7FAFC',
				color: '#15141a',
				fontSize: '14px'
			},
			h1: {
				fontSize: '1.875rem',
				lineHeight: '1.2',
				letterSpacing: '-0.03em'
			},
			h2: {
				fontSize: '.8rem',
				lineHeight: '1.2',
				letterSpacing: '-0.03em'
			},
			h3: {
				fontSize: '1rem',
				lineHeight: '1.2',
				letterSpacing: '-0.02em'
			},
			'p, ul, span': {
				fontSize: '1.125rem',
				lineHeight: '2',
				letterSpacing: '-0.01em',
				fontWeight: 'medium',
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
