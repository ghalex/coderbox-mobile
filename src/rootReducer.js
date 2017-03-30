import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import dreamboxes from "dreamboxes"
import pages from "pages"

export default combineReducers({
	"routing": routerReducer,
	"dreamboxes": dreamboxes.reducer,
	"pages": pages.reducer
})