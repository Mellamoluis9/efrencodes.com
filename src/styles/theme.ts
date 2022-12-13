import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#fff'
			}
		}
	},
	fonts: {
		heading: `'Inter', sans-serif`,
		body: `'Inter', sans-serif`
	}
})

export default theme
