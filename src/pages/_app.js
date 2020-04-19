import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "@/components/themes";
import withReduxStore from "@/hocs/with-redux-store";
import "@/markdown.css";

const MyApp = ({ Component, pageProps, store }) => {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<title>● Markdown Live</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object,
	store: PropTypes.object,
};

export default withReduxStore(MyApp);
