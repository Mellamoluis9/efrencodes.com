import { Head } from 'next/document'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'
import { ImageWrapper } from '@components/index'
import DefaultHead from '@components/DefaultHead'

export default function Articles({ data, content }) {
	const canonical = 'https://www.efrencodes.com/articulos/' + data.slug
	const metaTagsDefault = {
		title: data.title,
		description: data.description,
		image: data.ogImage,
		keywords: data.keywords,
		canonical,
		creator: '@efrencodes'
	}
	return (
		<>
			<Head>
				<DefaultHead metaTags={metaTagsDefault} />
			</Head>
			<main>
				<div>
					<ImageWrapper
						width={100}
						height={100}
						thumbnail={data.cover}
						alt={data.title}
					/>
					<h1>{data.title}</h1>
				</div>
				<div>
					<MDXRemote {...content} />
				</div>
			</main>
		</>
	)
}

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
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [rehypeHighlight],
			format: 'mdx'
		}
	})
	return {
		props: {
			data: post.data,
			content: mdxSource
		}
	}
}
