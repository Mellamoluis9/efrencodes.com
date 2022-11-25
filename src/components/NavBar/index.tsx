import Link from 'next/link'
import { NavBar as Container, IconsContainer } from './styles'
import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'
import CustomLink from 'components/common/CustomLink'

const NavBar = () => {
	return (
		<Container>
			<Link href="/">
				<h1>Efren Martinez</h1>
			</Link>
			<IconsContainer>
				{SOCIAL.filter((social) => social.active === !true).map(
					({ name, href }) => (
						<CustomLink href={href}>
							<SocialMediaButton type={name} />
						</CustomLink>
					)
				)}
			</IconsContainer>
		</Container>
	)
}

export default NavBar
