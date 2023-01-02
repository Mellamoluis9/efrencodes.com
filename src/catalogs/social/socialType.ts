export enum SocialTypeEnum {
	TWITTER = 'twitter',
	LINKEDIN = 'linkedIn',
	GITHUB = 'github',
	MAIL = 'correo electrónico'
}

export type Social = {
	active: boolean
	name: SocialTypeEnum
	href: string
	content: string
	cover: string
	ariaLabel?: string
	footer: boolean
}
