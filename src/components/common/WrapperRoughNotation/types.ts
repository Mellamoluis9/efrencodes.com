import React from 'react'

export type Props = {
	children: React.ReactNode
	type?:
		| 'underline'
		| 'box'
		| 'circle'
		| 'highlight'
		| 'strike-through'
		| 'crossed-off'
	color?: string
}
