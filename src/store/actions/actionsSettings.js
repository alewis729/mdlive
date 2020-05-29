import {
	CHANGE_THEME,
	CHANGE_LANGUAGE,
	SET_LOADING,
	SET_ALERT,
	CLEAR_ALERT,
} from "../types";

export const setLoading = isLoading => dispatch => {
	dispatch({ type: SET_LOADING, payload: isLoading });
};

export const changeTheme = theme => dispatch => {
	dispatch({ type: CHANGE_THEME, payload: theme });
};

export const changeLang = lang => dispatch => {
	dispatch({ type: CHANGE_LANGUAGE, payload: lang });
};

export const setAlert = data => dispatch => {
	dispatch({ type: SET_ALERT, payload: data });
};

export const clearAlert = () => dispatch => {
	dispatch({ type: CLEAR_ALERT });
};
