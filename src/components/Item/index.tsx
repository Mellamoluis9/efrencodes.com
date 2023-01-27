import { FC } from 'react'
import { ImageWrapper, CustomLink } from '@components/index'
import { Props } from './types'

const Item: FC<Props> = ({ name, content, cover, href, isExternal = true }) => {
	return (
		<article className="flex pt-8 gap-4">
			<ImageWrapper thumbnail={cover} alt={name} width={80} height={80} />
			<div>
				<CustomLink href={href} isInternalLink={isExternal}>
					<h1 className="text-lg font-medium text-gray-800 leading-normal mb-2">
						{name}
					</h1>
					<p className="leading-normal">{content}</p>
				</CustomLink>
			</div>
		</article>
	)
}

export default Item
