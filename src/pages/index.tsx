import Head from 'next/head'
import { RoughNotation } from 'react-rough-notation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Section, Header, Article, HeadSeo } from '@/components'
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
					Hola! soy Efrén martínez
				</h1>
				<h2 className="text-2xl font-medium text-pink-500 leading-relaxed mt-2">
					<RoughNotation
						type="highlight"
						show={true}
						animationDelay={1500}
						color="#fce7f3"
					>
						Desarrollador Frontend
					</RoughNotation>
				</h2>
				<p className="mt-2">
					Desarrollador frontend especializado en{' '}
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
				<p className="mt-2">
					<RoughNotation
						type="highlight"
						show={true}
						animationDelay={1000}
						color="#fef08a"
					>
						Estoy disponible para freelance.
					</RoughNotation>
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
