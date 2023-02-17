import React from 'react'

export type CustomLinkProps = {
	href?: string
	children: React.ReactNode
	isInternalLink?: boolean
	isExternal?: boolean
	ariaLabel?: string
	className?: string
	nameEvent?: string
}
