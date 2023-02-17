import { FC } from 'react'
import { ImageWrapper, CustomLink } from '@components/index'
import { Props } from './types'

const Article: FC<Props> = ({
	name,
	content,
	cover,
	href,
	isExternal = true
}) => {
	return (
		<CustomLink href={href} isInternalLink={isExternal} nameEvent={href}>
			<article className="flex py-8 px-4 gap-4 hover:shadow-sm hover:rounded hover:bg-gradient-to-r hover:from-indigo-50 hover:via-purple-50 hover:to-pink-50">
				<ImageWrapper
					thumbnail={cover}
					alt={name}
					width={80}
					height={80}
				/>
				<div>
					<h1 className="text-lg font-medium text-gray-800 leading-normal mb-2">
						{name}
					</h1>
					<p className="leading-normal italic">{content}</p>
				</div>
			</article>
		</CustomLink>
	)
}

export default Article
