import * as constants from "./constants";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
	activePage: ""
};

export default (state = initialState, {type, payload}) => {
	switch (type) {

	case constants.DREAMBOX_OPEN:
		return {
			activePage : payload
		};
	
	case constants.DREAMBOX_CLOSE:
		return {
			activePage : ""
		};

	case LOCATION_CHANGE :
		const pathname = payload.pathname;
		const [_, operation = ""] = pathname.split("/");
		return operation;


	default:
		return state;

	}
}