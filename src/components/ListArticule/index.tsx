import { Text, Card } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { Props } from './types'

const ListArticule = ({ ...props }: Props) => {
	const href = `/articulos/${props.slug}`
	return (
		<Card
			variant="unstyled"
			padding={8}
			border="1px solid #e5e7eb"
			backgroundImage="linear-gradient(to right bottom, rgba(255, 255, 255, 0.25), rgba(255, 241, 242, 0.5))"
			_hover={{
				shadow: 'lg'
			}}
		>
			<CustomLink href={href}>
				<Text>{props.title}</Text>
			</CustomLink>
		</Card>
	)
}

export default ListArticule
