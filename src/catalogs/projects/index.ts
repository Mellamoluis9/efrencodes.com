import { Project } from 'catalogs/projects/projectType'

export const project: Project[] = [
	{
		name: 'OCC Mundial',
		url: 'https://www.occ.com.mx/',
		image: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1668485401/www.efrencodes.com/project.ts/app-occ-mundial.webp',
			alt: 'Project - OCC Mundial'
		},
		tecnologies: [
			{ name: 'React', color: 'red' },
			{ name: 'Nextjs', color: 'purple' },
			{ name: 'Grapqhl', color: 'orange' },
			{ name: 'API Rest', color: 'yellow' }
		]
	},
	{
		name: 'Suzuki México Autos',
		url: 'https://www.suzuki.com.mx/autos',
		image: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1668485401/www.efrencodes.com/project.ts/app-suzuki-mexico.webp',
			alt: 'Project - Suzuki México Autos'
		},
		tecnologies: [
			{ name: 'VueJS', color: 'blue' },
			{ name: 'Quasar Framework', color: 'purple' },
			{ name: 'Google Maps', color: 'pink' },
			{ name: 'API Rest', color: 'green' }
		]
	},
	{
		name: 'Bticino México',
		url: 'https://store.bticino.com.mx/',
		image: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1668485401/www.efrencodes.com/project.ts/app-bticino-mexico.webp',
			alt: 'Project - Store Bticino México'
		},
		tecnologies: [
			{ name: 'VueJS', color: 'purple' },
			{ name: 'Quasar Framework', color: 'pink' },
			{ name: 'Open Pay', color: 'blue' },
			{ name: 'API Rest', color: 'orange' }
		]
	},
	{
		name: 'Search Pokemon',
		url: 'https://prueba-occ-pokemon.vercel.app/',
		image: {
			src: 'https://res.cloudinary.com/efrencodes/image/upload/v1668485401/www.efrencodes.com/project.ts/app-pokemon.webp',
			alt: 'Project - Pokemon Search'
		},
		tecnologies: [
			{ name: 'JavaScript', color: 'purple' },
			{ name: 'React', color: 'yellow' },
			{ name: 'NES.css', color: 'cyan' },
			{ name: 'API Pokemon', color: 'gray' }
		]
	}
]
