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

export function loadDreamboxes () {
	return (dispatch, getState) => {

		let dreamboxes = getState().dreamboxes.items;

		if (dreamboxes.items > 0) {
			dispatch(fetchComplete(dreamboxes));
		}

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