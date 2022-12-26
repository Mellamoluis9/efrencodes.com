import { Text, Card } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { Props } from './types'

const ListArticule = ({ ...props }: Props) => {
	const href = `/articulos/${props.slug}`
	return (
		<Card
			variant="unstyled"
			padding={8}
			_hover={{
				shadow: 'lg',
				bg: 'gray.100'
			}}
		>
			<CustomLink href={href}>
				<Text>{props.title}</Text>
			</CustomLink>
		</Card>
	)
}

export default ListArticule
