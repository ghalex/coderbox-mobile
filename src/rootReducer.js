import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import todos from "todos";
import dreamboxes from "dreamboxes"

export default combineReducers({
	"routing": routerReducer,
	"todos": todos.reducer,
	"dreamboxes": dreamboxes.reducer
})