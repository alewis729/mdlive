import { CHANGE_THEME, CHANGE_LANGUAGE } from "../types";

export const changeTheme = theme => dispatch => {
	dispatch({ type: CHANGE_THEME, payload: theme });
};

export const changeLang = lang => dispatch => {
	dispatch({ type: CHANGE_LANGUAGE, payload: lang });
};
