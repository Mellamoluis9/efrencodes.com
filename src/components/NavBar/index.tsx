import { Flex, Spacer, Text } from '@chakra-ui/react'
import { socialMedia as SOCIAL } from 'catalogs/social'
import SocialMediaButton from 'components/common/SocialMediaButton'
import CustomLink from 'components/common/CustomLink'

const NavBar = () => {
	return (
		<nav>
			<Flex alignItems="center">
				<CustomLink href="/" isInternalLink>
					<h1>Efren Martinez</h1>
				</CustomLink>
				<Spacer />
				<Flex>
					<CustomLink href="/" isInternalLink>
						<Text fontSize="md">Artículos</Text>
					</CustomLink>
					<Flex gap="16px" pl="12px" pr="12px">
						{SOCIAL.filter((social) => social.active === !true).map(
							({ name, href }) => (
								<CustomLink href={href}>
									<SocialMediaButton type={name} />
								</CustomLink>
							)
						)}
					</Flex>
				</Flex>
			</Flex>
		</nav>
	)
}

export default NavBar
