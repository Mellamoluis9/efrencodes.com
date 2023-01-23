import { socialMedia as SOCIAL } from 'catalogs/social'
import { SocialMediaButton, CustomLink } from '@components/index'

const NavBar = () => {
	return (
		<nav className="h-[100px] my-3 flex flex-row items-center justify-end gap-4">
			<CustomLink href="/" isInternalLink ariaLabel="Inicio">
				<p>Inicio</p>
			</CustomLink>
			<CustomLink href="/sobre-mi" isInternalLink ariaLabel="Sobre mí">
				<p>Sobre mí</p>
			</CustomLink>
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
		</nav>
	)
}

export default NavBar
