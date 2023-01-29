import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Section, Header, Article, HeadSeo } from '@components/index'
import { metadataDefault } from 'catalogs/metatags'
import getPosts from 'utils/getPosts'

const HomePage = ({
	posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{metadataDefault.title}</title>
				<HeadSeo metadata={metadataDefault} />
			</Head>
			<Header>
				<h1 className="text-3xl font-medium text-gray-900 leading-normal">
					Efrén martínez
				</h1>
				<h2 className="text-2xl font-medium text-gray-700 leading-relaxed">
					Desarrollador frontend
				</h2>
				<p>
					Desarrollador Frontend especializado en{' '}
					<span className="text-yellow-400 font-medium">
						#javascript
					</span>
					. Enfocado en el desarrollo web principalmente con
					tecnologías como{' '}
					<span className="text-green-500 font-medium">#vue</span>,{' '}
					<span className="text-blue-500 font-medium">#react</span> y{' '}
					<span className="text-cyan-500 font-medium">
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
					<Article
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
