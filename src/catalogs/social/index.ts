import { Social, SocialTypeEnum } from 'catalogs/social/socialType'

export const socialMedia: Social[] = [
	{
		active: false,
		name: SocialTypeEnum.GITHUB,
		href: 'https://github.com/efrencodes',
		content: 'Ve mis proyectos',
		cover: 'https://res.cloudinary.com/efrencodes/image/upload/v1672196109/www.efrencodes.com/tecnologies/github.svg'
	},
	{
		active: false,
		name: SocialTypeEnum.LINKEDIN,
		href: 'https://www.linkedin.com/in/efrencodes/',
		content: 'Conecta conmigo',
		cover: 'https://res.cloudinary.com/efrencodes/image/upload/v1672196105/www.efrencodes.com/tecnologies/linkedin.svg'
	},
	{
		active: true,
		name: SocialTypeEnum.TWITTER,
		href: 'https://twitter.com/efrencodes',
		content: 'Preguntame o escríbeme @',
		cover: 'https://res.cloudinary.com/efrencodes/image/upload/v1672196178/www.efrencodes.com/tecnologies/twitter.svg'
	}
]
