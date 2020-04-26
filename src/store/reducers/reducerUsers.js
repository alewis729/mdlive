import {
	SET_CURRENT_USER,
	UPDATE_CURRENT_ID,
	UPDATE_USERS,
	ADD_USER,
	REMOVE_USER,
} from "../types";

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
	} else if (type === UPDATE_CURRENT_ID) {
		const { name, role } = state.current;
		return {
			...state,
			current: { id: payload, name, role },
			all: state.all.map(user =>
				user.id
					? user
					: {
							id: payload,
							name: user.name,
							role: user.role,
					  }
			),
		};
	} else if (type === UPDATE_USERS) {
		const newUser = payload.find(user => user.id === state.current.id);
		let currentStateUpdate = {};
		if (
			newUser.id !== state.current.id ||
			newUser.name !== state.current.name ||
			newUser.role !== state.current.role
		) {
			currentStateUpdate = { current: newUser };
		}
		return {
			...state,
			...currentStateUpdate,
			all: payload,
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
