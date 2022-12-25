interface Image {
	src: string
	alt: string
}

export interface tecnologiesProps {
	name: string
	color: string
}

export interface Project {
	name: string
	url: string
	description?: string
	image: Image
	tecnologies?: [
		tecnologiesProps,
		tecnologiesProps,
		tecnologiesProps,
		tecnologiesProps
	]
}
