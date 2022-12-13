import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'
import CustomLink from 'components/common/CustomLink'

const NavBar = () => {
	return (
		<nav>
			<CustomLink href="/" isInternalLink>
				<h1>Efren Martinez</h1>
			</CustomLink>
			<div>
				<ul>
					<li>
						<CustomLink href="/" isInternalLink>
							Artículos
						</CustomLink>
					</li>
				</ul>
				<div>
					{SOCIAL.filter((social) => social.active === !true).map(
						({ name, href }) => (
							<CustomLink href={href}>
								<SocialMediaButton type={name} />
							</CustomLink>
						)
					)}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
