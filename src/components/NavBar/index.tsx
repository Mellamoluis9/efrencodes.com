import Link from 'next/link'
import { NavBar as Container, IconsContainer } from './styles'
import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'

const NavBar = () => {
	return (
		<Container>
			<Link href="/">
				<h1>Efren Martinez</h1>
			</Link>
			<IconsContainer>
				{SOCIAL.filter((social) => social.active === !true).map(
					({ name, href }) => (
						<a href={href} target="_blank">
							<SocialMediaButton type={name} />
						</a>
					)
				)}
			</IconsContainer>
		</Container>
	)
}

export default NavBar
