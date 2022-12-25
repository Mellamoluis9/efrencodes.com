import { Box, Flex, Text } from '@chakra-ui/react'
import { socialMedia as SOCIAL } from 'catalogs/social'
import CustomLink from 'components/common/CustomLink'

const Footer = () => {
	return (
		<Flex as="footer" gap={12} my={6}>
			<Box as="div">
				<CustomLink href="/" isInternalLink>
					<Text>Inicio</Text>
				</CustomLink>
				<CustomLink href="/sobre-mi" isInternalLink>
					<Text>Sobre mí</Text>
				</CustomLink>
				<CustomLink href="/" isInternalLink>
					<Text>Artículos</Text>
				</CustomLink>
			</Box>
			<Box as="div">
				{SOCIAL.filter(
					(social) => Boolean(social.active) === !true
				).map(({ name, href, content }) => (
					<CustomLink href={href}>
						<Text>{content}</Text>
					</CustomLink>
				))}
			</Box>
			<Box as="div">
				<Text>2023 efrencodes</Text>
			</Box>
		</Flex>
	)
}

export default Footer
