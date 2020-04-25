import { SET_CURRENT_USER, ADD_USER, REMOVE_USER } from "../types";

const initialState = {
	current: null,
	all: [],
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	if (type === SET_CURRENT_USER) {
		const { id, name, role } = payload;
		const user = { id, name, role };

		return {
			...state,
			current: user,
			all: [...state.all, user],
		};
	} else if (type === ADD_USER) {
		const { id, name, role } = payload;

		return {
			...state,
			all: [...state.all, { id, name, role }],
		};
	} else if (type === REMOVE_USER) {
		return {
			...state,
			all: state.all.filter(user => user.id !== action.payload),
		};
	} else return state;
};

export default rootReducer;
