import { FC } from 'react'
import { Props } from './types'

const Section: FC<Props> = ({ heading, subheading, children }) => {
	return (
		<section className="py-2.5">
			<h2 className="text-xl font-medium">{heading}</h2>
			<p className="text-base">{subheading}</p>
			{children}
		</section>
	)
}

export default Section
