import { CHANGE_THEME, CHANGE_LANGUAGE, SET_LOADING } from "../types";

export const setLoading = isLoading => dispatch => {
	dispatch({ type: SET_LOADING, payload: isLoading });
};

export const changeTheme = theme => dispatch => {
	dispatch({ type: CHANGE_THEME, payload: theme });
};

export const changeLang = lang => dispatch => {
	dispatch({ type: CHANGE_LANGUAGE, payload: lang });
};
