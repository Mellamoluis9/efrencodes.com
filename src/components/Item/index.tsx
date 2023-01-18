import { FC } from 'react'
import {
	Card,
	CardBody,
	Heading,
	Text,
	Image,
	Flex,
	Box
} from '@chakra-ui/react'
import { ImageWrapper } from '@components/index'
import CustomLink from '@components/common/CustomLink'
import { Props } from './types'

const Item: FC<Props> = ({ name, content, cover, href, isExternal = true }) => {
	return (
		<Card variant="outline" shadow="none" _hover={{ bg: '#fff7ed' }}>
			<CardBody>
				<Flex gap="24px" alignItems="center">
					<ImageWrapper
						thumbnail={cover}
						alt={name}
						width={40}
						height={40}
					/>
					<Box>
						<CustomLink href={href} isExternal={isExternal}>
							<Heading
								as="h3"
								fontSize="18px !important"
								textTransform="capitalize"
							>
								{name}
							</Heading>
							<Text>{content}</Text>
						</CustomLink>
					</Box>
				</Flex>
			</CardBody>
		</Card>
	)
}

export default Item
