import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'

export default function Articles({ data, content }) {
	return (
		<>
			<main>
				<div className="mt-20 text-center">
					<Image
						className="h-full w-full rounded-md"
						width={976 / 2}
						height={580 / 2}
						src={data.image}
						alt={data.title}
					/>
				</div>
				<article className="prose mt-10 mb-20">
					<MDXRemote {...content} />
				</article>
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
		parseFrontmatter: true
	})
	return {
		props: {
			data: post.data,
			content: mdxSource
		}
	}
}
