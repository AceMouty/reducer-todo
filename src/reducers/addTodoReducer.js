import uuid from 'uuid/v1'
export const initialState = {
	todos:[{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589
	},]
}

export const reducer = (state, action) => {
	switch(action.type){
		case "ADD_TODO":
			return {todos:[...state.todos, {item: action.payload, completed: false, id: uuid() }]}
		case "CLEAR_TODOS":
			return {todos: state.todos.filter(todo => !todo.completed)}
		case "COMPLETE":
			return {todos: state.todos.map( todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo )}
		default:
			return state;
	}
}