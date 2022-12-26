import { Flex, Spacer, Text } from '@chakra-ui/react'
import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'
import CustomLink from 'components/common/CustomLink'

const NavBar = () => {
	return (
		<Flex alignItems="center" as="nav" pb={12} height="100px">
			<CustomLink href="/" isInternalLink>
				<h1>@efren</h1>
			</CustomLink>
			<Spacer />
			<Flex gap="12px">
				<CustomLink href="/sobre-mi" isInternalLink>
					<Text fontSize="md">Sobre mí</Text>
				</CustomLink>
				<CustomLink href="/" isInternalLink>
					<Text fontSize="md">Artículos</Text>
				</CustomLink>
				<Flex gap="12px" pr="12px">
					{SOCIAL.filter((social) => social.active === !true).map(
						({ name, href }) => (
							<CustomLink href={href} key={name}>
								<SocialMediaButton type={name} />
							</CustomLink>
						)
					)}
				</Flex>
			</Flex>
		</Flex>
	)
}

export default NavBar
