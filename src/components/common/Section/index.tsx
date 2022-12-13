import { FC } from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { Props } from './types'

const Section: FC<Props> = ({ heading, subheading, children }) => {
	return (
		<section>
			<Heading as="h2" size="lg">
				{heading}
			</Heading>
			<Text fontSize="md">{subheading}</Text>
			{children}
		</section>
	)
}

export default Section
