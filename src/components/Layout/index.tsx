import { styled } from '@stitches/react'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'

const Container = styled('main', {})

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />
			{children}
			<Footer />
		</Container>
	)
}

export default Layout
