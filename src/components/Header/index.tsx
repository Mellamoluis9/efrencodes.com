import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { Props } from './types'

const Header: FC<Props> = ({ children }) => {
	return (
		<Flex
			as="header"
			gap="24px"
			mt="80px"
			mb="80px"
			flexDirection={{ base: 'column', md: 'row' }}
			alignItems={{ base: 'start', md: 'end' }}
		>
			{children}
		</Flex>
	)
}

export default Header
