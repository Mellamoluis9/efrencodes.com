import NextDocument, { Html, Main, NextScript } from 'next/document'
import HeadSeo from 'components/HeadSeo'
import { metaTags, structuredData } from 'catalogs/metatags'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="es">
				<HeadSeo metaTags={metaTags} structuredData={structuredData} />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
