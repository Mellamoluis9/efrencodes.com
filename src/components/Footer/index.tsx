import { Box, Flex, Text } from '@chakra-ui/react'
import { socialMedia as SOCIAL } from 'catalogs/social'
import CustomLink from 'components/common/CustomLink'

const Footer = () => {
	return (
		<Flex as="footer" gap="36px" my={6}>
			<Box as="div">
				<CustomLink href="/" isInternalLink>
					<Text>Inicio</Text>
				</CustomLink>
				<CustomLink href="/sobre-mi" isInternalLink>
					<Text>Sobre mí</Text>
				</CustomLink>
			</Box>
			<Box as="div">
				{SOCIAL.filter((social) => Boolean(social.footer) === true).map(
					({ name, href, content, ariaLabel }) => (
						<CustomLink
							href={href}
							key={name}
							ariaLabel={ariaLabel}
						>
							<Text>{content}</Text>
						</CustomLink>
					)
				)}
			</Box>
		</Flex>
	)
}

export default Footer
