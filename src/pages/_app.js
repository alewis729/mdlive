import React, { Fragment } from "react";
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

	return (
		<Fragment>
			<Head>
				<title>● Markdown Live</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
		</Fragment>
	);
};

MyApp.propTypes = {
	reduxStore: PropTypes.object.isRequired,
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object,
};

export default withReduxStore(MyApp);
