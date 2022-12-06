import { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Props } from './types'

const WrapperRoughNotation = ({
	children,
	type = 'underline',
	color
}: Props) => {
	const [show] = useState<boolean>(true)
	return (
		<RoughNotation
			type={type}
			show={show}
			color={color}
			multiline={true}
			padding={[0, 2]}
			iterations={1}
		>
			{children}
		</RoughNotation>
	)
}

export default WrapperRoughNotation
