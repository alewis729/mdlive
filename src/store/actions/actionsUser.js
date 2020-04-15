import { SET_USERNAME } from "../types";

export const setUsername = name => async dispatch => {
	dispatch({ type: SET_USERNAME, payload: name });
};
