import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { Props } from './types'

const Layout = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}

export default Layout
