import '@/styles/globals.css'
import '@/styles/solarized_dark.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
