import { CHANGE_THEME } from "../types";

const themes = ["light", "dark"];
const initialState = {
	theme: "light",
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	if (type === CHANGE_THEME) {
		return {
			...state,
			theme: themes.includes(payload)
				? payload
				: themes[1 - themes.indexOf(state.theme)],
		};
	} else return state;
};
