import { FC } from 'react'
import Link from 'next/link'
import { CustomLinkProps } from './types'

const CustomLink: FC<CustomLinkProps> = ({
	href = '#',
	children,
	isInternalLink = false,
	isExternal = false,
	className,
	nameEvent,
	...rest
}) => {
	if (isInternalLink) {
		return (
			<Link href={href} passHref legacyBehavior>
				<a {...rest}>{children}</a>
			</Link>
		)
	}
	return (
		<a
			href={href}
			target={isExternal ? '_blank' : '_parent'}
			rel="noopener noreferrer"
			{...rest}
			className={
				className
					? className
					: 'hover:underline decoration-indigo-500 underline-offset-4 decoration-2'
			}
			data-splitbee-event={nameEvent}
		>
			{children}
		</a>
	)
}

export default CustomLink
