import { FC } from 'react'
import {
	LinkedInLogoIcon,
	GitHubLogoIcon,
	TwitterLogoIcon
} from '@radix-ui/react-icons'
import { SocialTypeEnum } from 'catalogs/social/socialType'
import { Props } from './types'

const SocialMediaButton: FC<Props> = ({ type }) => {
	const SIZE_ICON: number = 24
	const COLOR_ICON: string = 'rgb(112, 113, 114)'

	if (type === SocialTypeEnum.GITHUB)
		return (
			<GitHubLogoIcon
				color={COLOR_ICON}
				height={SIZE_ICON}
				width={SIZE_ICON}
			/>
		)
	else if (type === SocialTypeEnum.LINKEDIN)
		return (
			<LinkedInLogoIcon
				color={COLOR_ICON}
				height={SIZE_ICON}
				width={SIZE_ICON}
			/>
		)
	else if (type === SocialTypeEnum.TWITTER)
		return (
			<TwitterLogoIcon
				color={COLOR_ICON}
				height={SIZE_ICON}
				width={SIZE_ICON}
			/>
		)
}

export default SocialMediaButton
