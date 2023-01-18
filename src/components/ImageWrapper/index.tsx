import { FC } from 'react'
import Image from 'next/image'
import { ImageWrapperProps } from './types'

const ImageWrapper: FC<ImageWrapperProps> = ({
	thumbnail,
	alt,
	width,
	height
}) => {
	return (
		<Image
			src={thumbnail}
			alt={alt}
			width={width}
			height={height}
			className="h-full w-full mix-blend-overlay rounded-md shadow-lg shadow-cyan-500/50"
		/>
	)
}

export default ImageWrapper
