export enum SocialTypeEnum {
	TWITTER = 'twitter',
	LINKEDIN = 'linkedin',
	GITHUB = 'github'
}

export type Social = {
	active: boolean
	name: SocialTypeEnum
	href: string
	content: string
}
