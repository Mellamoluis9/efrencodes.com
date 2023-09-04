import { socialMedia as SOCIAL } from '@/data/social'
import { SocialMediaButton, CustomLink } from '@/components'
import { RoughNotation } from 'react-rough-notation'

const NavBar = () => {
	return (
		<nav className="h-[100px] my-3 flex flex-row items-center justify-end gap-4">
			<CustomLink href="/" isInternalLink aria-label="Inicio">
				<p>Inicio</p>
			</CustomLink>
			<p className="font-semibold">
				<RoughNotation
					type="circle"
					show={true}
					animationDelay={500}
					color="#a78bfa"
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Contáctame en:
					</span>
				</RoughNotation>
			</p>
			{SOCIAL.filter((social) => social.active === !true).map(
				({ name, href, ariaLabel, nameEvent }) => (
					<CustomLink
						href={href}
						key={name}
						isExternal={true}
						aria-label={ariaLabel}
						nameEvent={nameEvent}
					>
						<SocialMediaButton type={name} />
					</CustomLink>
				)
			)}
		</nav>
	)
}

export default NavBar
