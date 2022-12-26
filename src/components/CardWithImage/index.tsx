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
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Props } from './types'

const CardWithImage = ({ ...props }: Props) => {
	return (
		<Card width="100%" variant="unstyled" transition="all 250ms">
			<CardBody>
				<Image
					objectFit="cover"
					borderRadius="md"
					shadow="xl"
					width="100%"
					height="300px"
					src={props.src}
					alt={props.alt}
				/>
				<Heading as="h3" mt="5">
					{props.name}
				</Heading>
				<Stack direction="row" wrap="wrap" mt="3">
					{props?.tecnologies.map(({ name, color }) => (
						<Badge
							ml="1"
							fontSize="0.9em"
							colorScheme={color}
							textTransform="capitalize"
						>
							{name}
						</Badge>
					))}
				</Stack>
			</CardBody>
			<CardFooter mt="3">
				<Button
					as={Link}
					href={props.href}
					rightIcon={<ExternalLinkIcon />}
					colorScheme="pink"
					variant="link"
				>
					Visitar página
				</Button>
			</CardFooter>
		</Card>
	)
}

export default CardWithImage
