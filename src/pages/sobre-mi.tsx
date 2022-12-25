import { Fragment } from 'react'
import { Divider, Heading, Text, List, ListItem } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { socialMedia as SOCIAL } from 'catalogs/social'

const AboutHome = () => {
	return (
		<Fragment>
			<Heading as="h1" fontSize="2xl" lineHeight={2}>
				Hola, soy Efrén Martínez, Desarrollador Frontend de Querétaro,
				México.
			</Heading>
			<Text as="p" fontSize="md" lineHeight={1.9} textColor="GrayText">
				Desarrollador Frontend especializado en JavaScript. Enfocado en
				el desarrollo web trabajando principalmente con tecnologías
				comoVue.js y React con TypeScript. Con experiencia en desarrollo
				e implementación de productos digitales.
			</Text>
			<Text as="p" fontSize="md" lineHeight={1.9} textColor="GrayText">
				Actualmente, trabajo como desarrollador frontend en OCC Mundial
				en remoto desde Querétaro, México. Ocasionalmente escribo
				artículos donde comparto lo que aprendo en mi día a día y
				trabajo en diferentes proyectos personales.
			</Text>
			<Text as="p" fontSize="md" lineHeight={1.9} textColor="GrayText">
				En mi tiempo libre disfruto mucho ver peliculas y series además
				de jugar videojuegos.
			</Text>
			<Divider />
			<Heading as="h2" fontSize="md" lineHeight={2}>
				Trayectoria
			</Heading>
			<Text as="p" fontSize="md" lineHeight={1.9} textColor="GrayText">
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
			<Divider />
			<Heading as="h2" fontSize="md" lineHeight={2}>
				Comunícate conmigo
			</Heading>
			<Text as="p" fontSize="md" lineHeight={1.9} textColor="GrayText">
				¿Quieres construir nuevos proyectos web o mejorar los
				existentes? Te invito a enviarme un mensaje por alguna de mis
				redes sociales.
			</Text>
			<List spacing={3}>
				{SOCIAL.filter(
					(social) => Boolean(social.active) === !true
				).map(({ name, href, content }) => (
					<ListItem>
						<CustomLink href={href}>
							<Text lineHeight={2.8} color="gray.800">
								{content}
							</Text>
						</CustomLink>
					</ListItem>
				))}
			</List>
		</Fragment>
	)
}

export default AboutHome
