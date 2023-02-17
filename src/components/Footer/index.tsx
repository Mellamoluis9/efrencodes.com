import { socialMedia as SOCIAL } from 'catalogs/social'
import { CustomLink } from '@/components'

const Footer = () => {
	return (
		<footer className="flex h-[130px] py-4 flex-row">
			<div className="basis-1/3">
				<CustomLink href="/" ariaLabel="Inicio" isInternalLink>
					<p>Inicio</p>
				</CustomLink>
				<CustomLink
					href="/sobre-mi"
					ariaLabel="Sobre mí"
					isInternalLink
				>
					<p>Sobre mí</p>
				</CustomLink>
			</div>
			<div className="basis-1/3">
				{SOCIAL.filter((social) => Boolean(social.footer) === true).map(
					({ name, href, content, ariaLabel }) => (
						<CustomLink
							href={href}
							key={name}
							ariaLabel={ariaLabel}
							isExternal={true}
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
