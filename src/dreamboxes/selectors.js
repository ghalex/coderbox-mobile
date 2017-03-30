import { createSelector } from "reselect"

export const all = (state) => state.dreamboxes.items;
export const one = (state, ownProps) => {
	return all(state).find((box) => box._id == ownProps.boxId);
}