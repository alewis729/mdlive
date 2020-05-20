import { CHANGE_THEME, CHANGE_LANGUAGE } from "../types";

const themes = ["light", "dark"];
const locales = ["en", "es"];
const initialState = {
	theme: localStorage.getItem("theme") ?? themes[0],
	languages: locales,
	currentLang: localStorage.getItem("locale") ?? "en",
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	if (type === CHANGE_THEME) {
		const theme = themes.includes(payload)
			? payload
			: themes[1 - themes.indexOf(state.theme)];
		localStorage.setItem("theme", theme);

		return {
			...state,
			theme,
		};
	} else if (type === CHANGE_LANGUAGE) {
		const currentLang = locales.includes(payload) ? payload : state.currentLang;
		localStorage.setItem("locale", currentLang);

		return {
			...state,
			currentLang,
		};
	} else return state;
};
