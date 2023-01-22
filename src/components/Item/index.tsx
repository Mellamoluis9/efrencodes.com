import { FC } from 'react'
import { ImageWrapper, CustomLink } from '@components/index'
import { Props } from './types'

const Item: FC<Props> = ({ name, content, cover, href, isExternal = true }) => {
	return (
		<div>
			<div>
				<ImageWrapper
					thumbnail={cover}
					alt={name}
					width={40}
					height={40}
				/>
				<div>
					<CustomLink href={href} isExternal={isExternal}>
						<h3>{name}</h3>
						<p>{content}</p>
					</CustomLink>
				</div>
			</div>
		</div>
	)
}

export default Item
