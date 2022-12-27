import { tecnologiesProps } from 'catalogs/projects/projectType'
export interface Props {
	key: string
	src: string
	alt: string
	href: string
	name: string
	tecnologies: [
		tecnologiesProps,
		tecnologiesProps,
		tecnologiesProps,
		tecnologiesProps
	]
	backgroundImage: string
}
