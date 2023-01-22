import { FC } from 'react'
import { Props } from './types'

const Header: FC<Props> = ({ children }) => {
	return <header>{children}</header>
}

export default Header
