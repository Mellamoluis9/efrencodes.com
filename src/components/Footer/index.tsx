import { socialMedia as SOCIAL } from 'catalogs/social'
import { CustomLink } from '@components/index'

const Footer = () => {
	return (
		<footer>
			<div>
				<CustomLink href="/" isInternalLink>
					<p>Inicio</p>
				</CustomLink>
				<CustomLink href="/sobre-mi" isInternalLink>
					<p>Sobre mí</p>
				</CustomLink>
			</div>
			<div>
				{SOCIAL.filter((social) => Boolean(social.footer) === true).map(
					({ name, href, content, ariaLabel }) => (
						<CustomLink
							href={href}
							key={name}
							ariaLabel={ariaLabel}
						>
							<p>{content}</p>
						</CustomLink>
					)
				)}
			</div>
		</footer>
	)
}

export default Footer
