import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<link
						rel="preload"
						href={`https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Poppins:400,500,600|Poppins:wght@300;400;500;600;700&display=swap`}
						as="font"
						crossOrigin=""
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	};
};

export default MyDocument;
