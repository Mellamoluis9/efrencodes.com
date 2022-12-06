import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { URL_POST } from './constantes'

const getPost = (slug) => {
	const fileContents = fs.readFileSync(
		path.join(`${URL_POST}/${slug}.mdx`),
		'utf8'
	)
	const { data, content } = matter(fileContents)
	return {
		data,
		content
	}
}

export default getPost
