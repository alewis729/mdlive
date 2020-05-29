import {
	CHANGE_THEME,
	CHANGE_LANGUAGE,
	SET_LOADING,
	SET_ALERT,
	CLEAR_ALERT,
} from "../types";

const themes = ["light", "dark"];
const locales = ["en", "es", "gr"];
const initialState = {
	loading: false,
	theme: localStorage.getItem("theme") ?? themes[0],
	languages: locales,
	currentLang: localStorage.getItem("locale") ?? "en",
	alert: { type: null, user: null },
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	if (type === SET_LOADING) {
		return {
			...state,
			loading: payload,
		};
	} else if (type === CHANGE_THEME) {
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
	} else if (type === SET_ALERT) {
		const { type, user } = payload;
		return {
			...state,
			alert: { type, user },
		};
	} else if (type === CLEAR_ALERT) {
		return {
			...state,
			alert: { type: null, user: null },
		};
	} else return state;
};
