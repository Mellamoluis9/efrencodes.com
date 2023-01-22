import { socialMedia as SOCIAL } from 'catalogs/social'
import { SocialMediaButton, CustomLink } from '@components/index'

const NavBar = () => {
	return (
		<nav>
			<div>
				<CustomLink href="/" isInternalLink>
					<p>Inicio</p>
				</CustomLink>
				<CustomLink href="/sobre-mi" isInternalLink>
					<p>Sobre mí</p>
				</CustomLink>
				<div>
					{SOCIAL.filter((social) => social.active === !true).map(
						({ name, href, ariaLabel }) => (
							<CustomLink
								href={href}
								key={name}
								isExternal={true}
								ariaLabel={ariaLabel}
							>
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
