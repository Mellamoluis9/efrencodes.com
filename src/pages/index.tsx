import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Section, Header, Item } from '@components/index'
import getPosts from 'utils/getPosts'

const HomePage = ({
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Header>
				<h1 className="text-3xl font-medium text-gray-900 leading-normal">
					Efrén Martínez
				</h1>
				<h2 className="text-2xl font-medium text-gray-700 leading-relaxed">
					Desarrollador Frontend
				</h2>
				<p>
					Desarrollador Frontend especializado en Javascript. Enfocado
					en el desarrollo web trabajando principalmente con
					tecnologías como{' '}
					<span className="text-gray-700 font-medium">#vue</span>,{' '}
					<span className="text-gray-700 font-medium">#react</span> y{' '}
					<span className="text-gray-700 font-medium">
						#typescript
					</span>
					.
				</p>
			</Header>
			<Section
				heading="Últimos artículos"
				subheading="Escribo artículos donde comparto lo que aprendo en mi día a día y que espero pueda servir a más gente."
			>
				{posts.map((element) => (
					<Item
						key={element?.data?.title}
						name={element?.data?.title}
						content={element?.data?.description}
						cover={element?.data?.cover}
						href={`/articulos/${element?.data?.slug}`}
						isExternal={true}
					/>
				))}
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps<{
	posts
}> = async () => {
	const posts = getPosts()

	return {
		props: {
			posts
		}
	}
}

export default HomePage
