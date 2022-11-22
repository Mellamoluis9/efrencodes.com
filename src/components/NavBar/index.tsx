import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { NavBar as Container, Icons } from './styles'
import { socialMedia as SOCIAL } from 'catalogs/social'

const SIZE_ICON: number = 24

const NavBar = () => {
	return (
		<Container>
			<Link href="/">
				<h1>Efren Martinez</h1>
			</Link>
			<Icons>
				<a href={SOCIAL[0].href} target="_blank">
					<GitHubLogoIcon height={SIZE_ICON} width={SIZE_ICON} />
				</a>
				<a href={SOCIAL[1].href} target="_blank">
					<LinkedInLogoIcon height={SIZE_ICON} width={SIZE_ICON} />
				</a>
			</Icons>
		</Container>
	)
}

export default NavBar
