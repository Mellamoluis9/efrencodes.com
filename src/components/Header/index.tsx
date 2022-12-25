import { Box, Heading, Text, Highlight, Flex, Image } from '@chakra-ui/react'

const Header = () => {
	return (
		<Flex as="header" gap={12}>
			<Box>
				<Image
					src="https://res.cloudinary.com/efrencodes/image/upload/v1654747312/efrencodes.ts/perfil.webp"
					alt="Photo perfil - efren martinez"
				/>
			</Box>
			<Box>
				<Heading
					as="h1"
					bgGradient="linear(to-l, #7928CA, #FF0080)"
					bgClip="text"
				>
					Efren Martinez
				</Heading>
				<Heading as="h2" textTransform="uppercase">
					Desarrollador Frontend
				</Heading>
				<Text as="p">
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
					con TypeScript.
				</Text>
			</Box>
		</Flex>
	)
}

export default Header
