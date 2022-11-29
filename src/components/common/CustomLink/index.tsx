import { FC } from 'react'
import Link from 'next/link'
import { LinkNormal, LinkCustom } from './styles'
import { Props } from './types'

const CustomLink: FC<Props> = ({
	href = '#',
	children,
	isInternalLink = false
}) => {
	if (isInternalLink) {
		return (
			<Link href={href} passHref legacyBehavior>
				<LinkCustom>{children}</LinkCustom>
			</Link>
		)
	}
	return (
		<LinkNormal href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</LinkNormal>
	)
}

export default CustomLink
