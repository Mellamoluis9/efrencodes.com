import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SimpleGrid } from '@chakra-ui/react'
import { Project } from 'catalogs/projects/projectType'
import CardWithImage from 'components/CardWithImage'
import Section from 'components/common/Section'
import Header from 'components/Header'
import getPosts from 'utils/getPosts'

const HomePage = ({
	projects,
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(posts)
	return (
		<>
			<Header />
			<Section
				heading="Proyectos Destacados"
				subheading="Algunos proyectos que he participado/construido."
			>
				<SimpleGrid pt="2em" columns={2} spacingX={12} spacingY={12}>
					{projects.map((project) => (
						<CardWithImage
							href={project.url}
							src={project.image.src}
							alt={project.image.alt}
							name={project.name}
							tecnologies={project.tecnologies}
						/>
					))}
				</SimpleGrid>
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
