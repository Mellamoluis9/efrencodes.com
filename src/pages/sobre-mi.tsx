import { Fragment } from 'react'
import Item from '@components/Article'
import { socialMedia as SOCIAL } from 'catalogs/social'
import { CustomLink } from '@components/index'

const AboutHome = () => {
	return (
		<Fragment>
			<h1 className="text-3xl font-medium text-gray-800 leading-normal mt-10 mb-4">
				Hola soy Efrén Martínez Desarrollador Frontend de Querétaro,
				México.
			</h1>
			<p>
				Desarrollador Frontend especializado en Javascript. Enfocado en
				el desarrollo web trabajando principalmente con tecnologías como
				Vue.js y React.js con Typescript. Con experiencia en desarrollo
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
			<h2 className="text-2xl font-medium text-gray-800 my-4">
				Trayectoria
			</h2>
			<p>Desarrollador Frontend con más de 6 años de experiencia.</p>
			<p>
				<span className="font-medium">2021 - Ahora </span> Frontend
				Developer React{' '}
				<CustomLink
					className="font-medium text-fuchsia-600 after:content-['↗'] hover:underline underline-offset-4 decoration-2 decoration-fuchsia-500"
					href="https://www.occ.com.mx/empleos/"
					isExternal
				>
					@occ_mundial
				</CustomLink>
			</p>
			<p>
				<span className="font-medium">2018 - 2021</span> Frontend
				Developer Vue.js{' '}
				<CustomLink
					className="font-medium text-rose-600 after:content-['↗'] hover:underline underline-offset-4 decoration-2 decoration-rose-500"
					href="https://marciano.com.mx/"
					isExternal
				>
					@marciano_studio
				</CustomLink>
			</p>
			<p>
				<span className="font-medium">2015 - 2018</span> Web developer{' '}
				<CustomLink
					className="font-medium text-sky-600 after:content-['↗'] hover:underline underline-offset-4 decoration-2 decoration-sky-500"
					href="https://grupoeducare.com/web/"
					isExternal
				>
					@grupo_educare
				</CustomLink>
			</p>
			<h2 className="text-2xl font-medium text-gray-800 my-4">
				Comunícate conmigo
			</h2>
			<p>
				Si estás interesado en trabajar conmigo o tienes alguna pregunta
				o sugerencia, no dudes en ponerte en contacto conmigo. También
				puedes seguirme en mis redes sociales para ver mis últimos
				proyectos y novedades.
			</p>
			{SOCIAL.filter((social) => Boolean(social.active) === !true).map(
				({ name, href, content, cover }) => (
					<Item
						name={name}
						content={content}
						cover={cover}
						href={href}
					/>
				)
			)}
		</Fragment>
	)
}

export default AboutHome
