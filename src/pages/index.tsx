import Head from 'next/head'
import { RoughNotation } from 'react-rough-notation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Section, Header, Article, HeadSeo } from '@/components'
import { metadataDefault } from '@/data/metatags'
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
					Efren Martinez
				</h1>
				<h2 className="text-2xl font-medium text-pink-500 leading-relaxed mt-2">
					Frontend Engineer
				</h2>
				<p className="mt-2">
					Frontend Engineer especializado en{' '}
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">#javascript</span>
					. Enfocado en el desarrollo web principalmente con
					tecnologías como{' '}
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-green-100 text-green-800">#vue</span>{' '}
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800">#react</span>{' '}y{' '}
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">#typescript</span>
				</p>
				<p className="mt-2">
					Estoy disponible para proyectos freelance.
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
