import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import { Image, Box } from '@chakra-ui/react'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'

export default function Articles({ data, content }) {
	return (
		<>
			<main>
				<Image
					objectFit="cover"
					borderRadius="md"
					shadow="xl"
					width="100%"
					height="300px"
					src={data.image}
					alt={data.title}
					mb="100px"
				/>
				<Box mb="200px">
					<MDXRemote {...content} />
				</Box>
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
