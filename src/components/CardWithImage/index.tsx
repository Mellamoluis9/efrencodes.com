import Link from 'next/link'
import {
	Card,
	Stack,
	CardBody,
	CardFooter,
	Heading,
	Badge,
	Image,
	Button
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
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
				<Image
					objectFit="cover"
					borderRadius="md"
					width="100%"
					height="300px"
					src={props.src}
					alt={props.alt}
					_hover={{
						transform: 'scale(1.1)'
					}}
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
				<Button
					as={Link}
					href={props.href}
					rightIcon={<ArrowRightIcon color="black" />}
					colorScheme="pink"
					variant="link"
					fontSize="14px"
					fontWeight="500"
				>
					Visitar página
				</Button>
			</CardFooter>
		</Card>
	)
}

export default CardWithImage
