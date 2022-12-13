export enum SocialTypeEnum {
	TWITTER = 'twitter',
	LINKEDIN = 'linkedIn',
	GITHUB = 'github'
}

export type Social = {
	active: boolean
	name: SocialTypeEnum
	href: string
	content: string
}
