import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import { RoughNotation } from 'react-rough-notation'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'
import { ImageWrapper, HeadSeo } from '@/components'
import { metadataProps } from '@/data/metatags'

const Articles = ({ data, content }) => {
	const metadataPost: metadataProps = {
		url: `https://efrencodes.com/articulos/${data.slug}`,
		title: data.title,
		description: data.description,
		keywords: data.keywords,
		openGraph: {
			url: `https://efrencodes.com`,
			siteName: 'Efrén Martínez ✦ @efrencodes',
			images: {
				url: data.ogImage,
				width: 1920,
				height: 1080
			},
			locale: 'es-MX',
			type: 'summary_large_image',
			creator: '@efrencodes'
		}
	}
	return (
		<>
			<Head>
				<title>{metadataPost.title}</title>
				<HeadSeo metadata={metadataPost} />
			</Head>
			<main>
				<section className="pt-16 pb-6">
					<ImageWrapper
						width={100}
						height={100}
						thumbnail={data.cover}
						alt={data.title}
					/>
					<h1 className="text-3xl font-medium text-gray-900 leading-normal mt-5">
						<RoughNotation
							type="highlight"
							show={true}
							animationDelay={500}
							color="#fce7f3"
						>
							{data.title}
						</RoughNotation>
					</h1>
					<p className="italic text-sm mt-2">{data.description}</p>
				</section>
				<div
					className="pt-4 pb-[150px] prose-a:text-pink-600 prose-a:underline prose-h2:text-xl prose-h2:font-medium
				prose-h2:tracking-wide prose-h2:text-gray-800 prose-strong:text-gray-900 prose-strong:font-semibold
				prose-strong:lining-nums prose-ul:list-disc prose-ul:mt-4 prose-ul:mb-4 prose-ul:list-inside prose-li:text-gray-600
				prose-li:font-normal prose-li:text-base"
				>
					<MDXRemote {...content} />
				</div>
			</main>
		</>
	)
}

export default Articles

export const getStaticPaths = async () => {
	const posts = await getPosts()
	const paths = posts.map((post) => ({ params: { slug: post?.slug } }))
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug)
	const mdxSource = await serialize(post.content, {
		parseFrontmatter: true,
		scope: {},
		mdxOptions: { rehypePlugins: [rehypeHighlight] }
	})
	return {
		props: {
			data: post.data,
			content: mdxSource
		}
	}
}
