import * as constants from "./constants";

export const addTodo = (todo) => {
	return {
		type: constants.ADD,
		payload: todo
	};
}

export const removeTodo = (id) => {
	return {
		type: constants.DELETE,
		payload: id
	}
}

export const search = (value) => {
	return {
		type: constants.SEARCH,
		payload: value
	}
}

const fetching = () => {
	return {
		type: constants.LOAD
	}
}

const fetchComplete = (todos) => {
	return {
		type: constants.LOAD_SUCCESS,
		payload: todos
	}
}

// Mockup data
// This data should be loaded form server
const todos = [
	{
		id: 1,
		title: "You should do this",
		createdAt: new Date()
	},
	{
		id: 2,
		title: "Another todo for @username",
		createdAt: new Date()
	}
]

const fetchTodos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(todos);
		}, 4000)
	})
}

export function loadTodos () {
	return async (dispatch) => {

		// Show loading
		dispatch(fetching());

		// Get todos
		const todos = await fetchTodos();
		dispatch(fetchComplete(todos));
	}
}