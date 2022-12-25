import { Box, Flex, Text } from '@chakra-ui/react'
import { socialMedia as SOCIAL } from 'catalogs/social'
import CustomLink from 'components/common/CustomLink'

const Footer = () => {
	return (
		<Flex as="footer" gap={12} my={6}>
			<Box as="div">
				<CustomLink href="/" isInternalLink>
					<Text lineHeight={2.8} color="gray.800">
						Inicio
					</Text>
				</CustomLink>
				<CustomLink href="/sobre-mi" isInternalLink>
					<Text lineHeight={2.8} color="gray.800">
						Sobre mí
					</Text>
				</CustomLink>
				<CustomLink href="/" isInternalLink>
					<Text lineHeight={2.8} color="gray.800">
						Artículos
					</Text>
				</CustomLink>
			</Box>
			<Box as="div">
				{SOCIAL.filter(
					(social) => Boolean(social.active) === !true
				).map(({ name, href, content }) => (
					<CustomLink href={href}>
						<Text lineHeight={2.8} color="gray.800">
							{content}
						</Text>
					</CustomLink>
				))}
			</Box>
			<Box as="div">
				<Text lineHeight={2.8} color="gray.800">
					2023 efrencodes
				</Text>
			</Box>
		</Flex>
	)
}

export default Footer
