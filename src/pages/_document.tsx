import NextDocument, { Html, Main, NextScript } from 'next/document'
import HeadSeo from 'components/HeadSeo'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="es">
				<HeadSeo />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
