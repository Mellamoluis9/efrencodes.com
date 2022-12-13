import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Layout>
	)
}

export default MyApp
