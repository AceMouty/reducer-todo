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
			console.log("FROM COMPLETE", action.payload)
			return {todos: state.todos.filter(todo => {
				if(todo.id === action.payload){
					console.log("MADE IT TO THE IF", todo)
					const newCom = !todo.completed
					console.log(newCom)
					return {...todo, completed: !todo.completed}
				} else {
					return todo
				}
			})}
		default:
			return state;
	}
}