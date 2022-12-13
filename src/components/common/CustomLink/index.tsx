import { FC } from 'react'
import Link from 'next/link'
import { Props } from './types'

const CustomLink: FC<Props> = ({
	href = '#',
	children,
	isInternalLink = false
}) => {
	if (isInternalLink) {
		return (
			<Link href={href} passHref legacyBehavior>
				<a>{children}</a>
			</Link>
		)
	}
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	)
}

export default CustomLink
