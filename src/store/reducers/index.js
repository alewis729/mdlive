import { combineReducers } from "redux";
import reducerUser from "./reducerUser";

export default combineReducers({
	user: reducerUser,
});
