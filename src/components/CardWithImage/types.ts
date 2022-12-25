import { tecnologiesProps } from 'catalogs/projects/projectType'
export interface Props {
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
}
