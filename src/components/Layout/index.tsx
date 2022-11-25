import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { LayoutContainer } from './styles'
import { Props } from './types'

const Layout = ({ children }: Props) => {
	return (
		<LayoutContainer>
			<NavBar />
			{children}
			<Footer />
		</LayoutContainer>
	)
}

export default Layout
