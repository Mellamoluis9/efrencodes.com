import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
	'*': { margin: 0, padding: 0, boxSizing: 'border-box' },
	'html, body': {
		fontFamily: '$sans',
		fontWeight: '$light',
		backgroundColor: '$secundary'
	}
})

const MyApp = ({ Component, pageProps }: AppProps) => {
	globalStyles()
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
