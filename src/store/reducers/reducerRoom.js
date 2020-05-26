import { UPDATE_CONTENT } from "../types";

const initialState = {
	content: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	if (type === UPDATE_CONTENT) {
		return {
			...state,
			content: payload,
		};
	} else return state;
};
