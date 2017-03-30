import * as constants from "./constants";
import request from "superagent";

const fetching = () => {
	return {
		type: constants.LOAD
	}
}

const fetchComplete = (dreamboxes) => {
	return {
		type: constants.LOAD_SUCCESS,
		payload: dreamboxes
	}
}

const openDreambox = (dreamboxId) => {
	return {
		type: constants.DREAMBOX_OPEN,
		payload: dereamboxId
	}
}


export function xx () {
	return (dispatch) => {

		// Show loading
		dispatch(fetching());

	}
}

export function loadDreamboxes () {
	return async (dispatch) => {

		// Show loading
		dispatch(fetching());

		request
			.get("https://www.coderbox.me/api/dreamboxes")
			.set("content-type", "application/json")
			.end(
				(error, result) => {
					dispatch(fetchComplete(result.body.data));
				}
			)
	}
}