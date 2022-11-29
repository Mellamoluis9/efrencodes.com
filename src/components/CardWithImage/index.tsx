import { Fragment } from 'react'
import Image from 'next/image'
import CustomLink from 'components/common/CustomLink'
import { Props } from './types'

const CardWithImage = ({ ...props }: Props) => {
	return (
		<Fragment>
			<CustomLink href={props.href}>
				<Image
					src={props.src}
					alt={props.alt}
					width={400}
					height={300}
				/>
			</CustomLink>
			<h3>{props.name}</h3>
		</Fragment>
	)
}

export default CardWithImage
