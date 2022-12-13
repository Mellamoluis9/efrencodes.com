import { FC } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Props } from './types'

const Section: FC<Props> = ({ heading, subheading, children }) => {
	return (
		<Box as="section" py="3em">
			<Heading as="h2" size="lg" lineHeight={2}>
				{heading}
			</Heading>
			<Text as="p" fontSize="md" lineHeight={1.5} textColor="GrayText">
				{subheading}
			</Text>
			{children}
		</Box>
	)
}

export default Section
