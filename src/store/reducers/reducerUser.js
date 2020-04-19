import { SET_USERNAME } from "../types";

const initialState = {
	name: "",
	role: "viewer",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERNAME:
			return {
				...state,
				name: action.payload.name,
				role: action.payload.role,
			};
		default:
			return state;
	}
};

export default rootReducer;
