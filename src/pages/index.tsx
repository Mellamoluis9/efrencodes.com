import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Project } from 'types/projectType'
import CardWithImage from 'components/CardWithImage'
import WrapperRoughNotation from 'components/common/WrapperRoughNotation'
import getPosts from 'utils/getPosts'

const HomePage = ({
	projects,
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(posts)
	return (
		<section>
			{projects.map((project) => (
				<CardWithImage
					href={project.url}
					src={project.image.src}
					alt={project.image.alt}
					name={project.name}
				/>
			))}
			<WrapperRoughNotation>
				<h2>NavBar</h2>
			</WrapperRoughNotation>
			<h2>Projects</h2>
			<h2>About</h2>
			<h2>Contact</h2>
			<h2>Footer</h2>
		</section>
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
