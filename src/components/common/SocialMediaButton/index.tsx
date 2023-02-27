import { FC } from 'react'
import {
	LinkedInLogoIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
	EnvelopeOpenIcon
} from '@radix-ui/react-icons'
import { SocialTypeEnum } from '@/data/social/socialType'
import { SocialMediaButtonProps } from './types'

const SocialMediaButton: FC<SocialMediaButtonProps> = ({
	type,
	color = 'rgb(112, 113, 114)',
	size = 24
}) => {
	if (type === SocialTypeEnum.GITHUB)
		return <GitHubLogoIcon color={color} height={size} width={size} />
	else if (type === SocialTypeEnum.LINKEDIN)
		return <LinkedInLogoIcon color={color} height={size} width={size} />
	else if (type === SocialTypeEnum.TWITTER)
		return <TwitterLogoIcon color={color} height={size} width={size} />
	else if (type === SocialTypeEnum.MAIL)
		return <EnvelopeOpenIcon color={color} height={size} width={size} />
}

export default SocialMediaButton
