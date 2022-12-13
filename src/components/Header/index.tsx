import { Box, Heading, Text, Highlight, Flex, Image } from '@chakra-ui/react'

const Header = () => {
	return (
		<Flex as="header" gap={12}>
			<Box maxW="3xl">
				<Image
					src="https://res.cloudinary.com/efrencodes/image/upload/v1654747312/efrencodes.ts/perfil.webp"
					alt="Photo perfil - efren martinez"
					borderRadius={4}
				/>
			</Box>
			<Box>
				<Heading
					as="h1"
					fontSize="2xl"
					lineHeight={2}
					bgGradient="linear(to-l, #7928CA, #FF0080)"
					bgClip="text"
				>
					Efren Martinez
				</Heading>
				<Heading
					as="h2"
					textTransform="uppercase"
					textColor="GrayText"
					fontSize="xl"
					lineHeight={1.9}
				>
					Desarrollador Frontend
				</Heading>
				<Text
					as="p"
					fontSize="md"
					lineHeight={1.9}
					textColor="GrayText"
				>
					Desarrollador Frontend especializado en{' '}
					<Highlight
						query="JavaScript"
						styles={{
							px: '2',
							py: '1',
							rounded: 'full',
							bg: 'yellow.100'
						}}
					>
						JavaScript
					</Highlight>
					. Enfocado en el desarrollo web trabajando principalmente
					con tecnologías como{' '}
					<Highlight
						query="Vue.js"
						styles={{
							px: '2',
							py: '1',
							rounded: 'full',
							bg: 'green.100'
						}}
					>
						Vue.js
					</Highlight>{' '}
					y{' '}
					<Highlight
						query="React.js"
						styles={{
							px: '2',
							py: '1',
							rounded: 'full',
							bg: 'blue.100'
						}}
					>
						React.js
					</Highlight>{' '}
					con TypeScript. Con experiencia en desarrollo e
					implementación de productos digitales.
				</Text>
			</Box>
		</Flex>
	)
}

export default Header
