import { Fragment } from 'react'
import { Heading, Text, List, ListItem, Highlight } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { socialMedia as SOCIAL } from 'catalogs/social'

const AboutHome = () => {
	return (
		<Fragment>
			<Heading as="h1">
				Hola soy Efrén Martínez{' '}
				<Highlight
					query="Desarrollador Frontend"
					styles={{
						px: '4',
						py: '1',
						rounded: 'full',
						bg: 'orange.100'
					}}
				>
					Desarrollador Frontend
				</Highlight>{' '}
				de Querétaro, México.
			</Heading>
			<Text as="p">
				Desarrollador Frontend especializado en JavaScript. Enfocado en
				el desarrollo web trabajando principalmente con tecnologías como
				Vue.js y React con TypeScript. Con experiencia en desarrollo e
				implementación de productos digitales.
			</Text>
			<Text as="p">
				Actualmente, trabajo como desarrollador frontend en OCC Mundial
				en remoto desde Querétaro, México. Ocasionalmente escribo
				artículos donde comparto lo que aprendo en mi día a día y
				trabajo en diferentes proyectos personales.
			</Text>
			<Text as="p">
				En mi tiempo libre disfruto mucho ver peliculas y series además
				de jugar videojuegos.
			</Text>
			<Heading as="h2" mt="15">
				Trayectoria
			</Heading>
			<Text as="p">
				Desarrollador Frontend con más de 6 años de experiencia.
			</Text>
			<List spacing={3}>
				<ListItem>
					2021 - Ahora Frontend Developer React @occ_mundial
				</ListItem>
				<ListItem>
					2018 - 2021 Frontend Developer Vue.js @marciano_studio
				</ListItem>
				<ListItem>2015 - 2018 Web developer @grupo_educare</ListItem>
			</List>
			<Heading as="h2" mt="15">
				Comunícate conmigo
			</Heading>
			<List spacing={3} mb="14">
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
					<ListItem>
						<CustomLink href={href}>
							<Text>{content}</Text>
						</CustomLink>
					</ListItem>
				))}
			</List>
		</Fragment>
	)
}

export default AboutHome
