import { styled } from '@stitches/react'

export const LinkNormal = styled('a', {
	textDecoration: 'inherit',
	color: 'inherit'
})

export const LinkCustom = styled('a', {
	textDecoration: 'inherit',
	color: '$grey800',
	fontWeight: '$medium',
	fontSize: '$5',
	marginRight: '24px'
})
