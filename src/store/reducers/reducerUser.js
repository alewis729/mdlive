import { SET_USERNAME } from "../types";

const initialState = {
	name: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USERNAME:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
