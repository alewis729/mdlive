import {
	SET_CURRENT_USER,
	UPDATE_CURRENT_ID,
	CLEAN_CURRENT_USER,
	UPDATE_USERS,
	REMOVE_USER,
} from "../types";

export const setCurrentUser = (id, name, role) => dispatch => {
	dispatch({ type: SET_CURRENT_USER, payload: { id, name, role } });
};

export const updateCurrentId = id => dispatch => {
	dispatch({ type: UPDATE_CURRENT_ID, payload: id });
};

export const cleanCurrentUser = () => dispatch => {
	dispatch({ type: CLEAN_CURRENT_USER });
};

export const updateUsers = users => dispatch => {
	dispatch({ type: UPDATE_USERS, payload: users });
};

export const removeUser = id => dispatch => {
	dispatch({ type: REMOVE_USER, payload: id });
};
