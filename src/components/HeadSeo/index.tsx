import { Head } from 'next/document'
import { getCssText } from '@stitches'

const HeadSeo = () => {
	return (
		<Head>
			<title>Efren Martinez - Frontend Developer</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400&display=swap"
				rel="stylesheet"
			/>
			<style
				id="stitches"
				dangerouslySetInnerHTML={{ __html: getCssText() }}
			/>
		</Head>
	)
}

export default HeadSeo
