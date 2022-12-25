import NextDocument, { Html, Main, NextScript } from 'next/document'
import { Head } from 'next/document'
import DefaultHead from 'components/DefaultHead'
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
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
