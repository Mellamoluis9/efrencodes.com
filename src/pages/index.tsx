// import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { styled } from '@stitches/react'
// import { Project } from 'types/projectType'
import CardWithImage from 'components/CardWithImage'

const Container = styled('section', {})

// const HomePage = ({
// 	projects
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
const HomePage = () => {
	return (
		<Container>
			{/* {projects.map((project) => (
				<CardWithImage
					href={project.url}
					src={project.image.src}
					alt={project.image.alt}
					name={project.name}
				/>
			))} */}
			<h2>NavBar</h2>
			<h2>Header</h2>
			<h2>Projects</h2>
			<h2>About</h2>
			<h2>Contact</h2>
			<h2>Footer</h2>
		</Container>
	)
}

// export const getStaticProps: GetStaticProps<{
// 	projects: Project[]
// }> = async () => {
// 	const URL = `${process.env.API_URL}api/projects`
// 	const res = await fetch(URL)
// 	const projects: Project[] = await res.json()

// 	return {
// 		props: {
// 			// projects
// 		}
// 	}
// }

export default HomePage
