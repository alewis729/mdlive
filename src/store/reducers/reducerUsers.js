import { SET_CURRENT_USER, ADD_USER, REMOVE_USER } from "../types";

const initialState = {
	current: null,
	all: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				current: {
					id: action.payload.id,
					name: action.payload.name,
					role: action.payload.role,
				},
			};
		case ADD_USER:
			return {
				...state,
				all: [
					...state.all,
					{
						id: action.payload.id,
						name: action.payload.name,
						role: action.payload.role,
					},
				],
			};
		case REMOVE_USER:
			return {
				...state,
				all: state.all.filter(user => user.id !== action.payload),
			};
		default:
			return state;
	}
};

export default rootReducer;
