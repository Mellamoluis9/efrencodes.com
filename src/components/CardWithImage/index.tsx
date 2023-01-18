import {
	Card,
	Stack,
	CardBody,
	CardFooter,
	Heading,
	Badge,
	Text
} from '@chakra-ui/react'
import { ImageWrapper } from '@components/index'
import CustomLink from '@components/common/CustomLink'
import { Props } from './types'

const CardWithImage = ({ ...props }: Props) => {
	return (
		<Card
			shadow="lg"
			width="100%"
			variant="unstyled"
			transition="all 250ms"
			padding={8}
			backgroundImage={props.backgroundImage}
		>
			<CardBody>
				<ImageWrapper
					width={100}
					height={300}
					thumbnail={props.src}
					alt={props.alt}
				/>
				<Heading as="h3" mt="15px" mb="24px">
					{props.name}
				</Heading>
				<Stack direction="row" wrap="wrap">
					{props?.tecnologies.map(({ name, color }) => (
						<Badge
							ml="1"
							mr="1"
							fontSize="14px"
							fontWeight="500"
							colorScheme={color}
							textTransform="capitalize"
						>
							{name}
						</Badge>
					))}
				</Stack>
			</CardBody>
			<CardFooter mt="24px">
				<CustomLink href={props.href} isExternal={true}>
					<Text as="p" mt="20px" color="pink.600">
						Visitar página
					</Text>
				</CustomLink>
			</CardFooter>
		</Card>
	)
}

export default CardWithImage
