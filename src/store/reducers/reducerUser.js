import { SET_USERNAME } from "../types";

const initialState = {
	name: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERNAME:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
