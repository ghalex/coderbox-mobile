import * as constants from "./constants";

const initialState = {
	isFetching: false,
	items: [],
	activePage: ""
};

export default (state = initialState, {type, payload}) => {
	switch (type) {

	case constants.LOAD:
		return {
			...state,
			isFetching: true
		};

	case constants.LOAD_SUCCESS:
		return {
			...state,
			isFetching: false,
			items: payload
		};

	case constants.DREAMBOX_OPEN:
		return {
			activePage : payload
		};		

	default:
		return state;

	}
}