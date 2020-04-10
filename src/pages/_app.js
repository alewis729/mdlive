import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "@/components/themes";
import "@/markdown.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<title>● Markdown Live</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	);
};

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
