import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Routes from "@/routes";
import { light, dark } from "@/components/themes";
import "./markdown.css";
import "./markdown-dark.css";

const App = () => {
	const currentTheme = useSelector((state) => state.settings.theme);
	const themes = { light, dark };

	return (
		<BrowserRouter>
			<ThemeProvider theme={themes[currentTheme]}>
				<CssBaseline />
				<Route component={Routes} />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
