import { FC, Fragment } from 'react'
import { Props } from './types'

const HeadSeo: FC<Props> = ({ metadata, schemaPage }) => {
	return (
		<Fragment>
			{schemaPage && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schemaPage)
					}}
				/>
			)}
			<link rel="canonical" href={metadata.url} />
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
			<meta name="msapplication-TileColor" content="#d4d4d8" />
			<meta name="robots" content="index, follow" />
			<meta name="apple-mobile-web-app-title" content={metadata.url} />
			<meta name="application-name" content={metadata.url} />
			<meta name="theme-color" content="#d4d4d8" />
			<meta name="title" content={metadata?.title} />
			<meta name="description" content={metadata.description} />
			<meta name="keywords" content={metadata.keywords} />
			<meta name="author" content={metadata.openGraph.siteName} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content={metadata.openGraph.type} />
			<meta property="og:url" content={metadata.openGraph.url} />
			<meta property="og:title" content={metadata?.title} />
			<meta property="og:description" content={metadata.description} />
			<meta property="og:image" content={metadata.openGraph.images.url} />
			<meta
				property="og:image:alt"
				content={metadata.openGraph.siteName}
			/>
			<meta
				property="og:image:width"
				content={metadata.openGraph.images.width}
			/>
			<meta
				property="og:image:height"
				content={metadata.openGraph.images.height}
			/>
			<meta property="og:locale" content={metadata.openGraph.locale} />
			<meta
				property="og:site_name"
				content={metadata.openGraph.siteName}
			/>
			{/* Twitter */}
			<meta property="twitter:card" content={metadata.openGraph.type} />
			<meta property="twitter:url" content={metadata.openGraph.url} />
			<meta
				property="twitter:title"
				content={metadata.openGraph.siteName}
			/>
			<meta
				property="twitter:description"
				content={metadata.description}
			/>
			<meta
				property="twitter:image"
				content={metadata.openGraph.images.url}
			/>
			<meta
				property="twitter:creator"
				content={metadata.openGraph.creator}
			/>
			<meta
				property="twitter:site"
				content={metadata.openGraph.siteName}
			/>
			<meta property="twitter:image:alt" content={metadata?.title} />
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
