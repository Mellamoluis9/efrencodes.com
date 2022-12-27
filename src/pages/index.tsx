import { GetStaticProps, InferGetStaticPropsType } from 'next'
import {
	Box,
	Heading,
	Text,
	Highlight,
	SimpleGrid,
	Image
} from '@chakra-ui/react'
import { Project } from 'catalogs/projects/projectType'
import CardWithImage from 'components/CardWithImage'
import Section from 'components/common/Section'
import Header from 'components/Header'
import ListArticule from 'components/ListArticule'
import getPosts from 'utils/getPosts'

const HomePage = ({
	projects,
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Header>
				<Image
					objectFit="cover"
					borderRadius="md"
					shadow="lg"
					width={{ base: '100px', md: '180px' }}
					height={{ base: '100px', md: '180px' }}
					src="https://res.cloudinary.com/efrencodes/image/upload/v1654747312/efrencodes.ts/perfil.webp"
					alt="Efren Martinez"
				/>
				<Box>
					<Heading
						as="h1"
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
					>
						Efren Martinez
					</Heading>
					<Heading as="h2">Desarrollador Frontend</Heading>
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
						. Enfocado en el desarrollo web trabajando
						principalmente con tecnologías como{' '}
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
			</Header>
			<Section
				heading="Mis artículos"
				subheading="Escribo artículos donde comparto lo que aprendo en mi día a día y que espero pueda servir a más gente."
			>
				<SimpleGrid
					pt="2em"
					width="100%"
					columns={{ base: 1, md: 2 }}
					spacingX={6}
					spacingY={12}
				>
					{posts.map((element) => (
						<ListArticule
							key={element?.data?.name}
							title={element?.data?.title}
							description={element?.data?.description}
							slug={element?.data?.slug}
							date={element?.data?.date}
						/>
					))}
				</SimpleGrid>
			</Section>
			<Section
				heading="Proyectos Destacados"
				subheading="Algunos proyectos que he participado/construido."
			>
				<SimpleGrid
					pt="2em"
					width="100%"
					columns={{ base: 1, md: 2 }}
					spacingX="60px"
					spacingY="60px"
					mb="100px"
				>
					{projects.map((project) => (
						<CardWithImage
							key={project.name}
							href={project.url}
							src={project.image.src}
							alt={project.image.alt}
							name={project.name}
							tecnologies={project.tecnologies}
							backgroundImage={project.backgroundImage}
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
