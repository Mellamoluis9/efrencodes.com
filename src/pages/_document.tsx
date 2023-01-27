import NextDocument, { Html, Main, NextScript } from 'next/document'
import { Head } from 'next/document'
import DefaultHead from '@components/DefaultHead'
import { metaTags, structuredData } from 'catalogs/metatags'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="es">
				<Head>
					<DefaultHead
						metaTags={metaTags}
						structuredData={structuredData}
					/>
					<script async src="https://cdn.splitbee.io/sb.js" />
				</Head>
				<body className="leading-loose bg-blobs antialiased overflow-x-hidden">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
