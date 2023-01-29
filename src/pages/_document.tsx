import NextDocument, { Html, Main, NextScript } from 'next/document'
import { Head } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="es">
				<Head>
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
