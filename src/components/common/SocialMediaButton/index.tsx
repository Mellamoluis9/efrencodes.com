import { FC } from 'react'
import {
	LinkedInLogoIcon,
	GitHubLogoIcon,
	TwitterLogoIcon
} from '@radix-ui/react-icons'
import { SocialTypeEnum } from 'types/socialType'
import { Props } from './types'

const SocialMediaButton: FC<Props> = ({ type }) => {
	const SIZE_ICON: number = 24

	if (type === SocialTypeEnum.GITHUB)
		return <GitHubLogoIcon height={SIZE_ICON} width={SIZE_ICON} />
	else if (type === SocialTypeEnum.LINKEDIN)
		return <LinkedInLogoIcon height={SIZE_ICON} width={SIZE_ICON} />
	else if (type === SocialTypeEnum.TWITTER)
		return <TwitterLogoIcon height={SIZE_ICON} width={SIZE_ICON} />
}

export default SocialMediaButton
