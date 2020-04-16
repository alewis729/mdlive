import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const persistConfig = {
	key: "primary",
	storage,
	whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initializeStore = (state = initialState) => {
	return createStore(
		persistedReducer,
		state,
		composeWithDevTools(applyMiddleware(...middleware))
	);
};
