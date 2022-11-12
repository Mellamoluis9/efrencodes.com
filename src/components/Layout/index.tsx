import { styled } from '@stitches/react'

const Container = styled('main', {})

const Header = styled('header', {
	color: '$grey600'
})

const Layout = ({ children }) => {
	return (
		<Container>
			<Header>
				<h1>Efren Martinez</h1>
			</Header>
			{children}
		</Container>
	)
}

export default Layout
