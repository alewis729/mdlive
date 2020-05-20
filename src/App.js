import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Routes from "@/routes";
import i18nConfig from "@/locales/i18n-config";
import { light, dark } from "@/components/themes";
import "./markdown.css";
import "./markdown-dark.css";

i18n.use(initReactI18next).init({
	lng: localStorage.getItem("locale") ?? "en",
	...i18nConfig,
});

const App = () => {
	const currentTheme = useSelector(state => state.settings.theme);
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
