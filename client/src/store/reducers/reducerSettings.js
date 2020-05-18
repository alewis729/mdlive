import { CHANGE_THEME } from "../types";

const themes = ["light", "dark"];
const initialState = {
	theme: localStorage.getItem("theme") || themes[0]
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
			theme
		};
	} else return state;
};
