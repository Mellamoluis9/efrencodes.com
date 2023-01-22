import { FC } from 'react'
import { Footer, NavBar } from '@components/index'
import { Props } from './types'

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}

export default Layout
