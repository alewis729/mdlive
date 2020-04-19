import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers";

export default initialState => {
	const store = createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);

	if (module.hot) {
		module.hot.accept("./reducers", () => {
			const createNextReducer = require("./reducers").default;

			store.replaceReducer(createNextReducer(initialState));
		});
	}

	return store;
};
