import { SET_USERNAME } from "../types";

export const setUsername = (name, role) => dispatch => {
	dispatch({ type: SET_USERNAME, payload: { name, role } });
};
