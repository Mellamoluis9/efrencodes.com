import { Text, Card } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { Props } from './types'

const ListArticule = ({ ...props }: Props) => {
	const href = `/articulos/${props.slug}`
	return (
		<Card
			variant="unstyled"
			padding={8}
			shadow="lg"
			border="1px solid #e5e7eb"
			_hover={{ bg: 'gray.100' }}
		>
			<CustomLink href={href}>
				<Text>{props.title}</Text>
			</CustomLink>
		</Card>
	)
}

export default ListArticule
