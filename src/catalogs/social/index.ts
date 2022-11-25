import { Social, SocialTypeEnum } from 'types/socialType'

export const socialMedia: Social[] = [
	{
		active: false,
		name: SocialTypeEnum.GITHUB,
		href: 'https://github.com/efrencodes',
		content: 'Sígueme en github'
	},
	{
		active: false,
		name: SocialTypeEnum.LINKEDIN,
		href: 'https://www.linkedin.com/in/efrencodes/',
		content: 'Ponte en contacto'
	},
	{
		active: true,
		name: SocialTypeEnum.TWITTER,
		href: 'https://twitter.com/efrencodes',
		content: 'Escríbeme en'
	}
]
