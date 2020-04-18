import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "@/components/themes";
import withReduxStore from "@/hocs/with-redux-store";
import "@/markdown.css";

const MyApp = ({ reduxStore, Component, pageProps }) => {
	const persistor = persistStore(reduxStore);
	console.log(Component);

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
			<ThemeProvider theme={theme}>
				<Provider store={reduxStore}>
					<PersistGate
						loading={<Component {...pageProps} />}
						persistor={persistor}
					>
						<CssBaseline />
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</>
	);
};

MyApp.propTypes = {
	reduxStore: PropTypes.object.isRequired,
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object,
};

MyApp.defaultProps = {
	pageProps: {},
};

export default withReduxStore(MyApp);
