import {
	SET_CURRENT_USER,
	UPDATE_CURRENT_ID,
	UPDATE_USERS,
	ADD_USER,
	REMOVE_USER,
} from "../types";

export const setCurrentUser = (id, name, role) => dispatch => {
	dispatch({ type: SET_CURRENT_USER, payload: { id, name, role } });
};

export const updateCurrentId = id => dispatch => {
	dispatch({ type: UPDATE_CURRENT_ID, payload: id });
};

export const updateUsers = users => dispatch => {
	dispatch({ type: UPDATE_USERS, payload: users });
};

export const addUser = (id, name, role) => dispatch => {
	dispatch({ type: ADD_USER, payload: { id, name, role } });
};

export const removeUser = id => dispatch => {
	dispatch({ type: REMOVE_USER, payload: id });
};
