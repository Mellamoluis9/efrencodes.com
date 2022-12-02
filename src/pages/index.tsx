import Image from 'next/image'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { styled } from '@stitches/react'
import { Project } from 'types/projectType'

const Container = styled('section', {})

const HomePage = ({
	projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			{projects.map((project) => (
				<>
					<Image
						src={project.image.src}
						alt={project.image.alt}
						width={400}
						height={300}
					/>
					<h3>{project.name}</h3>
				</>
			))}
			<h2>NavBar</h2>
			<h2>Header</h2>
			<h2>Projects</h2>
			<h2>About</h2>
			<h2>Contact</h2>
			<h2>Footer</h2>
		</Container>
	)
}

export const getStaticProps: GetStaticProps<{
	projects: Project[]
}> = async () => {
	const URL = `${process.env.API_URL}api/projects`
	const res = await fetch(URL)
	const projects: Project[] = await res.json()

	return {
		props: {
			projects
		}
	}
}

export default HomePage
