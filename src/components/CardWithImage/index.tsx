import Image from 'next/image'
import Link from 'next/link'
import {
	Card,
	Stack,
	CardBody,
	CardFooter,
	Heading,
	Badge,
	Text,
	Button
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Props } from './types'

const CardWithImage = ({ ...props }: Props) => {
	return (
		<Card maxW="sm" size="sm">
			<CardBody>
				<Image
					src={props.src}
					alt={props.alt}
					width={400}
					height={300}
				/>
				<Heading as="h3" size="md" lineHeight={2} textColor="gray.700">
					{props.name}
				</Heading>
				<Stack direction="row" wrap="wrap">
					{props?.tecnologies.map((item) => (
						<Badge color="gray.700">{item}</Badge>
					))}
				</Stack>
			</CardBody>
			<CardFooter>
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
