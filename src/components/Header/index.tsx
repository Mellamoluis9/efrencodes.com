import { FC } from 'react'
import { Props } from './types'

const Header: FC<Props> = ({ children }) => {
	return <header className="py-4">{children}</header>
}

export default Header
