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
	return new Promise((resolve) => {
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


/*
function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP('https://www.coderbox.me/api/dreamboxes', function(data){
    console.log(data);
}); 

)*/