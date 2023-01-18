import { Fragment } from 'react'
import {
	Heading,
	Text,
	List,
	ListItem,
	Highlight,
	Link,
	SimpleGrid
} from '@chakra-ui/react'
import Item from '@components/Item'
import { socialMedia as SOCIAL } from 'catalogs/social'

const AboutHome = () => {
	return (
		<Fragment>
			<Heading as="h1" mt="80px">
				Hola soy Efrén Martínez Desarrollador Frontend de Querétaro,
				México.
			</Heading>
			<Text as="p" mt="20px">
				Desarrollador Frontend especializado en{' '}
				<Highlight
					query="JavaScript"
					styles={{
						px: '2',
						py: '1',
						rounded: 'full',
						bg: '#fef08a'
					}}
				>
					JavaScript
				</Highlight>
				. Enfocado en el desarrollo web trabajando principalmente con
				tecnologías como
				<Highlight
					query="Vue.js"
					styles={{
						px: '2',
						py: '1',
						rounded: 'full',
						bg: '#bbf7d0'
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
						bg: '#bae6fd'
					}}
				>
					React.js
				</Highlight>{' '}
				con TypeScript. Con experiencia en desarrollo e implementación
				de productos digitales.
			</Text>
			<Text as="p" mt="20px">
				Actualmente, trabajo como desarrollador frontend en{' '}
				<Link
					color="#ec4899"
					href="https://www.occ.com.mx/empleos/"
					isExternal
				>
					OCC Mundial
				</Link>{' '}
				en remoto desde Querétaro, México. Ocasionalmente escribo
				artículos donde comparto lo que aprendo en mi día a día y
				trabajo en diferentes proyectos personales.
			</Text>
			<Text as="p" mt="20px">
				En mi tiempo libre disfruto mucho{' '}
				<Link
					color="#3b82f6"
					href="https://letterboxd.com/efrencodes/"
					isExternal
				>
					ver peliculas y series
				</Link>{' '}
				además de jugar videojuegos.
			</Text>
			<Heading as="h2" mt="20px">
				Trayectoria
			</Heading>
			<Text as="p" mt="20px">
				Desarrollador Frontend con más de 6 años de experiencia.
			</Text>
			<List spacing={3} mt="20px">
				<ListItem>
					<Text as="b" fontWeight="500">
						2021 - Ahora
					</Text>{' '}
					Frontend Developer React{' '}
					<Link
						color="#ef4444"
						href="https://www.occ.com.mx/empleos/"
						isExternal
					>
						@occ_mundial
					</Link>{' '}
				</ListItem>
				<ListItem>
					<Text as="b" fontWeight="500">
						2018 - 2021
					</Text>{' '}
					Frontend Developer Vue.js{' '}
					<Link
						color="#84cc16"
						href="https://www.occ.com.mx/empleos/"
						isExternal
					>
						@marciano_studio
					</Link>
				</ListItem>
				<ListItem>
					<Text as="b" fontWeight="500">
						2015 - 2018
					</Text>{' '}
					Web developer{' '}
					<Link
						color="#a855f7"
						href="https://grupoeducare.com/web/"
						isExternal
					>
						@grupo_educare
					</Link>
				</ListItem>
			</List>
			<Heading as="h2" mt="50px" mb="15px">
				Comunícate conmigo
			</Heading>
			<Text as="p">
				Si estás interesado en trabajar conmigo o tienes alguna pregunta
				o sugerencia, no dudes en ponerte en contacto conmigo. También
				puedes seguirme en mis redes sociales para ver mis últimos
				proyectos y novedades.
			</Text>
			<SimpleGrid
				pt="2em"
				pb="100px"
				width="100%"
				columns={{ base: 1, md: 2 }}
				spacingX={6}
				spacingY={6}
			>
				{SOCIAL.filter(
					(social) => Boolean(social.active) === !true
				).map(({ name, href, content, cover }) => (
					<Item
						name={name}
						content={content}
						cover={cover}
						href={href}
					/>
				))}
			</SimpleGrid>
		</Fragment>
	)
}

export default AboutHome
