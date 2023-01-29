export interface metadataProps {
	url: string
	title: string
	description: string
	keywords: string
	openGraph: {
		url: string
		siteName: string
		images: {
			url: string
			width: number
			height: number
		}
		locale: string
		type: string
		creator: string
	}
}

export const metadataDefault: metadataProps = {
	url: 'https://efrencodes.com',
	title: 'Efrén Martínez ✦ @efrencodes',
	description:
		'Desarrollador Frontend especializado en #javascript #vue #react #typescript',
	keywords:
		'querétaro,tecnologia,software,web,desarrollo,fullstack,software engineer,developer,jamstack,vuejs,reactjs,méxico,typescript',
	openGraph: {
		url: 'https://efrencodes.com',
		siteName: 'Efrén Martínez ✦ @efrencodes',
		images: {
			url: 'https://res.cloudinary.com/efrencodes/image/upload/v1674800149/www.efrencodes.com/og-image-efrencodes.webp',
			width: 1920,
			height: 1080
		},
		locale: 'es-MX',
		type: 'website',
		creator: '@efrencodes'
	}
}

export const structuredData = {
	'@context': 'http://schema.org',
	'@type': 'Person',
	email: 'mailto:efrencodes@gmail.com',
	image: '',
	jobTitle: 'Desarrollador Frontend',
	name: 'Efrén Martínez',
	url: 'https://www.efrencodes.com/'
}
