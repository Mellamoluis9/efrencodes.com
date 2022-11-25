import { FC } from 'react'
import { LinkNormal } from './styles'
import { Props } from './types'

const CustomLink: FC<Props> = ({ href = '#', children }) => {
	return (
		<LinkNormal href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</LinkNormal>
	)
}

export default CustomLink
