import { combineReducers } from "redux";
import reducerUsers from "./reducerUsers";

export default combineReducers({
	users: reducerUsers,
});
