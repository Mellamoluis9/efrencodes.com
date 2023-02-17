import { FC } from 'react'
import { ImageWrapper, CustomLink } from '@/components'
import { Props } from './types'

const CardWithImage: FC<Props> = ({ ...props }) => {
	return (
		<div>
			<div>
				<ImageWrapper
					width={100}
					height={300}
					thumbnail={props.src}
					alt={props.alt}
				/>
				<h3>{props.name}</h3>
				<div>
					{props?.tecnologies.map(({ name, color }) => (
						<div>{name}</div>
					))}
				</div>
			</div>
			<div>
				<CustomLink href={props.href} isExternal={true}>
					<p>Visitar página</p>
				</CustomLink>
			</div>
		</div>
	)
}

export default CardWithImage
