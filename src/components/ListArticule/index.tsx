import { List, ListItem, Text } from '@chakra-ui/react'
import CustomLink from 'components/common/CustomLink'
import { Props } from './types'

const ListArticule = ({ ...props }: Props) => {
	const href = `/articulos/${props.slug}`
	return (
		<List spacing={3}>
			<ListItem>
				<CustomLink href={href}>
					<Text>{props.title}</Text>
					<Text>{props.description}</Text>
				</CustomLink>
			</ListItem>
		</List>
	)
}

export default ListArticule
