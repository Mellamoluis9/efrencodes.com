import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SimpleGrid } from '@chakra-ui/react'
import { Project } from 'types/projectType'
import CardWithImage from 'components/CardWithImage'
import WrapperRoughNotation from 'components/common/WrapperRoughNotation'
import Section from 'components/common/Section'
import getPosts from 'utils/getPosts'

const HomePage = ({
	projects,
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(posts)
	return (
		<>
			<Section
				heading="Proyectos Destacados"
				subheading="Algunos proyectos que he participado/construido."
			>
				<SimpleGrid columns={2} spacingX={12} spacingY={12}>
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
			<WrapperRoughNotation>
				<h2>NavBar</h2>
			</WrapperRoughNotation>
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
