import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Project } from 'catalogs/projects/projectType'
import {
	ImageWrapper,
	CardWithImage,
	Section,
	Header,
	Item
} from '@components/index'
import getPosts from 'utils/getPosts'

const HomePage = ({
	projects,
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Header>
				<ImageWrapper
					thumbnail="https://res.cloudinary.com/efrencodes/image/upload/v1654747312/efrencodes.ts/perfil.webp"
					alt="Foto efren martinez"
					width={976 / 2}
					height={580 / 2}
				/>
				<div>
					<h1>Efren Martinez</h1>
					<h2>Desarrollador Frontend Vuejs Reactjs</h2>
					<p>
						Desarrollador Frontend especializado en JavaScript .
						Enfocado en el desarrollo web trabajando principalmente
						con tecnologías comoVue.js y React.js con TypeScript.
					</p>
				</div>
			</Header>
			<Section
				heading="Mis artículos"
				subheading="Escribo artículos donde comparto lo que aprendo en mi día a día y que espero pueda servir a más gente."
			>
				<div>
					{posts.map((element) => (
						<Item
							key={element?.data?.title}
							name={element?.data?.title}
							content={element?.data?.description}
							cover={element?.data?.cover}
							href={`/articulos/${element?.data?.slug}`}
							isExternal={false}
						/>
					))}
				</div>
			</Section>
			<Section
				heading="Proyectos Destacados"
				subheading="Algunos proyectos que he participado/construido."
			>
				<div>
					{projects.map((project) => (
						<CardWithImage
							key={project?.name}
							href={project.url}
							src={project.image.src}
							alt={project.image.alt}
							name={project.name}
							tecnologies={project.tecnologies}
							backgroundImage={project.backgroundImage}
						/>
					))}
				</div>
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps<{
	projects: Project[]
	posts
}> = async () => {
	const URL = `${process.env.API_URL}api/projects`
	const res = await fetch(URL)
	const projects: Project[] = await res.json()
	const posts = getPosts()

	return {
		props: {
			projects,
			posts
		}
	}
}

export default HomePage
