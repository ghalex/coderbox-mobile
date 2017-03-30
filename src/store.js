import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import { routerMiddleware } from "react-router-redux"
import { browserHistory } from "react-router";

const initialState = {};

export default function () {
	let middleware = applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory));
	let store = createStore(rootReducer, initialState, middleware);

	return store;
}