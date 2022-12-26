import { FC } from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Props } from './types'

const CustomLink: FC<Props> = ({
	href = '#',
	children,
	isInternalLink = false,
	isExternal = false
}) => {
	if (isInternalLink) {
		return (
			<Link as={NextLink} href={href} passHref legacyBehavior>
				<a>{children}</a>
			</Link>
		)
	}
	return (
		<Link href={href} isExternal={isExternal} rel="noopener noreferrer">
			{children}
		</Link>
	)
}

export default CustomLink
