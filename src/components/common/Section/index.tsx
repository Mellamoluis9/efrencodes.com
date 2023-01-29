import { FC } from 'react'
import { Props } from './types'

const Section: FC<Props> = ({ heading, subheading, children }) => {
	return (
		<section className="pt-16 pb-24">
			<h2 className="text-xl font-medium tracking-wide text-gray-800">
				{heading}
			</h2>
			<p>{subheading}</p>
			{children}
		</section>
	)
}

export default Section
