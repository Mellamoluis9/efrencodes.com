import Image from 'next/image'
import {
	Card,
	Stack,
	CardBody,
	CardFooter,
	Heading,
	Badge
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import CustomLink from 'components/common/CustomLink'
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
				<Heading as="h3" size="md">
					{props.name}
				</Heading>
				<Stack direction="row" wrap="wrap">
					{props?.tecnologies.map((item) => (
						<Badge color="purple.700">{item}</Badge>
					))}
				</Stack>
			</CardBody>
			<CardFooter>
				<CustomLink href={props.href}>
					Visitar proyecto <ExternalLinkIcon />
				</CustomLink>
			</CardFooter>
		</Card>
	)
}

export default CardWithImage
