import * as constants from "./constants";


export const openDreambox = (dreamboxId) => {
	return {
		type: constants.DREAMBOX_OPEN,
		payload: dereamboxId
	}
}

export const closeDreambox = () => {
	return {
		type: constants.DREAMBOX_CLOSE,
	}
}