import * as constants from "./constants";

const initialState = {
	isFetching: false,
	items: []
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
		}

	default:
		return state;

	}
}