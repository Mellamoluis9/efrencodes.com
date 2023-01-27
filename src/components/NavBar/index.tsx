import { socialMedia as SOCIAL } from 'catalogs/social'
import { SocialMediaButton, CustomLink } from '@components/index'

const NavBar = () => {
	return (
		<nav className="h-[100px] my-3 flex flex-row items-center justify-end gap-4">
			<p className="text-gray-900">Contáctame en: </p>
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
