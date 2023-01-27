import { FC } from 'react'
import { NavBar } from '@components/index'
import { Props } from './types'
import { Inter } from '@next/font/google'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500']
})

const Layout: FC<Props> = ({ children }) => {
	return (
		<div
			className={`${inter.className} relative z-10 mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8`}
		>
			<NavBar />
			{children}
		</div>
	)
}

export default Layout
