import { FC } from 'react'
import Link from 'next/link'
import { CustomLinkProps } from './types'

const CustomLink: FC<CustomLinkProps> = ({
	href = '#',
	children,
	isInternalLink = false,
	isExternal = false,
	ariaLabel = ''
}) => {
	if (isInternalLink) {
		return (
			<Link href={href} passHref legacyBehavior>
				<a>{children}</a>
			</Link>
		)
	}
	return (
		<a
			href={href}
			target={isExternal && '_blank'}
			rel="noopener noreferrer"
			aria-label={ariaLabel}
		>
			{children}
		</a>
	)
}

export default CustomLink
