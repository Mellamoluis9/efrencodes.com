import React from 'react'
import { LinkNormal } from './styles'

type Props = {
	href?: string
	children: React.ReactNode
}

const CustomLink = ({ href = '#', children }: Props) => {
	return (
		<LinkNormal href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</LinkNormal>
	)
}

export default CustomLink
