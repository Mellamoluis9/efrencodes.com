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
				<p>{project.name}</p>
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
	const res = await fetch('http://localhost:3000/api/projects')
	const projects: Project[] = await res.json()

	return {
		props: {
			projects
		}
	}
}

export default HomePage
