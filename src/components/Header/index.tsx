import { FC } from 'react'
import { Props } from './types'

const Header: FC<Props> = ({ children }) => {
	return <header className="pt-16 pb-6">{children}</header>
}

export default Header
