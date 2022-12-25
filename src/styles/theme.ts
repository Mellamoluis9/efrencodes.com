import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				bg: '#f4f4f5',
				color: '#15141a'
			}
		}
	},
	fonts: {
		heading: `'Montserrat', Helvetica, Arial, sans-serif`,
		body: `'Montserrat', Helvetica, Arial, sans-serif`
	}
})

export default theme
