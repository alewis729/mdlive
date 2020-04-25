import { SET_CURRENT_USER, ADD_USER, REMOVE_USER } from "../types";

export const setCurrentUser = (id, name, role) => dispatch => {
	dispatch({ type: SET_CURRENT_USER, payload: { id, name, role } });
};

export const addUser = (id, name, role) => dispatch => {
	dispatch({ type: ADD_USER, payload: { id, name, role } });
};

export const removeUser = id => dispatch => {
	dispatch({ type: REMOVE_USER, payload: id });
};
