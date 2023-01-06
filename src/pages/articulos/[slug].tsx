import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import { Image, Box, Heading, Flex } from '@chakra-ui/react'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'
import DefaultHead from 'components/DefaultHead'

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
			<DefaultHead metaTags={metaTagsDefault} />
			<main>
				<Flex
					as="header"
					gap="18px"
					mb="50px"
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems={{ base: 'center' }}
				>
					<Image
						objectFit="contain"
						borderRadius="md"
						shadow="xl"
						width="100px"
						height="100px"
						src={data.cover}
						alt={data.title}
					/>
					<Heading
						as="h1"
						bgGradient={['linear(to-t, blue.200, teal.500)']}
						bgClip="text"
					>
						{data.title}
					</Heading>
				</Flex>
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
