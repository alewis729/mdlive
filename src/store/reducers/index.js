import { combineReducers } from "redux";
import reducerRoom from "./reducerRoom";
import reducerSettings from "./reducerSettings";
import reducerUsers from "./reducerUsers";

export default combineReducers({
	room: reducerRoom,
	settings: reducerSettings,
	users: reducerUsers,
});
