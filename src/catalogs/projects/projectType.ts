type Image = {
	src: string
	alt: string
}

export type Project = {
	name: string
	url: string
	description?: string
	image: Image
	tecnologies: string[]
}
