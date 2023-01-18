import { Flex, Divider } from '@chakra-ui/react'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'
import { Props } from './types'

const Layout = ({ children }: Props) => {
	return (
		<Flex
			width="100%"
			maxWidth="container.lg"
			flex="1"
			flexDirection="column"
			marginX="auto"
			px={4}
			py={12}
		>
			<NavBar />
			{children}
			<Divider />
			<Footer />
		</Flex>
	)
}

export default Layout
