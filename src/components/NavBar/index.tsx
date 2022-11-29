import {
	NavBar as Container,
	IconsContainer,
	ListContainer,
	MenuContainer
} from './styles'
import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'
import CustomLink from 'components/common/CustomLink'

const NavBar = () => {
	return (
		<Container>
			<CustomLink href="/" isInternalLink>
				<h1>Efren Martinez</h1>
			</CustomLink>
			<MenuContainer>
				<ListContainer>
					<li>
						<CustomLink href="/" isInternalLink>
							Artículos
						</CustomLink>
					</li>
				</ListContainer>
				<IconsContainer>
					{SOCIAL.filter((social) => social.active === !true).map(
						({ name, href }) => (
							<CustomLink href={href}>
								<SocialMediaButton type={name} />
							</CustomLink>
						)
					)}
				</IconsContainer>
			</MenuContainer>
		</Container>
	)
}

export default NavBar
