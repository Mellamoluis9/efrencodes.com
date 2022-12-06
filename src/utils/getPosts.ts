import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { URL_POST } from './constantes'

const getPosts = () => {
	const files = fs.readdirSync(path.join(URL_POST))
	const allPostsData = files.map((fileName) => {
		const slug = fileName.replace('.mdx', '')
		const fileContents = fs.readFileSync(
			path.join(`${URL_POST}/${slug}.mdx`),
			'utf8'
		)
		const { data } = matter(fileContents)
		return {
			data,
			slug
		}
	})

	return allPostsData
}

export default getPosts
