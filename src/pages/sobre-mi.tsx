import { Fragment } from 'react'
import {
	Heading,
	Text,
	List,
	ListItem,
	Highlight,
	Link
} from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
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
						bg: 'yellow.100'
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
				con TypeScript. Con experiencia en desarrollo e implementación
				de productos digitales.
			</Text>
			<Text as="p" mt="20px">
				Actualmente, trabajo como desarrollador frontend en{' '}
				<Link
					color="pink.500"
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
					color="blue.500"
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
					<Text as="b">2021 - Ahora</Text> Frontend Developer React{' '}
					<Link
						color="red.500"
						href="https://www.occ.com.mx/empleos/"
						isExternal
					>
						@occ_mundial
					</Link>{' '}
				</ListItem>
				<ListItem>
					<Text as="b">2018 - 2021</Text> Frontend Developer Vue.js{' '}
					<Link
						color="green.500"
						href="https://www.occ.com.mx/empleos/"
						isExternal
					>
						@marciano_studio
					</Link>
				</ListItem>
				<ListItem>
					<Text as="b">2015 - 2018</Text> Web developer{' '}
					<Link
						color="purple.500"
						href="https://grupoeducare.com/web/"
						isExternal
					>
						@grupo_educare
					</Link>
				</ListItem>
			</List>
			<Heading as="h2" mt="20px">
				Comunícate conmigo
			</Heading>
			<List spacing={3} mb="100px">
				<Text as="p">
					¿Quieres construir nuevos proyectos web o mejorar los
					existentes?
				</Text>
				<Text as="p">
					Te invito a enviarme un mensaje por alguna de mis redes
					sociales.
				</Text>
				{SOCIAL.filter(
					(social) => Boolean(social.active) === !true
				).map(({ name, href, content }) => (
					<ListItem key={name}>
						<CustomLink href={href} isExternal={true}>
							<Text>{content}</Text>
						</CustomLink>
					</ListItem>
				))}
			</List>
		</Fragment>
	)
}

export default AboutHome
