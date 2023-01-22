import { Fragment } from 'react'
import Item from '@components/Item'
import { socialMedia as SOCIAL } from 'catalogs/social'

const AboutHome = () => {
	return (
		<Fragment>
			<h1>
				Hola soy Efrén Martínez Desarrollador Frontend de Querétaro,
				México.
			</h1>
			<p>
				Desarrollador Frontend especializado en JavaScript . Enfocado en
				el desarrollo web trabajando principalmente con tecnologías como
				Vue.js y React.js con TypeScript. Con experiencia en desarrollo
				e implementación de productos digitales.
			</p>
			<p>
				Actualmente, trabajo como desarrollador frontend en OCC Mundial
				en remoto desde Querétaro, México. Ocasionalmente escribo
				artículos donde comparto lo que aprendo en mi día a día y
				trabajo en diferentes proyectos personales.
			</p>
			<p>
				En mi tiempo libre disfruto mucho ver peliculas y series además
				de jugar videojuegos.
			</p>
			<h2>Trayectoria</h2>
			<p>Desarrollador Frontend con más de 6 años de experiencia.</p>
			<div>
				<div>
					<p>2021 - Ahora</p> Frontend Developer React @occ_mundial
				</div>
				<div>
					<p>2018 - 2021</p> Frontend Developer Vue.js{' '}
					@marciano_studio
				</div>
				<div>
					<p>2015 - 2018</p> Web developer @grupo_educare
				</div>
			</div>
			<h2>Comunícate conmigo</h2>
			<p>
				Si estás interesado en trabajar conmigo o tienes alguna pregunta
				o sugerencia, no dudes en ponerte en contacto conmigo. También
				puedes seguirme en mis redes sociales para ver mis últimos
				proyectos y novedades.
			</p>
			<div>
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
			</div>
		</Fragment>
	)
}

export default AboutHome
