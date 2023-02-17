import { FC } from 'react'
import { Props } from './types'
import { RoughNotation } from 'react-rough-notation'

const Section: FC<Props> = ({ heading, subheading, children }) => {
	return (
		<section className="pt-16 pb-24">
			<h2 className="text-xl font-medium tracking-wide text-gray-800">
				<RoughNotation
					type="box"
					show={true}
					animationDelay={2000}
					animationDuration={1000}
				>
					{heading}
				</RoughNotation>
			</h2>
			<p>{subheading}</p>
			{children}
		</section>
	)
}

export default Section
