import { FC, Fragment } from 'react'
import { Props } from './types'

const HeadSeo: FC<Props> = ({ metaTags, structuredData }) => {
	return (
		<Fragment>
			<meta charSet="utf-8" />
			{structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData)
					}}
				/>
			)}
			<title>{metaTags.title}</title>
			<link rel="canonical" href={metaTags.canonical} />
			<link
				type="text/plain"
				rel="author"
				href="https://efrencodes.com/humans.txt"
			/>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1"
			/>
			<meta name="google" content="notranslate" />
			<meta name="msapplication-TileColor" content="#0099ff" />
			<meta name="robots" content="index, follow" />
			<meta name="apple-mobile-web-app-title" content="efrencodes.com" />
			<meta name="application-name" content="efrencodes.com" />
			<meta name="theme-color" content="#0099ff" />
			<meta name="title" content={metaTags.title} />
			<meta name="description" content={metaTags.description} />
			<meta name="keywords" content={metaTags.keywords} />
			<meta name="author" content="Efrén Martínez" />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={metaTags.canonical} />
			<meta property="og:title" content={metaTags.title} />
			<meta property="og:description" content={metaTags.description} />
			<meta property="og:image" content={metaTags.image} />
			<meta property="og:image:alt" content={metaTags.title} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:locale" content="es_MX" />
			<meta property="og:site_name" content="efrencodes.com" />
			{/* Twitter */}
			<meta property="twitter:card" content="website" />
			<meta property="twitter:url" content={metaTags.canonical} />
			<meta property="twitter:title" content={metaTags.title} />
			<meta
				property="twitter:description"
				content={metaTags.description}
			/>
			<meta property="twitter:image" content={metaTags.image} />
			<meta property="twitter:creator" content={metaTags.creator} />
			<meta property="twitter:site" content={metaTags.creator} />
			<meta property="twitter:image:alt" content={metaTags.title} />
			{/* Bing Webmaster Tools */}
			<meta
				name="msvalidate.01"
				content="CFB0EE4F9641D78D3282FD8FAA6D0565"
			/>
			{/* ahrefs */}
			<meta
				name="ahrefs-site-verification"
				content="9ad8ba080db7b2dfb9e2af32909749dbec24348bbee6f5aefc5de4e9d28c6b87"
			/>
		</Fragment>
	)
}

export default HeadSeo
