import { combineReducers } from "redux";
import reducerUsers from "./reducerUsers";
import reducerSettings from "./reducerSettings";

export default combineReducers({
	settings: reducerSettings,
	users: reducerUsers,
});
