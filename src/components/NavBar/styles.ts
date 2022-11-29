import { styled } from '@stitches/react'

export const NavBar = styled('nav', {
	height: '80px',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between'
})

export const IconsContainer = styled('div', {
	width: '64px',
	display: 'flex',
	justifyContent: 'space-between'
})

export const ListContainer = styled('ul', {
	listStyleType: 'none',
	margin: 0,
	padding: 0
})

export const MenuContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center'
})
