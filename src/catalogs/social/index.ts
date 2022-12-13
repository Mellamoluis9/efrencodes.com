import { Social, SocialTypeEnum } from 'catalogs/social/socialType'

export const socialMedia: Social[] = [
	{
		active: false,
		name: SocialTypeEnum.GITHUB,
		href: 'https://github.com/efrencodes',
		content: 'Ve mis proyectos'
	},
	{
		active: false,
		name: SocialTypeEnum.LINKEDIN,
		href: 'https://www.linkedin.com/in/efrencodes/',
		content: 'Conecta conmigo'
	},
	{
		active: true,
		name: SocialTypeEnum.TWITTER,
		href: 'https://twitter.com/efrencodes',
		content: 'Preguntame o escríbeme @'
	}
]
